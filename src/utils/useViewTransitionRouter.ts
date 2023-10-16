import { useLayoutEffect, useRef } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";

interface TransitionHelperArg {
	skipTransition?: boolean;
	classNames?: string[];
	updateDOM: () => Promise<void> | void;
}

export function transitionHelper({
	skipTransition = false,
	classNames = [],
	updateDOM,
}: TransitionHelperArg) {
	if (skipTransition || !document.startViewTransition) {
		const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});
		const ready = Promise.reject(Error("View transitions unsupported"));

		// Avoid spamming the console with this error unless the promise is used.
		ready.catch(() => {});

		return {
			ready,
			updateCallbackDone,
			finished: updateCallbackDone,
			skipTransition: () => {},
		};
	}

	document.documentElement.classList.add(...classNames);

	const transition = document.startViewTransition(updateDOM);

	void transition.finished.finally(() => document.documentElement.classList.remove(...classNames));

	return transition;
}

export function useViewTransitionRouter(): ReturnType<typeof useNextRouter> {
	const router = useNextRouter();
	const pathname = usePathname();

	const promiseCallbacks = useRef<Record<"resolve" | "reject", (value: unknown) => void> | null>(
		null,
	);

	useLayoutEffect(() => {
		return () => {
			if (promiseCallbacks.current) {
				promiseCallbacks.current.resolve(undefined);
				promiseCallbacks.current = null;
			}
		};
	}, [pathname]);

	return {
		...router,
		back: () => {
			transitionHelper({
				updateDOM: () => router.back(),
			});
		},
		forward: () => {
			transitionHelper({
				updateDOM: () => router.forward(),
			});
		},
		push: (...args: Parameters<typeof router.push>) => {
			transitionHelper({
				updateDOM: () => {
					const url = args[0] as string;
					if (url === pathname) {
						router.push(...args);
					} else {
						return new Promise((resolve, reject) => {
							// @ts-expect-error todo: fix this
							promiseCallbacks.current = { resolve, reject };
							router.push(...args);
						});
					}
				},
			});
		},
		replace: (...args: Parameters<typeof router.replace>) => {
			transitionHelper({
				updateDOM: () => router.replace(...args),
			});
		},
	};
}
