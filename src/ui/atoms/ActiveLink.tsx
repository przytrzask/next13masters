"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps<T extends string> = Readonly<{
	className: string;
	activeClassName: string;
	href: Route<T>;
	children: string;
	exact?: boolean;
}>;

export function ActiveLink<T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: LinkItemProps<T>) {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
		>
			{children}
		</Link>
	);
}
