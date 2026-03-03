import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
