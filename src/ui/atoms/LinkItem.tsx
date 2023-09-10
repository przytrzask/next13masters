"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps = {
	item: {
		name: string;
		href: string;
	};
};

export const NavItem = ({ item }: LinkItemProps) => {
	const pathname = usePathname();

	console.log({ pathname });

	const isActive = pathname === item.href;

	return (
		<Link
			key={item.name}
			href={item.href}
			className={clsx("text-sm font-semibold leading-6 text-gray-900", {
				"border-indigo-500 text-indigo-600": isActive,
			})}
		>
			{item.name}
		</Link>
	);
};
