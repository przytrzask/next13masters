"use client";

import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { RadioGroupOption } from "../molecules/ColorOption";
import { type ProductListItemFragment } from "@/gql/graphql";

type ColorPickerProps = {
	product: ProductListItemFragment;
};

export const ColorPicker = ({ product }: ColorPickerProps) => {
	const [selectedColor, setSelectedColor] = useState(product.colors[0]?.color);

	return (
		<div>
			<h3 className="text-sm font-medium text-gray-900">Color</h3>

			<RadioGroup name="color" value={selectedColor} onChange={setSelectedColor} className="mt-2">
				<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
				<div className="flex items-center space-x-3">
					{product.colors.map((color) => (
						<RadioGroupOption key={color.id} color={color} />
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
