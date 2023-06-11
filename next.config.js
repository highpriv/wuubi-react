const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(__dirname, "components");

    return config;
  },
});
