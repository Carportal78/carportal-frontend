/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'carportal-images.s3.ap-south-1.amazonaws.com',
          port: '',
          pathname: '/**',
        }
      ],
    },
    // ... any other existing configuration
  };
  
  module.exports = nextConfig;
  