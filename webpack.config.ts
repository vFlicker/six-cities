/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { Configuration as WebpackConfiguration, WebpackPluginInstance } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-unresolved
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

const DEV_SERVER_PORT = 3000;

const isDev = process.env.NODE_ENV === 'development';

const getMinimizerConfig = (): WebpackPluginInstance[] | undefined => {
  if (!isDev) {
    return [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ];
  }

  return undefined;
};

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    // TODO: uncomment this
    // clean: true,
  },
  optimization: {
    minimizer: getMinimizerConfig(),
    minimize: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: { files: './src/**/*.{ts,tsx,js}' },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      minify: { collapseWhitespace: !isDev },
      favicon: './src/assets/images/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : 'css/[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: { filename: 'images/[name].[contenthash][ext][query]' },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name].[contenthash][ext]' },
      },
    ],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: isDev,
  },
};

export default config;
