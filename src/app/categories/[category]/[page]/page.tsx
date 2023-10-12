import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

const mapToTitle = {
	shoes: "Shoes",
	t_shirts: "T shirts",
};

type Params = {
	params: {
		category: "shoes" | "t_shirts";
		page: string;
	};
};

export const generateMetadata = async ({ params }: Params) => {
	return {
		title: mapToTitle[params.category],
	};
};

export default async function CategoryPage({
	params: { category, page },
}: {
	params: { category: "shoes" | "t_shirts"; page: string };
}) {
	const perpage = 4;

	const products = await getProductsByCategorySlug({
		slug: category,
		take: 2,
		skip: 2 * (Number(page) - 1),
	});

	if (!products?.data) throw notFound();

	return (
		<section className="bg-white" aria-labelledby="category_heading">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 id="category_heading" className="text-2xl font-bold tracking-tight text-gray-900">
					{mapToTitle[category]}
				</h2>
				<ProductList products={products.data} />
				<div className="mt-2">
					<Pagination alias={`categories/${category}`} count={products.count} perpage={perpage} />
				</div>
			</div>
		</section>
	);
}
