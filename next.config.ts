import type { NextConfig } from "next";
import os from "node:os";

// LAN addresses of this machine, so a phone on the same hotspot can open the
// dev server (needed for scanning certificate QR codes during the demo).
const lanHosts = Object.values(os.networkInterfaces())
  .flat()
  .filter((n) => n && n.family === "IPv4" && !n.internal)
  .map((n) => n!.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: lanHosts,
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
