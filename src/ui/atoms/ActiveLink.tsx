"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps<T extends string> = Readonly<{
	className: string;
	activeClassName: string;
	href: Route<T>;
	children: string;
	exact?: boolean;
}>;

export function ActiveLink<T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: LinkItemProps<T>) {
	const pathname = usePathname();

	const strippedPathname = pathname.split("?")[0] as string;
	const strippedHref = href.split("?")[0] as string;

	const isActive = exact
		? strippedPathname === strippedHref
		: strippedPathname.startsWith(strippedHref);

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</Link>
	);
}
