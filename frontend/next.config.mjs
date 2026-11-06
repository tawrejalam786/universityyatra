/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React Compiler for production builds (memory intensive)
  reactCompiler: false,
  
  // Empty Turbopack config to silence warning in dev mode
  turbopack: {},
  
  // Optimize for limited build resources
  experimental: {
    // Reduce worker count to limit memory usage
    workerThreads: false,
    cpus: 1,
  },
  
  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,
  
  // Webpack optimizations for limited memory (production only)
  webpack: (config, { isServer }) => {
    // Limit memory usage during build
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    
    return config;
  },
  
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default nextConfig;
