/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  env: {
    ADMIN_PWD: process.env.ADMIN_PWD,
  }
}

module.exports = nextConfig
