"use server";

import Stripe from "stripe";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { executeGraphQl } from "@/api/executeGraphQl";
import { deleteCartItem, getCartFromCookies } from "@/api/orders";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphQl({
		query: CartChangeItemQuantityDocument,
		variables: { itemId, quantity },
		cache: "no-store",
	}).then(() => {
		revalidateTag("cart");
	});
};

export const removeItem = async (itemId: string) => {
	return deleteCartItem(itemId);
};

export async function handleStripePaymentAction() {
	const cart = await getCartFromCookies();
	const stripeKey = process.env.STRIPE_SECRET_KEY;

	if (!stripeKey) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	if (!cart) {
		return;
	}

	const stripe = new Stripe(stripeKey, {
		apiVersion: "2023-08-16",
		typescript: true,
	});
	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((el) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: el.name,
					images: [el.image],
				},
				unit_amount: el.price,
			},
			quantity: el.quantity,
		})),
	});

	if (checkoutSession.url) {
		cookies().set("cartId", "");
		redirect(checkoutSession.url);
	}
}
