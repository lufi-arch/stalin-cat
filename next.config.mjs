/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pump.fun",
      },
    ],
  },
};

export default nextConfig;
