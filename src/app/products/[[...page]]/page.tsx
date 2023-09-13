import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products({
	params,
}: {
	params: {
		page: string[];
	};
}) {
	const page = params["page"]?.[0] ?? 1;

	const products = await getProducts(page);

	return (
		<main>
			<section className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
					<ProductList products={products} />
					<div className="mt-2">
						<Pagination activePage={page} />
					</div>
				</div>
			</section>
		</main>
	);
}
