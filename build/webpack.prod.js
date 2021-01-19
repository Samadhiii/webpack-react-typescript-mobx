const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Separate css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // Compress css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // Compress JS
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Delete dist when building
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'production', // env mode,You can get env mode like "process.env.NODE_ENV"
  devtool: 'source-map',
  entry: {
    index: [
      './src/index.js',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: 'style/[id].[contenthash].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.BannerPlugin('DATATOM.Ltd\nCopyright(c) 2011-2021. \nAuthor: Samadhi'), // Information of the built file
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Can be written /\.(le|sa|sc|c)ss$/, but it affects packaging efficiency
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }, // autoprefixer
          { loader: 'less-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true, // Whether to enable multithreading, true or false, can be set as a number
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true, // Whether to delete console
          },
        },
      }),
    ],
  },
});
