"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export const SearchInput = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get("search");

	const [value, setValue] = useState(() => query ?? "");

	const router = useRouter();

	const debounced = useMemo(
		() =>
			debounce((val: string) => {
				const newParams = new URLSearchParams(searchParams.toString());

				if (val) {
					newParams.set("query", encodeURIComponent(decodeURIComponent(val)));
				} else {
					newParams.delete("query");
				}

				const url = `/search?${newParams.toString()}`;

				// @ts-expect-error TODO: fix this
				router.push(url);
			}, 500),
		[router, searchParams],
	);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value);
			debounced(e.target.value);
		},
		[debounced],
	);

	return (
		<div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
			<div className="w-full max-w-lg lg:max-w-xs">
				<label htmlFor="search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<input
						id="search"
						name="search"
						className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Search"
						type="search"
						onChange={handleChange}
						value={value}
					/>
				</div>
			</div>
		</div>
	);
};

function debounce<T extends unknown[], R>(cb: (...args: T) => R, wait: number) {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return (...args: T) => {
		const later = () => {
			timeout = null;
			cb(...args);
		};
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(later, wait);
	};
}
