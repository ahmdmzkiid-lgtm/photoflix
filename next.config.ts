import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — zero server, deployable to any static host (Vercel/Netlify/shared hosting)
  output: "export",
  // Disable Next.js image optimisation API (not available in static export)
  // Images are served as-is from /public; use proper dimensions to keep them lean
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
