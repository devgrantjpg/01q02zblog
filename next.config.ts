import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "marketplace.canva.com", 
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "t4.ftcdn.net",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
