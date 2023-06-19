const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(__dirname, "components");

    return config;
  },
};
