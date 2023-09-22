// next.config.js

module.exports = {
  // ... other configurations ...

  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/public",
            outputPath: "fonts",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/public",
            name: "/files/[name].[ext]",
          },
        },
      }
    );

    return config;
  },
};
