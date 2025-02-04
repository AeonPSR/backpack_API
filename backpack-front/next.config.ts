import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    host: "0.0.0.0",
    port: 3000
  }
};

export default nextConfig;
