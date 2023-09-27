import { getProductBySlug } from "@/api/products";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({ params }: any) {
	const product = await getProductBySlug(params.slug);

	if (!product) {
		return new ImageResponse(
			(
				<div>
					<h1>404</h1>
					<h2>Not found</h2>
				</div>
			),
		);
	}

	return new ImageResponse(
		(
			<div tw="w-full  h-full flex flex-col items-center justify-center text-8xl">
				<div tw="p-16 flex flex-row">
					{product?.images && (
						<div tw="flex w-1/2">
							<img width={600} height={600} src={product?.images?.[0]?.url} />
						</div>
					)}
					<div tw="flex flex-col  w-1/2">
						<h2 tw="font-sans uppercase mt-4 p-0 text-[64px] ">{product.name}</h2>
						<h3 tw="font-sans uppercase mt-4 p-0 text-[32px] ">{product.description}</h3>
					</div>
				</div>
			</div>
		),
	);
}
