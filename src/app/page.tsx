import Link from "next/link";
import { Suspense } from "react";
import { Collections } from "@/ui/organisms/Collections";
import { Customizer, Decor } from "@/ui/organisms/HeroDecor";

import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function Home() {
	const { data } = await getProductsList({
		take: 4,
		skip: 0,
	});

	return (
		<section className="bg-white">
			<div className="relative mx-auto max-w-7xl px-4">
				<div className="max-w-7xl pb-80 pt-16 sm:static sm:px-6 sm:pb-40 sm:pt-24 lg:px-8 lg:pb-48 lg:pt-40">
					<Suspense>
						<div className="hidden md:block">
							<Decor />
							<Customizer />
						</div>
					</Suspense>
					<div className="sm:max-w-lg">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Summer styles are finally here
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							This year, our new summer collection will shelter you from the harsh elements of a
							world that doesnt care if you live or die.
						</p>
					</div>

					<div>
						<div className="mt-10">
							<Link
								href="/products"
								className="absolute inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
							>
								Shop Collection
							</Link>
						</div>
					</div>
				</div>
			</div>
			<section aria-labelledby="collections-heading">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<ProductList products={data} />
				</div>
			</section>
			<Collections />
			<div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"></div>
		</section>
	);
}
