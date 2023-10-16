"use client";

import Image from "next/image";
import { useRef } from "react";

export const ProductCoverImage = ({ alt, src }: { alt: string; src: string; href: string }) => {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={ref}
			className="aspect-h-1 aspect-w-1 relative w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-80"
		>
			<Image
				onClick={(event) => {
					event.target.style.viewTransitionName = "cover-image";
				}}
				src={src}
				alt={alt}
				className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
				fill
			/>
		</div>
	);
};
