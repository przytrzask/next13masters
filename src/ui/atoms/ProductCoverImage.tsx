import Image from "next/image";

export const ProductCoverImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
			<Image
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center lg:h-full lg:w-full"
			/>
		</div>
	);
};
