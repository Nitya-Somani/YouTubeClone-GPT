const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your React application
  output: {
    filename: 'bundle.js', // Output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS files using Babel
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Turn CSS into CommonJS
        ],
      },
    ],
  },
  plugins: [
    // Generate an HTML file with the script tag included
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template file
      inlineSource: '.(js|css)$', // Inline CSS and JS
    }),
    // Inline the CSS and JS directly into the HTML file
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // Generate critical CSS and inline it in the HTML
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true, // Set to true if you don't want to keep the original files
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
        },
      },
    })],
  },
  mode: 'production', // Set mode to production for optimization
};
