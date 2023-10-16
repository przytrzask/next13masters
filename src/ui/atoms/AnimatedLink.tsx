"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useViewTransitionRouter } from "@/utils/useViewTransitionRouter";

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps<string>>;

interface LinkProps extends AnchorProps, NextLinkProps<string> {
	children: React.ReactNode;
}

export const AnimatedLink = ({ ...props }: LinkProps) => {
	const router = useViewTransitionRouter();

	const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		// @ts-expect-error TODO: Fix this
		router.push(props.href);
	};

	return <NextLink {...props} onClick={handleLinkClick} />;
};
