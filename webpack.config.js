const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: ["./client/index.js"], // Your entry point for the application
  output: {
    path: path.resolve(__dirname, "public"), // Output directory for the bundled code
    filename: "bundle.js", // Name of the bundled JavaScript file
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Regex to match JavaScript and JSX files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel to transpile JavaScript and JSX
          options: {
            presets: ["@babel/preset-react"], // Use the React preset for Babel
          },
        },
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: [
          "style-loader", // Injects CSS into the DOM via a <style> tag
          "css-loader", // Resolves CSS imports
          {
            loader: "postcss-loader", // Processes CSS with PostCSS
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  require("tailwindcss"), // Include Tailwind CSS
                  require("autoprefixer"), // Include Autoprefixer for vendor prefixes
                ],
              },
            },
          },
        ],
      },
      // ... You can include additional rules for other file types (e.g., images, fonts)
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.SOCKET": JSON.stringify(process.env.SOCKET),
    }),
    // ... You can include additional plugins as needed
  ],
  resolve: {
    alias: {
      buffer: "buffer", // Resolve the buffer module
    },
    fallback: {
      path: require.resolve("path-browserify"), // Provide a browser version of the path module
      fs: false, // Indicate that the fs module is not available in the browser
      stream: require.resolve("stream-browserify"), // Provide a browser version of the stream module
      util: require.resolve("util/"), // Provide a browser version of the util module
    },
  },
  stats: {
    errorDetails: true, // Show details if there's an error during the build
  },
  devtool: "source-map", // Generate source maps for debugging
};
