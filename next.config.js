/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
  
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
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    // Handle Radix UI components
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!(@radix-ui|radix-ui)\/).*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [
            ['@babel/plugin-transform-template-literals', { loose: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }]
          ]
        }
      }
    });
    
    return config;
  },
  
  // Experimental features
  experimental: {
    esmExternals: 'loose',
    // Remove serverComponents as it's not needed for static export
  },
  
  // Handle static export paths
  trailingSlash: true,
};

module.exports = nextConfig;
