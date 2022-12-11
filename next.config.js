/** @type {import('next').NextConfig} */
const urlPrefix = '/portfolio'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
