import { executeGraphQl } from "./executeGraphQl";
import {
	ProductsGetListDocument,
	ProductGetBySlugDocument,
	ProductsByCategorySlugDocument,
} from "@/gql/graphql";

export const getProductBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQl({
		query: ProductGetBySlugDocument,
		variables: {
			slug,
		},
		next: {
			revalidate: 2,
		},
	});

	return graphqlResponse.productBySlug;
};

export const getProductsList = async ({
	take,
	skip,
	search = undefined,
}: {
	take: number;
	skip: number;
	search?: string;
}) => {
	const graphqlResponse = await executeGraphQl({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			...(search && { search }),
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async ({
	take,
	skip,
	slug,
}: {
	take: number;
	skip: number;
	slug: string;
}) => {
	const graphqlResponse = await executeGraphQl({
		query: ProductsByCategorySlugDocument,
		variables: {
			take,
			skip,
			slug,
		},
	});

	return graphqlResponse.productsByCategorySlug;
};
