/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRss: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
