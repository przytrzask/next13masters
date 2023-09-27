import { ProductList } from "./ProductList";
import { getProductsByCategorySlug } from "@/api/products";

export async function SuggestedProductList() {
	const products = await getProductsByCategorySlug({ slug: "t_shirts", skip: 0, take: 4 });

	if (!products) return null;

	return <ProductList products={products.data} />;
}
