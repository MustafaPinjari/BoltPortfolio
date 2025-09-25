/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable image optimization during export
  images: { 
    unoptimized: true 
  },
  
  // Add basePath if you're deploying to a subdirectory
  // basePath: '/your-repo-name',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configure webpack to handle specific module resolutions
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  
  // Disable server components (not needed for static export)
  experimental: {
    serverComponents: false,
  },
};

module.exports = nextConfig;
