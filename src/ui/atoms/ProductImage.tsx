import { type ProductType } from "../types";

type ProductImageProps = {
	product: ProductType;
};

export function ProductImage({ product }: ProductImageProps) {
	return (
		<div className="aspect-h-7 aspect-w-6 col-span-6 h-full w-full overflow-hidden">
			<div className="absolute  h-full w-full">
				<img
					src={product.coverImage.src}
					alt={product.coverImage.alt}
					className=" h-full w-full object-cover object-center
                            sm:rounded-lg"
				/>
			</div>
		</div>
	);
}
