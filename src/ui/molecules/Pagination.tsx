"use client";

import { useSearchParams } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	count?: number | null;
	perpage: number;
	alias: "products" | "categories/t_shirts" | "categories/shoes";
};

export const Pagination = ({ alias, count = 0, perpage }: PaginationProps) => {
	const searchParams = useSearchParams();

	return count ? (
		<nav
			className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
			aria-label="pagination"
		>
			<div className="-mt-px flex w-0 flex-1">
				{Array.from({ length: Math.ceil(count / perpage) }, (_, index) => index + 1).map(
					(number) => (
						<ActiveLink
							key={number.toString()}
							activeClassName="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
							className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							href={`/${alias}/${number}?${searchParams.toString()}`}
							exact={false}
						>
							{number.toString()}
						</ActiveLink>
					),
				)}
			</div>
		</nav>
	) : null;
};
