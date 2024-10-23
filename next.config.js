const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: true,
});

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\/app\/post\/.*/i, // 이 경로에 맞는 파일을 대상으로 함
      loader: "ignore-loader", // 이 파일을 번들링에서 제외
    });
    return config;
  },
};

// module.exports = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
