import Link from "next/link";
import Image from "next/image";
import { getCollections } from "@/api/collections";

const collections = [
	{
		name: "Desk and Office",
		description: "Work from home accessories",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
		imageAlt:
			"Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
		href: "collections/desk-and-office",
	},
	{
		name: "Self-Improvement",
		description: "Journals and note-taking",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
		imageAlt:
			"Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
		href: "collections",
	},
	{
		name: "Travel",
		description: "Daily commute essentials",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
		imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
		href: "collections/",
	},
] as const;

export const Collections = async () => {
	const realCollections = await getCollections();

	return (
		<section aria-labelledby="collections-heading" className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
					<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
						<h2 id="collections-heading" className="text-2xl font-bold text-gray-900">
							Collections
						</h2>
						<Link
							href="/collections"
							className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
						>
							See fancy collections
							<span aria-hidden="true"> &rarr;</span>
						</Link>
					</div>

					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
						{realCollections.map((collection, idx) => (
							<div key={collection.name} className="group relative">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
									<Image
										src={collections[idx]?.imageSrc ?? ""}
										alt={collections[idx]?.imageAlt ?? ""}
										className="h-full w-full object-cover object-center"
										fill
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<Link href={`/collections/${collection.id}`}>
										<span className="absolute inset-0" />
										{collection.name}
									</Link>
								</h3>
								<p className="text-base font-semibold text-gray-900">{collection.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
