/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2l56h9h5tj8ue.cloudfront.net'],
  },
  env: {
    SECRET: process.env.SECRET,
  }
}

module.exports = nextConfig
