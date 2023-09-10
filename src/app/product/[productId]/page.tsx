import clsx from "clsx";
import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductList";

type ProductProps = {
	params: {
		productId: string;
	};
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Product({ params: { productId } }: ProductProps) {
	const product = await getProductById(productId);

	return (
		<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
			<div className="py-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
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
								__html: `Add some descrioption here. Lorem ipsum 
						dolor sit amet, consectetur adipiscing elit.
						Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
						`,
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
