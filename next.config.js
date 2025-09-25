/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable image optimization during export
  images: {
    unoptimized: true,
    disableStaticImages: true,
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
    
    // Fix for Radix UI template literals
    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /node_modules\/(?!(radix-ui|@radix-ui)\/).*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: ['@babel/plugin-transform-template-literals', { loose: true }]
        }
      }
    });
    
    return config;
  },
  
  // Disable server components (not needed for static export)
  experimental: {
    serverComponents: false,
    esmExternals: 'loose',
  },
  
  // Handle static export paths
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
