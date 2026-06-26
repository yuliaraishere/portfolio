import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
    domains: [
      "github.com",
      "user-images.githubusercontent.com",
      "assets.aceternity.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/lassiecoder/**"
      }
    ]
  }
};

export default nextConfig;
