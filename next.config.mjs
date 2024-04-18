/** @type {import('next').NextConfig} */
// @ts-check
const nextConfig = {
    experimental: {
      typedRoutes: false,
    },
    images: {
      unoptimized: false,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
          port: "",
          pathname: "/**",
        }
      ],
    },
  };
  
  export default nextConfig;
  