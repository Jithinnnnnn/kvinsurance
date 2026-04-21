/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    qualities: [75, 85],
  },
  
  // Ensure trailing slashes for better static hosting
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Disable features that require server
  },
  
  // Asset prefix for CDN (optional)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  
  // Base path (if deploying to subdirectory)
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
