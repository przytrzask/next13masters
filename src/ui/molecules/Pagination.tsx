"use client";

import { ActiveLink } from "../atoms/ActiveLink";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Pagination = () => {
	return (
		<nav
			className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
			aria-label="pagination"
		>
			{numbers.map((number) => (
				<ActiveLink
					key={number.toString()}
					activeClassName="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
					className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
					href={`/products/${number}`}
					exact
				>
					{number.toString()}
				</ActiveLink>
			))}
		</nav>
	);
};
