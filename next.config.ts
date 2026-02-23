import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Forces Next.js to produce static HTML/CSS/JS files
  output: 'export',

  // Base path for GitHub Pages
  basePath: '/AlSolved_Certificazioni',

  // Prevents 404 errors on images by disabling server-side resizing
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,

  // Required for proper routing on GitHub Pages static exports (so /certificazioni/[id] resolves to /certificazioni/[id]/index.html)
  trailingSlash: true,
};

export default nextConfig;
