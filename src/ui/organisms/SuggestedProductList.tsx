import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function SuggestedProductList() {
	await wait(5000);

	const relatedProducts = await getProducts();

	const limitedProducts = relatedProducts.slice(0, -4);

	return <ProductList products={limitedProducts} />;
}
