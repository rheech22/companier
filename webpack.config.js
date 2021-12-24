const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    lostMainPage: "/src/js/lostPets/lostMainPage.js",
    lostDetailPage: "/src/js/lostPets/lostDetailPage.js",
    myPage: "/src/js/myPage/index.js",
    myPetBoard: "/src/js/petStory/searchPetStory.js",
    myPetBoardDetail: "/src/js/petStory/index.js",
    editorPage: "/src/js/editorPage.js",
    login: "/src/js/login.js",
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
