/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverActions: true
  },
  images: {
    domains: ["lh3.googleusercontent.com", "images.pexels.com", "ibb.co"]
  }
}

module.exports = nextConfig
