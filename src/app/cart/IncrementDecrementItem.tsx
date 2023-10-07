"use client";

import { experimental_useOptimistic as useOptimistic, useTransition } from "react";
import { changeItemQuantity } from "./actions";

type IncrementDecrementItemProps = {
	quantity: number;
	itemId: string;
};

export const IncrementDecrementItem = ({ quantity, itemId }: IncrementDecrementItemProps) => {
	const [optimisticQuantity, setQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	const [isPending] = useTransition();

	const handleDecrement = async () => {
		if (optimisticQuantity === 1) {
			return;
		}
		try {
			setQuantity(optimisticQuantity - 1);
			await changeItemQuantity(itemId, optimisticQuantity - 1);
		} catch (error) {}
	};

	const handleIncrement = async () => {
		try {
			setQuantity(optimisticQuantity + 1);
			await changeItemQuantity(itemId, optimisticQuantity + 1);
		} catch (error) {}
	};

	return (
		<>
			<button
				data-testid="decrement"
				className="h-8 w-6 rounded-md border border-gray-200  text-center text-base font-medium hover:bg-indigo-50"
				onClick={handleDecrement}
				disabled={isPending}
			>
				-
			</button>

			<output
				data-testid="quantity"
				className="mx-2 h-8 w-6   text-left text-base font-medium text-gray-700 shadow-sm"
			>
				{optimisticQuantity}
			</output>
			<button
				data-testid="increment"
				disabled={isPending}
				onClick={handleIncrement}
				className="h-8 w-6 rounded-md border border-gray-200  text-center text-base font-medium hover:bg-indigo-50"
			>
				+
			</button>
		</>
	);
};
