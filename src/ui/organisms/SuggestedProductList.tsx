import { ProductList } from "./ProductList";
import { getProductsByCategorySlug } from "@/api/products";

export async function SuggestedProductList() {
	const products = await getProductsByCategorySlug({ slug: "t_shirts", skip: 0, take: 4 });

	if (!products) return null;

	return (
		<section data-testid="related-products" aria-labelledby="related-products">
			<h2 id="related-products">Suggested products</h2>
			<ProductList products={products.data} />;
		</section>
	);
}
