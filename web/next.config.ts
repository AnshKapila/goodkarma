import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/certifications",
        destination: "/educate/certifications",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
