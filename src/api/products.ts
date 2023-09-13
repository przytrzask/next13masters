import { type ProductType } from "@/ui/types";

type Product = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseToProduct = (product: Product): ProductType => ({
	name: product.title,
	coverImage: {
		src: product.image,
		alt: product.title,
	},
	category: product.category,
	price: product.price,
	id: product.id,
	description: product.description,
});

const sizeLimit = 4;

export const getProducts = async (page: string) => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products?offset=" +
			Number(page) * sizeLimit +
			"&limit=" +
			sizeLimit +
			"",
	);

	const productsResponse = (await res.json()) as Product[];

	const products = productsResponse.map(productResponseToProduct);

	return products;
};

export const getProductById = async (id: ProductType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as Product;

	const product = productResponseToProduct(productResponse);

	return product;
};
