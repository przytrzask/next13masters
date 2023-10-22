import zod from "zod";
import { revalidateTag } from "next/cache";
import { addReview } from "@/api/reviews";

const schema = zod.object({
	name: zod.string(),
	email: zod.string(),
	title: zod.string(),
	description: zod.string(),
	rating: zod.string(),
});

export const ProductReviewsForm = ({ productId }: { productId: string }) => {
	const handleSubmitRatingAction = async (data: FormData) => {
		"use server";

		const parsed = schema.safeParse({
			title: data.get("headline"),
			description: data.get("content"),
			rating: data.get("rating"),
			name: data.get("name"),
			email: data.get("email"),
		});

		if (parsed.success) {
			await addReview({
				input: {
					product: {
						id: productId,
					},
					user: {
						userName: parsed.data.name,
						email: parsed.data.email,
					},

					description: parsed.data.description,
					title: parsed.data.title,
					rating: Number(parsed.data.rating),
				},
			});

			revalidateTag("reviews");
		} else {
			console.error(parsed.error);
		}
	};

	return (
		<div className="lg:col-span-4" data-testid="add-review-form">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">Add review</h2>

			<form className="mt-10" action={handleSubmitRatingAction}>
				<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>

				<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label htmlFor="name" className="block text-xs font-medium text-gray-900">
						Username
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 "
						placeholder="Jane Smith"
						required
					/>
				</div>

				<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label htmlFor="email" className="block text-xs font-medium text-gray-900">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Jane Smith"
						required
					/>
				</div>

				<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600 focus:outline-none">
					<label htmlFor="headline" className="block text-xs font-medium text-gray-900">
						Title
					</label>
					<input
						type="text"
						name="headline"
						id="headline"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Jane Smith"
						required
					/>
				</div>
				<div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600 ">
					<label htmlFor="content" className="block text-xs font-medium text-gray-900">
						Description
					</label>
					<input
						type="text"
						name="content"
						id="content"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Nice one"
						required
					/>
				</div>

				<div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label htmlFor="rating" className="block text-xs font-medium text-gray-900">
						Rating
					</label>
					<select
						name="rating"
						id="rating"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Head of Tomfoolery"
					>
						<option value="5">5</option>
						<option value="4">4</option>
						<option value="3">3</option>
						<option value="2">2</option>
						<option value="1">1</option>
					</select>
				</div>

				<button className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">
					Add review
				</button>
			</form>
		</div>
	);
};
