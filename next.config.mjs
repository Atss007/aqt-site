// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // experimental: {
  //   turbo: {
  //     treeShaking: true
  //   }
  // },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },

  images: {
    formats: ["image/avif", "image/webp"]
  },

  output: "standalone"
};

export default nextConfig;
