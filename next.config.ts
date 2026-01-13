import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Forces Next.js to produce static HTML/CSS/JS files for SiteGround
  output: 'export',

  // Prevents 404 errors on images by disabling server-side resizing
  // SiteGround does not support the Node.js image optimization server
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,
};

export default nextConfig;
