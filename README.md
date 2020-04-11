# react-starter-kit

webpack과 babel을 사용해 react의 기초 설정을 했다.

## webpack

- webpack
- webpack-cli
- webpack-deb-server
- style-loader
- css-loader 
- sass-loader
- node-sass
- mini-css-extract-plugin
- html-webpack-plugin

## babel

- @babel/core, 
- babel-loader
- @babel/plugin-proposal-class-properties
- @babel/preset-env
- @babel/preset-react

## react

- react
- react-dom

> .babelrc는 webpack.config.js 안에서 설정 했다.

## webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["./src/index"],
  resolve: {
    extensions: [".jsx", ".js", ".scss"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/proposal-class-properties"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_module/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};

```

### 참고 자료
- http://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html
- https://velog.io/@noyo0123/react-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-c1k2zrmxet
