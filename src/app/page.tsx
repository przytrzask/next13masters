import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import { Collections } from "@/ui/organisms/Collections";
import { Decor, Customizer } from "@/ui/organisms/HeroDecor";
import { SearchInput } from "@/ui/atoms/SearchInput";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function Home() {
	const { data, count } = await getProductsList({
		take: 4,
		skip: 0,
	});

	return (
		<section className="bg-white">
			<div className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:px-8">
				<SearchInput />
				<div className="flex h-16 items-center">
					<button
						type="button"
						className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
						// onClick={() => setOpen(true)}
					>
						<span className="absolute -inset-0.5" />
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</div>

			<div className="relative pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<Suspense>
						<Decor />
						{/* <Customizer /> */}
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
								className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
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
