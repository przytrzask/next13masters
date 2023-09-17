import { ProductList } from "@/ui/organisms/ProductList";

export type ProductType = {
	name: string;
	category: string;
	price: number;
	id: string;
	description: string;
	coverImage: {
		src: string;
		alt: string;
	};
};

const products: ProductType[] = [
	{
		id: "1",
		name: "Basic Tee",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 2500,
		category: "T-Shirts",
		description:
			"The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit.",
	},
	{
		id: "2",
		name: "Basic Tee",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 3500,
		category: "T-Shirts",
		description:
			"The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit.",
	},
	{
		id: "3",
		name: "Basic Tee",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 4400,
		category: "T-Shirts",
		description:
			"The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit.",
	},
	{
		id: "4",
		name: "Basic Tee",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 7790,
		category: "T-Shirts",
		description:
			"The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit.",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
					<ProductList products={products} />
				</div>
			</section>
		</main>
	);
}
