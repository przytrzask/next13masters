import { Suspense } from "react";
import { getProductsList } from "@/api/products";
import { SearchInput } from "@/ui/atoms/SearchInput";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { SortSelect } from "@/ui/molecules/SortSelect";

export default async function Products({
	params,
	searchParams,
}: {
	searchParams: {
		[search: string]: string | string[];
	};
	params: {
		page: string[];
	};
}) {
	const page = params["page"]?.[0] ?? 1;

	const perpage = 4;

	const skip = perpage * (Number(page) - 1);

	const search = searchParams?.["query"] as string;

	const orderBySearchParams = searchParams?.["orderBy"] as string;

	const orderByParams = () => {
		if (!orderBySearchParams) return undefined;

		const params = new URLSearchParams(orderBySearchParams);

		const paramsObject = {};
		for (const [key, value] of params.entries()) {
			// @ts-expect-error TODO fixme
			paramsObject[key] = value;
		}

		return paramsObject as { field: "rating" | "price"; direction: "ASC" | "DESC" };
	};

	const { data, count } = await getProductsList({
		take: perpage,
		skip,
		search: search ?? undefined,
		orderBy: orderByParams(),
	});

	return (
		<main>
			<section className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
					<Suspense>
						<div className="flex flex-row">
							<SortSelect />
							<SearchInput />
						</div>
					</Suspense>
					<ProductList products={data} />
					<div className="mt-2">
						<Pagination alias="products" count={count} perpage={perpage} />
					</div>
				</div>
			</section>
		</main>
	);
}
