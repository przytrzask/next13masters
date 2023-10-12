import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { formatMoney } from "../utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price, rating },
}: ProductListItemDescriptionProps) => {
	return (
		<>
			<div className="mt-3 flex flex-col items-center">
				<div>
					<p className="sr-only" data-testid="product-rating">
						{rating}
					</p>
					<div className="flex items-center">
						{[0, 1, 2, 3, 4].map((stars) => (
							<StarIcon
								key={stars}
								className={clsx(
									rating > stars ? "text-yellow-400" : "text-gray-200",
									"h-5 w-5 flex-shrink-0",
								)}
								aria-hidden="true"
							/>
						))}
					</div>
					{/* <p className="mt-1 text-sm text-gray-500">{ratingCount} reviews</p> */}
				</div>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">{name}</h3>
					<p className="mt-1 text-sm text-gray-500">{categories[0]?.name}</p>
				</div>
				<p data-testid="product-price" className="text-sm font-medium text-gray-900">
					{formatMoney(price / 100)}
				</p>
			</div>
		</>
	);
};
