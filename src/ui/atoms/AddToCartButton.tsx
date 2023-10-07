"use client";

import clsx from "clsx";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const status = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			className={clsx(
				"mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",
			)}
			type="submit"
			disabled={status.pending}
		>
			Add to cart
		</button>
	);
};
