import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Placeholder images are local SVGs; real photos will be JPG/PNG and can
    // drop this once they replace the SVG placeholders in public/images.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
