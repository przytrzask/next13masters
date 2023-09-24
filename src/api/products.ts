import { fetchGraphql } from "./fetchGraphql";
import {
	ProductsGetListDocument,
	ProductGetBySlugDocument,
	ProductsByCategorySlugDocument,
} from "@/gql/graphql";

export const getProductBySlug = async (slug: string) => {
	const graphqlResponse = await fetchGraphql(ProductGetBySlugDocument, {
		slug,
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
	const graphqlResponse = await fetchGraphql(ProductsGetListDocument, {
		take,
		skip,
		...(search && { search }),
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
	const graphqlResponse = await fetchGraphql(ProductsByCategorySlugDocument, {
		take,
		skip,
		slug,
	});

	return graphqlResponse.productsByCategorySlug;
};
