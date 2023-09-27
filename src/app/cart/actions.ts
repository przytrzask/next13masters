"use server";

import { executeGraphQl } from "@/api/executeGraphQl";
import { deleteCartItem } from "@/api/orders";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphQl({ query: CartChangeItemQuantityDocument, variables: { itemId, quantity } });
};

export const removeItem = async (itemId: string) => {
	return deleteCartItem(itemId);
};
