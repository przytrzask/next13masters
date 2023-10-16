"use client";

import { AnimatedLink } from "../atoms/AnimatedLink";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductLisItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductLisItemProps) => {
	return (
		<li className="group relative">
			{/* @ts-expect-error todo  */}
			<AnimatedLink href={`/product/${product.slug}`}>
				{product.images?.[0] && (
					<ProductCoverImage
						alt=""
						src={product.images[0]?.url}
						href={`/product/${product.slug}`}
					/>
				)}
				<ProductListItemDescription product={product} />
			</AnimatedLink>
		</li>
	);
};
