const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    index: "./basic/js/main.js"
},
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { modules: true },
          },
          {
            loader: "sass-loader",
          },
        ]
      },
      {
        test: /.(png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'basic/index.html'),
        chunks: ["index"],
        inject: true
     })
    ],
    devServer: {
        static: "./dist"
    }
};
