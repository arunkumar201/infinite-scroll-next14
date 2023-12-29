/** @type {import('next').NextConfig} */
const nextConfig={
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
		],
	},
};

module.exports = nextConfig;
