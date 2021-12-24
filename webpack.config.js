const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    lostMainPage: "/src/js/lostPets/lostMainPage.js",
    lostDetailPage: "/src/js/lostPets/lostDetailPage.js",
    myPage: "/src/js/myPage/index.js",
  },
  devtool: "inline-source-map",
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};
