/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Windows için büyük/küçük harf duyarlılığını devre dışı bırak
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      resolve: {
        fullySpecified: false
      }
    });
    return config;
  }
};

module.exports = nextConfig; 