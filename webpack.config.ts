import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

export const DEV_SERVER_PORT = 3000;

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*',
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: DEV_SERVER_PORT,
    open: true,
    historyApiFallback: true,
  }
};

export default config;
