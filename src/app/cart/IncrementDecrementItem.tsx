"use client";

import { useState, useTransition } from "react";
import { changeItemQuantity } from "./actions";

type IncrementDecrementItemProps = {
	quantity: number;
	itemId: string;
};

export const IncrementDecrementItem = ({ quantity, itemId }: IncrementDecrementItemProps) => {
	const [optimisticQuantity, setQuantity] = useState(() => quantity);
	const [isPending, startTransition] = useTransition();

	const handleDecrement = async () => {
		startTransition(async () => {
			if (optimisticQuantity === 1) {
				return;
			}
			try {
				await changeItemQuantity(itemId, optimisticQuantity - 1);
				setQuantity((q) => q - 1);
			} catch (error) {}
		});
	};

	const handleIncrement = async () => {
		startTransition(async () => {
			try {
				await changeItemQuantity(itemId, optimisticQuantity + 1);
				setQuantity((q) => q + 1);
			} catch (error) {}
		});
	};

	return (
		<>
			<button
				className="h-8 w-6 rounded-md border border-gray-200  text-center text-base font-medium hover:bg-indigo-50"
				onClick={handleDecrement}
				disabled={isPending}
			>
				-
			</button>

			<output className="mx-2 h-8 w-6   text-left text-base font-medium text-gray-700 shadow-sm">
				{optimisticQuantity}
			</output>
			<button
				disabled={isPending}
				onClick={handleIncrement}
				className="h-8 w-6 rounded-md border border-gray-200  text-center text-base font-medium hover:bg-indigo-50"
			>
				+
			</button>
		</>
	);
};
