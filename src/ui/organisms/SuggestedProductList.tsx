import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

export async function SuggestedProductList() {
	const relatedProducts = await getProducts("1");

	const limitedProducts = relatedProducts.slice(0, -4);

	return <ProductList products={limitedProducts} />;
}
