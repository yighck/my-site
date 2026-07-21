import type { NextConfig } from "next";
import path from "path";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: "/my-site",
        assetPrefix: "/my-site/",
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
