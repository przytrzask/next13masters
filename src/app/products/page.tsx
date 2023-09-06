import { ProductList } from "@/ui/organisms/ProductList";

const products = [
	{
		id: 1,
		name: "Basic Tee",
		href: "#",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 2500,
		color: "Black",
		category: "T-Shirts",
	},
	{
		id: 2,
		name: "Basic Tee",
		href: "#",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 3500,
		color: "white",
		category: "T-Shirts",
	},
	{
		id: 3,
		name: "Basic Tee",
		href: "#",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 4400,
		color: "red",
		category: "T-Shirts",
	},
	{
		id: 4,
		name: "Basic Tee",
		href: "#",
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
			alt: "Front of men's Basic Tee in black.",
		},
		price: 7790,
		color: "Black",
		category: "T-Shirts",
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
