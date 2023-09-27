import { Suspense } from "react";
import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import { getProductBySlug, getProductsList } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductList";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ColorPicker } from "@/ui/organisms/ColorPicker";
import { SizePicker } from "@/ui/organisms/SizePicker";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/orders";
import { type SizeType, type ColorType } from "@/gql/graphql";

type ProductProps = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const products = await getProductsList({
		take: 10,
		skip: 1,
	});

	return products.data.map((product) => ({
		productId: product.id,
	}));
}

// export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
// 	const product = await getProductBySlug(slug);
// 	return {
// 		title: product.name,
// 		description: product.description,
// 	};
// };

export default async function Product({ params: { slug } }: ProductProps) {
	console.log({
		slug,
	});
	const product = await getProductBySlug(slug);

	if (!product) notFound();

	const addToCartFunction = async (formData: FormData) => {
		"use server";

		const color = formData.get("color") as ColorType;
		const size = formData.get("size") as SizeType;

		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, product?.id, {
			color,
			size,
		});

		revalidateTag("cart");
	};

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
					<form action={addToCartFunction}>
						<Suspense>
							<ColorPicker product={product} />
							<SizePicker product={product} />
						</Suspense>
						<AddToCartButton />
					</form>
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
