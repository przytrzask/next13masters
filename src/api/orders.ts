import { cookies } from "next/headers";

import { executeGraphQl } from "@/api/executeGraphQl";
import {
	AddOrderItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
	type ColorType,
	type SizeType,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	{
		const cart = await getCartFromCookies();
		if (cart) {
			return cart;
		}
	}

	const { createOrder: cart } = await executeGraphQl({
		query: CartCreateDocument,
		variables: {
			total: 0,
		},
	});
	if (!cart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.id, {
		sameSite: "lax",
		httpOnly: true,
	});
	return cart;
}

export async function addProductToCart(
	cartId: string,
	productId: string,
	variants: { color: ColorType; size: SizeType },
) {
	const cart = await executeGraphQl({
		query: AddOrderItemDocument,
		variables: {
			quantity: 1,
			orderId: cartId,
			productId: productId,
			color: variants.color,
			size: variants.size,
		},
	});

	return cart;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { order: cart } = await executeGraphQl({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			// cache: "no-store",
		});
		if (cart) {
			return cart;
		}
	}
}

export async function deleteCartItem(itemId: string) {
	return executeGraphQl({
		query: CartRemoveItemDocument,
		variables: { itemId },
		next: {
			tags: ["cart"],
		},
	});
}
