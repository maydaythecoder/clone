/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // List of allowed domains for Next.js Image Optimization
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com', 'images.unsplash.com'],
  },
  env: {
    // Load environment variables
    IMAGE_API_URL: process.env.IMAGE_API_URL,
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
  },
};

module.exports = nextConfig;
