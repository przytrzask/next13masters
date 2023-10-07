import { executeGraphQl } from "./executeGraphQl";
import {
	ReviewAddDocument,
	type ReviewAddMutationVariables,
	ReviewGetListDocument,
} from "@/gql/graphql";

type Args = {
	id: string;
};

export const getReviewsByProductId = async ({ id }: Args) => {
	const graphqlResponse = await executeGraphQl({
		query: ReviewGetListDocument,
		variables: {
			productId: id,
		},
		next: {
			tags: ["reviews"],
		},
	});
	return graphqlResponse.reviews;
};

export const addReview = async (input: ReviewAddMutationVariables) => {
	const graphqlResponse = await executeGraphQl({
		query: ReviewAddDocument,
		variables: { ...input },
	});

	return graphqlResponse.addReview;
};
