import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/facumm1-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;