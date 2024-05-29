"use strict";

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");

const cesiumSource = "node_modules/cesium/Build/Cesium";
// this is the base url for static files that CesiumJS needs to load
// Not required but if it's set remember to update CESIUM_BASE_URL as shown below
const cesiumBaseUrl = "cesiumStatic";

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  // entry: {
  //   app: "./src/index.tsx",
  // },
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    // sourcePrefix: "",
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        options:{
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json|svg|ico)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    // Copy Cesium Assets, Widgets, and Workers to a static directory
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, "Workers"),
          to: `${cesiumBaseUrl}/Workers`,
        },
        {
          from: path.join(cesiumSource, "ThirdParty"),
          to: `${cesiumBaseUrl}/ThirdParty`,
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: `${cesiumBaseUrl}/Assets`,
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: `${cesiumBaseUrl}/Widgets`,
        },
      ],
    }),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
    }),
  ],
  mode: "development",
  devtool: "eval",
};
