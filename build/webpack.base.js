const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Automatic generated HTML
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 5 }); // Multi-threaded packaging

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
      template: path.resolve(__dirname, '../index.html'), // HTML template from
      filename: 'index.html', // Output HTML file's name
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: happyThreadPool,
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      templates: path.resolve(__dirname, '../src/templates'),
      routes: path.resolve(__dirname, '../src/routes'),
      router: path.resolve(__dirname, '../src/router'),
      utils: path.resolve(__dirname, '../src/utils'),
      views: path.resolve(__dirname, '../src/views'),
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.Tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50,
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(woff)|(eot)|(ttf)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50,
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'happypack/loader?id=babel',
          },
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(html|htm)$/i,
        use: ['html-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
};
