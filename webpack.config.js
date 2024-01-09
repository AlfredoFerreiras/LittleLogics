const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./client/index.js"],
  resolve: {
    fallback: {
      async_hooks: false,
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser"),
      crypto: require.resolve("crypto-browserify"),
      fs: false,
      http: require.resolve("stream-http"),
      zlib: require.resolve("browserify-zlib"),
      path: require.resolve("path-browserify"),
      querystring: require.resolve("querystring-es3"),
      assert: require.resolve("assert/"),
      net: false,
      os: require.resolve("os-browserify/browser"),
      tls: require.resolve("tls-browserify"),
      child_process: false,
      "pg-store": false,
      "node-gyp": false,
      npm: false,
      "aws-sdk": false, // Mock if not used
      "mock-aws-s3": false, // Mock if not used
      timers: require.resolve("timers-browserify"),
      https: require.resolve("https-browserify"),
    },
  },
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /nw-pre-gyp/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^sequelize|bcrypt$/,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
  },
};
