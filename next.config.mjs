/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "educationnorthwest.org",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
      },
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
      }, 
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
      },
    ],
  },
};

export default nextConfig;
