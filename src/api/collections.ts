import { executeGraphQl } from "./executeGraphQl";
import { CollectionsDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphQl({
		query: CollectionsDocument,
		next: {
			tags: ["collections"],
		},
	});

	return graphqlResponse.collections;
};
