/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  env: {
      IMAGE_API_URL: process.env.IMAGE_API_URL,
  },
};

module.exports = nextConfig;
