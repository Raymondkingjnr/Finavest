/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["coin-images.coingecko.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
