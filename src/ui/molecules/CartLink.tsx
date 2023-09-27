import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCartFromCookies } from "@/api/orders";

export const CartLink = async () => {
	const cart = await getCartFromCookies();

	const sum = cart?.orderItems.reduce((acc, cur) => acc + cur.quantity, 0);

	return (
		<div className="ml-auto flow-root">
			<Link href="/cart" className="group -m-2 flex items-center p-2">
				<ShoppingCartIcon
					className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
					aria-hidden="true"
				/>
				<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
					{sum}
				</span>
				<span className="sr-only">items in cart</span>
			</Link>
		</div>
	);
};
