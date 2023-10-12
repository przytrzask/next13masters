import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { type ColorType, type Color } from "@/gql/graphql";

const colorMap: {
	[key in ColorType]: string;
} = {
	BLACK: "bg-black",
	BLUE: "bg-blue-600",
	GREEN: "bg-green-600",
	PINK: "bg-pink-600",
	RED: "bg-red-600",
	WHITE: "bg-white",
};

export const RadioGroupOption = ({ color }: { color: Color }) => {
	return (
		<RadioGroup.Option
			key={color.id}
			value={color.color}
			className={({ active, checked }) =>
				clsx(
					colorMap[color.color],
					active && checked ? "ring ring-offset-1" : "",
					!active && checked ? "ring-2" : "",
					"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
				)
			}
		>
			<RadioGroup.Label as="span" className="sr-only">
				{color.color}
			</RadioGroup.Label>
			<span
				aria-hidden="true"
				className={clsx(
					colorMap[color.color],
					"h-8 w-8 rounded-full border border-black border-opacity-10",
				)}
			/>
		</RadioGroup.Option>
	);
};
