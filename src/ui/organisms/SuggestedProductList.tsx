import { ProductList } from "./ProductList";
import { getProductsByCategorySlug } from "@/api/products";

export async function SuggestedProductList() {
	const { data } = await getProductsByCategorySlug({ slug: "t_shirts", skip: 0, take: 4 });

	return <ProductList products={data} />;
}
