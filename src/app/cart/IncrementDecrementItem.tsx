"use client";

import React, { useState } from "react";
import { changeItemQuantity } from "./actions";

type IncrementDecrementItemProps = {
	quantity: number;
	itemId: string;
};

export const IncrementDecrementItem = ({ quantity, itemId }: IncrementDecrementItemProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);
	const [isPending, setIsPending] = useState(false);

	const handleDecrement = async () => {
		if (optimisticQuantity === 1) {
			return;
		}

		// Optimistic update
		const newQuantity = optimisticQuantity - 1;
		setOptimisticQuantity(newQuantity);

		// Perform async action and handle errors
		try {
			setIsPending(true);
			await changeItemQuantity(itemId, newQuantity);
		} catch (error) {
			// Handle error and possibly revert the optimistic update
			setOptimisticQuantity(optimisticQuantity + 1);
		} finally {
			setIsPending(false);
		}
	};

	const handleIncrement = async () => {
		// Optimistic update
		const newQuantity = optimisticQuantity + 1;
		setOptimisticQuantity(newQuantity);

		// Perform async action and handle errors
		try {
			setIsPending(true);
			await changeItemQuantity(itemId, newQuantity);
		} catch (error) {
			// Handle error and possibly revert the optimistic update
			setOptimisticQuantity(optimisticQuantity - 1);
		} finally {
			setIsPending(false);
		}
	};

	return (
		<>
			<button
				data-testid="decrement"
				className="h-8 w-6 rounded-md border border-gray-200  text-center text-base font-medium hover:bg-indigo-50"
				onClick={handleDecrement}
				disabled={isPending || optimisticQuantity === 1}
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
