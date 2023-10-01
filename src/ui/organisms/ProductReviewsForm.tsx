type FormnValues = {
	name: string;
	email: string;
	title: string;
	description: string;
	rating: string;
};

export const ProductReviewsForm = () => {
	const handleSubmitRatingAction = async (data: FormData) => {
		"use server";

		console.log(data);
	};

	return (
		<div className="lg:col-span-4">
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
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6 "
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
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Jane Smith"
						required
					/>
				</div>

				<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label htmlFor="title" className="block text-xs font-medium text-gray-900">
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Jane Smith"
						required
					/>
				</div>
				<div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label htmlFor="description" className="block text-xs font-medium text-gray-900">
						Description
					</label>
					<input
						type="text"
						name="description"
						id="description"
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
						className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
