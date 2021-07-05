const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
    loaders: [
      { exclude: ["node_modules"], loader: "babel", test: /\.jsx?$/ },
      { loader: "style-loader!css-loader", test: /\.css$/ },
      { loader: "url-loader", test: /\.gif$/ },
      { loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
    ],
  },
  resolve: {
    alias: {
      config$: "./configs/app-config.js",
      react: "./vendor/react-master",
    },
    extensions: ["", "js", "jsx"],
    modules: [
      "node_modules",
      "bower_components",
      "shared",
      "/shared/vendor/modules",
    ],
  },
};
