import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com"],
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
    ],
  },
};

export default nextConfig;
