import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "marketplace.canva.com", 
        protocol: "https",
        port: "",
      }
    ]
  },
};

export default nextConfig;
