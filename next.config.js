/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'], // Add 'res.cloudinary.com' to the list of allowed image domains
    },
    // ... any other existing configuration
  };
  
  module.exports = nextConfig;
  