"use client";

import React, { useEffect, useState } from "react";
import { changeItemQuantity } from "./actions";

type IncrementDecrementItemProps = {
	quantity: number;
	itemId: string;
};

export const IncrementDecrementItem = ({ quantity, itemId }: IncrementDecrementItemProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);
	const [isPending, setIsPending] = useState(false);

	const handleDecrement = async () => {
		if (optimisticQuantity === 1) {
			return;
		}

		const newQuantity = optimisticQuantity - 1;
		setOptimisticQuantity(newQuantity);

		try {
			setIsPending(true);
			await changeItemQuantity(itemId, newQuantity);
		} catch (error) {
			setOptimisticQuantity(optimisticQuantity + 1);
		} finally {
			setIsPending(false);
		}
	};

	const handleIncrement = async () => {
		const newQuantity = optimisticQuantity + 1;
		setOptimisticQuantity(newQuantity);

		try {
			setIsPending(true);
			await changeItemQuantity(itemId, newQuantity);
		} catch (error) {
			setOptimisticQuantity(optimisticQuantity - 1);
		} finally {
			setIsPending(false);
		}
	};

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return !isLoaded ? null : (
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
				className="mx-2 h-8 w-6 text-left text-base font-medium text-gray-700 shadow-sm"
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
