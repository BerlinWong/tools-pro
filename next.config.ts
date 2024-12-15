import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sns-webpic-qc.xhscdn.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "falling-morning-dc70.wzysws.workers.dev",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: 'https',
        hostname: 'sns-webpic-qc.xhscdn.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
