import { StarIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";
import { getReviewsByProductId } from "@/api/reviews";

type ProductReviewsListProps = {
	productId: string;
};

export const ProductReviewsList = async ({ productId }: ProductReviewsListProps) => {
	if (!productId) return null;

	const realReviews = await getReviewsByProductId({ id: productId });

	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			<div className="flow-root">
				<div className="my-12 divide-y divide-gray-200">
					<h3>User reviews</h3>
					{realReviews.map((review) => (
						<div key={review.id} className="py-12">
							<div className="flex items-center">
								{/* <img
									src={review.avatarSrc}
									alt={`${review.author}.`}
									className="h-12 w-12 rounded-full"
								/> */}
								<div className="ml-4">
									<h4 className="text-sm font-bold text-gray-900">{review.user?.name}</h4>
									<div className="mt-1 flex items-center">
										{[0, 1, 2, 3, 4].map((stars) => (
											<StarIcon
												key={stars}
												className={clsx(
													review?.rating?.rating ?? 0 > stars ? "text-yellow-400" : "text-gray-200",
													"h-5 w-5 flex-shrink-0",
												)}
												aria-hidden="true"
											/>
										))}
									</div>
									<p className="sr-only">{review.rating?.rating} out of 5 stars</p>
								</div>
							</div>

							<div
								className="mt-4 space-y-6 text-base italic text-gray-600"
								dangerouslySetInnerHTML={{ __html: review.rating?.description ?? "" }}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
