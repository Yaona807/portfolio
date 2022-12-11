/** @type {import('next').NextConfig} */
const urlPrefix = (process.env.NODE_ENV === 'development') ? '' : '/portfolio';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
