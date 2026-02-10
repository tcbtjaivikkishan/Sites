import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // TCBT website images
      { protocol: "https", hostname: "www.tcbtjaivikkisan.com" },
      { protocol: "https", hostname: "tcbtjaivikkisan.com" },

      // Unsplash images (used in your data)
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
