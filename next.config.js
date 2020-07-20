module.exports = {
  env: {
    apiURL: "https://us-central1-website-dennis-stassen.cloudfunctions.net/app",
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
