import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",  // Allow images from any domain
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
