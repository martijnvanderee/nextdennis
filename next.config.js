const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withOptimizedImages({
  imageTrace: {
    color: "#013f5d",
  },

  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    config.node = {
      fs: "empty",
    };
    return config;
  },
});

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/old-blog/:post(\\d{1,})",
//         destination: "/blog/:post", // Matched parameters can be used in the destination
//         permanent: true,
//       },
//     ];
//   },
// };
