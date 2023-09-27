"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "./actions";

export const RemmpveButton = ({ itemId }: { itemId: string }) => {
	const [isPendingTransition, startTransition] = useTransition();

	const router = useRouter();

	return (
		<div className="absolute right-0 top-0">
			<button
				type="button"
				className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
				disabled={isPendingTransition}
				onClick={() => {
					startTransition(async () => {
						await removeItem(itemId);
						router.refresh();
					});
				}}
			>
				<span className="sr-only">Remove</span>
				<XMarkIcon className="h-5 w-5" aria-hidden="true" />
			</button>
		</div>
	);
};
