/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.soest.hawaii.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.soest.hawaii.edu",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
