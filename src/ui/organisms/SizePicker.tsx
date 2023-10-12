"use client";

import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { SizeOption } from "../atoms/SizeOption";
import { type ProductListItemFragment } from "@/gql/graphql";

export const SizePicker = ({ product }: { product: ProductListItemFragment }) => {
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size);

	return (
		<div className="mt-8">
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-medium text-gray-900">Size</h3>
			</div>

			<RadioGroup name="size" value={selectedSize} onChange={setSelectedSize} className="mt-2">
				<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
				<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{product.sizes.map((size) => (
						<SizeOption key={size.id} size={size} />
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
