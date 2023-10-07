"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Field = {
	field: "rating" | "price";
	direction: "ASC" | "DESC";
};

type Option = {
	name: string;
	value: Field | "";
	dataTestId?: string;
	id: number;
};

const options: Option[] = [
	{
		id: 1,
		name: "Price: Low to High",
		dataTestId: "sort-by-price",
		value: { field: "price", direction: "ASC" },
	},
	{
		id: 2,

		name: "Price: High to Low",
		value: { field: "price", direction: "DESC" },
	},
	{
		id: 3,
		name: "default",
		value: "",
	},
	{
		id: 4,
		name: "Best Rating",
		dataTestId: "sort-by-rating",
		value: { field: "rating", direction: "DESC" },
	},
];

const encodeOptionToURI = (option: Option) => {
	if (option.value === "") return "";

	return Object.keys(option.value)

		.map(
			// @ts-expect-error TODO fixme
			(key: keyof typeof option.value) =>
				// @ts-expect-error TODO fixme
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
				`${encodeURIComponent(key)}=${encodeURIComponent(option?.value?.[key])}`,
		)
		.join("&");
};

export const SortSelect = () => {
	const pathname = usePathname();
	const router = useRouter();

	const searchParams = useSearchParams();

	const handleChange = (e: React.ChangeEvent) => {
		const value = (e.target as HTMLSelectElement).value;

		const option = options.find((option) => option.id === Number(value));

		const newParams = new URLSearchParams(searchParams.toString());

		if (option) {
			const params = encodeOptionToURI(option);
			newParams.set("orderBy", `${params}`);
		} else {
			newParams.delete("orderBy");
		}

		const url = `${pathname}?${newParams.toString()}`;

		// @ts-expect-error TODO fixme
		router.push(url, { shallow: true });
	};

	return (
		<div className="flex items-center">
			<select onChange={handleChange}>
				{options.map((option, optionIdx) => (
					<option data-testid={option.dataTestId ?? ""} key={optionIdx} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};
