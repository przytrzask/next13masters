import { type TypedDocumentString } from "@/gql/graphql";

export async function fetchGraphql<TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> {
	if (process.env.GRAPHQL_URL === undefined) {
		throw new Error("GRAPHQL_URL is undefined");
	}

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GrapQLResponse<T> =
		| {
				data?: undefined;
				errors: {
					message: string;
				}[];
		  }
		| {
				data: T;
				errors?: undefined;
		  };

	const graphqlResponse = (await response.json()) as GrapQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors);
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}
	return graphqlResponse.data;
}
