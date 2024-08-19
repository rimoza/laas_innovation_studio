/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
