const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: ["./client/index.js"], // Entry point for your application
  output: {
    path: path.resolve(__dirname, "public"), // Output directory for bundled code
    filename: "bundle.js", // Name of the bundled JavaScript file
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex to match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel to transpile JavaScript and JSX
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: [
          "style-loader", // Inject CSS into the DOM via a <style> tag
          "css-loader", // Resolves CSS imports
          {
            loader: "postcss-loader", // Process CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"), // Include Tailwind CSS
                  require("autoprefixer"), // Include Autoprefixer for vendor prefixes
                ],
              },
            },
          },
        ],
      },
      // Additional rules for other file types (e.g., images, fonts) can be added here
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.SOCKET": JSON.stringify(process.env.SOCKET),
    }),
    // Additional plugins as needed
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these file extensions
    fallback: {
      path: require.resolve("path-browserify"),
      fs: false, // Indicate that 'fs' module is not available in the browser
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
    },
  },
  stats: {
    errorDetails: true, // Show detailed
  },
  devtool: "source-map", // Generate source maps for easier debugging
};
