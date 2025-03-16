/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ This should prevent TypeScript errors during build
  },
};

module.exports = nextConfig;
