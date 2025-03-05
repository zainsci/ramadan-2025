import type { NextConfig } from "next"
const basePath = process.env.NODE_ENV === "development" ? "" : "/ramadan-2025"

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: "export",
	basePath,
}

export default nextConfig
