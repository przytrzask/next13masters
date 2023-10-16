import NextImage from "next/image";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductImageProps = {
	product: ProductListItemFragment;
};

export function ProductImage({ product }: ProductImageProps) {
	return (
		<div className=" aspect-h-7 aspect-w-6 col-span-6 h-full w-full overflow-hidden">
			<div className="absolute  h-full w-full">
				<NextImage
					src={product.images?.[0]?.url ?? ""}
					alt=""
					className=" bigImage h-full w-full object-cover object-center sm:rounded-lg"
					fill
				/>
			</div>
		</div>
	);
}
