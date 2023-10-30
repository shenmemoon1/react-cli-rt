const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // clear: true,
  },
  module: {
    // 配置加载 JavaScript 文件的规则
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 使用 MiniCssExtractPlugin 提取 CSS
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.svg$/, // 匹配SVG文件
        use: [
          {
            loader: "file-loader", // 使用file-loader来处理SVG文件
            // options: {
            //   name: "static/media/[name].[hash:8].[ext]", // 可以根据需要配置输出路径和文件名
            // },
          },
        ],
      },
      // 处理常见的图片类型（可以根据需要添加更多类型）
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]", // 输出路径和文件名配置
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    // 提取 CSS 到单独的文件
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
