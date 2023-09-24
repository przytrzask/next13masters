/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["fdofbujfshszxgmmurqb.supabase.co"],
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
