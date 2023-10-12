import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { type Size } from "@/gql/graphql";

type SizeOptionProps = {
	size: Size;
};

export const SizeOption: React.FC<SizeOptionProps> = ({ size }) => {
	return (
		<RadioGroup.Option
			value={size.size}
			className={({ active, checked }) =>
				clsx(
					active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
					checked
						? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
						: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
					"flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1",
				)
			}
		>
			<RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
		</RadioGroup.Option>
	);
};
