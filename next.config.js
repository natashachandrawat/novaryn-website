/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  // No redirects/rewrites are configured. Force www / SSL is handled
  // at the Vercel domain level (Project → Settings → Domains).
};

module.exports = nextConfig;
