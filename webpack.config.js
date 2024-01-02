const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource", // Asset Modules for handling images
        generator: {
          filename: "images/[name][ext]", // Output images in "public/images" directory
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY),
      },
    }),
  ],
};
