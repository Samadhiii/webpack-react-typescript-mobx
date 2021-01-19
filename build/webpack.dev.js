const path = require('path');
const { merge } = require('webpack-merge'); // Merge webpack's base config
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'development', // env mode
  devtool: 'cheap-module-source-map',
  entry: {
    index: [
      'react-hot-loader/patch', // React.js module hot replacement
      './src/index.js',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // React.js module hot plugin
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    port: '8888',
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    hot: true, // Whether to open the module hot replacement
    overlay: true, // Display errors and warnings on the web page
  },
});
