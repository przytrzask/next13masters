import { formatMoney } from "../utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">{name}</h3>
				<p className="mt-1 text-sm text-gray-500">{categories[0]?.name}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatMoney(price / 100)}</p>
		</div>
	);
};
