import clsx from "clsx";
import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProducts } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductList";
import { ProductImage } from "@/ui/atoms/ProductImage";

type ProductProps = {
	params: {
		productId: string;
	};
};

export async function generateStaticParams() {
	const products = await getProducts("1");

	return products.map((product) => ({
		productId: product.id,
	}));
}

// function prodOnly<TParams extends unknown[], TReturn>(func: (...args: TParams) => TReturn) {
// 	return (...args: TParams) => {
// 		if (process.env.NODE_ENV === "production") {
// 			return func(...args);
// 		} else {
// 			return {};
// 		}
// 	};
// }

type Params = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product.name,
		description: product.description,
	};
};

export default async function Product({ params: { productId } }: ProductProps) {
	const product = await getProductById(productId);

	return (
		<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
			<div className="py-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
				<ProductImage product={product} />

				<div className="sticky col-span-5 mt-10 px-4 sm:mt-16 sm:px-0 lg:inset-y-4  lg:mt-0">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl text-gray-900">{product.name}</h1>
						<p className="fnt-medium text-xl text-gray-900">
							{product.price} <b>$ </b>
						</p>
					</div>

					<button
						className={clsx(
							"mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",
						)}
						disabled
						// onClick={() => {
						// 	// TODO: Add to cart
						// }}
						type="button"
					>
						Add to cart
					</button>
					{/* Product details */}
					<div className="mt-10">
						<h2 className="text-bold text-lg font-medium text-gray-900">Opis</h2>

						<div
							className="prose prose-lg mt-4 text-gray-700"
							dangerouslySetInnerHTML={{
								__html: product.description,
							}}
						/>
					</div>
				</div>
			</div>
			<Suspense>
				<SuggestedProductList />
			</Suspense>
		</div>
	);
}
