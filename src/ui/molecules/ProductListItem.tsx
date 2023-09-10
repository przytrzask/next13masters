import Link from "next/link";
import { type ProductType } from "../types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductLisItemProps = {
	product: ProductType;
};

export const ProductListItem = ({ product }: ProductLisItemProps) => {
	return (
		<li key={product.id} className="group relative">
			<Link href={`product/${product.id}`}>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
