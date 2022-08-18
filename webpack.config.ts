import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

type Env = {
  WEBPACK_SERVE: boolean;
  mode: 'development' | 'production' | undefined;
};

const DEV_SERVER_PORT = 3000;

const config = (env: Env): Configuration => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getOptimization = () => {
    if (isProd) {
      const optimization = {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin(),
          new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
          }),
        ],
        minimize: true,
      };

      return optimization;
    }

    return undefined;
  };

  return {
    mode,
    entry: './src/index.tsx',
    output: {
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'public'),
      // TODO: uncomment this
      // clean: true,
    },
    optimization: getOptimization(),
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: { files: './src/**/*.{ts,tsx,js}' },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        minify: { collapseWhitespace: isProd },
        favicon: './src/assets/images/favicon.ico',
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
          generator: {
            filename: isDev
              ? '[name][ext]'
              : 'images/[name].[contenthash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: isDev ? '[name][ext]' : 'fonts/[name].[contenthash][ext]',
          },
        },
      ],
    },
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
      extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port: DEV_SERVER_PORT,
      open: isDev,
      historyApiFallback: true,
      hot: isDev,
    },
  };
};

export default config;
