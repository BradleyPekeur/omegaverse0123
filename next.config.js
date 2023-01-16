/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	trailingSlash: true,
	images: {
		domains: ["usembleit.co.za"],
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
