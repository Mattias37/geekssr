// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['nacion-esports-shop.s3.amazonaws.com', 'nacionbe-sports-images.s3.amazonaws.com', 'nacionbe-sports-images.s3.amazonaws.com'],
  },
  webpack(config, options) {
    return config
  }
})

