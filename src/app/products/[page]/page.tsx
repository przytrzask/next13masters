import { Suspense } from "react";
import { getProductsList } from "@/api/products";
import { SearchInput } from "@/ui/atoms/SearchInput";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

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

	const search = searchParams?.["search"] as string;

	const { data, count } = await getProductsList({
		take: perpage,
		skip,
		search: search ?? undefined,
	});

	return (
		<main>
			<section className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
					<Suspense>
						<SearchInput />
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
