import { executeGraphQl } from "./executeGraphQl";
import { ReviewGetListDocument } from "@/gql/graphql";

type Args = {
	id: string;
};

export const getReviewsByProductId = async ({ id }: Args) => {
	const graphqlResponse = await executeGraphQl({
		query: ReviewGetListDocument,
		variables: {
			productId: id,
		},
	});
	return graphqlResponse.reviews;
};
