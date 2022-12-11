/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: prod ? '/portfolio' : '',
}

module.exports = nextConfig
