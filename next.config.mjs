/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'encoding');
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.module.rules.push({
      test: /node_modules\/@metamask\/sdk/,
      use: { loader: 'null-loader' }
    });
    return config;
  }
};

export default nextConfig;
