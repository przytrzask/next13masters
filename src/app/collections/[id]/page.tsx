import { notFound } from "next/navigation";
import { getCollections } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params: { id } }: Params) => {
	const realCollections = await getCollections();

	const collection = realCollections.find((collection) => collection.id === id);

	return {
		title: collection?.name ?? "Collection not found",
	};
};

type Props = {
	params: {
		id: string;
	};
};

export default async function CollectionPage({ params: { id } }: Props) {
	const realCollections = await getCollections();

	const collection = realCollections.find((collection) => collection.id === id);

	if (!collection) throw notFound();

	return (
		<div>
			<h2>{collection.name}</h2>

			<ProductList products={collection.products} />
		</div>
	);
}
