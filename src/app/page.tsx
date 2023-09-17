import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const categories = [
	{
		name: "New Arrivals",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
	},
	{
		name: "Productivity",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
	},
	{
		name: "Workspace",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
	},
	{
		name: "Accessories",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
	},
	{
		name: "Sale",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
	},
];

export default function Home() {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

			{/* Hero section */}
			<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Summer styles are finally here
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							This year, our new summer collection will shelter you from the harsh elements of a
							world that doesn't care if you live or die.
						</p>
					</div>
					<div>
						<div className="mt-10">
							{/* Decorative image grid */}
							<div
								aria-hidden="true"
								className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

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

			<section
				aria-labelledby="category-heading"
				className="mt-16 pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
			>
				<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
					<h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
						Shop by Category
					</h2>
					<a
						href="#"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Browse all products
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>

				<div className="mt-4 flow-root">
					<div className="-my-2">
						<div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
							<div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
								{categories.map((category) => (
									<a
										key={category.name}
										href={category.href}
										className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
									>
										<span aria-hidden="true" className="absolute inset-0">
											<img
												src={category.imageSrc}
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</span>
										<span
											aria-hidden="true"
											className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
										/>
										<span className="relative mt-auto text-center text-xl font-bold text-white">
											{category.name}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
