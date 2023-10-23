/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/_error",
        destination: "/error-page",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
