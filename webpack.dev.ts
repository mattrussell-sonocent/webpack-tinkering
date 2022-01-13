import webpack from 'webpack'
import { merge } from 'webpack-merge'
import 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { commonConfig } from './webpack.common'

const config: webpack.Configuration = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        oneOf: [
          {
            test: /\.module\.s[ac]ss$/,
            use: [
              'style-loader',
              'css-modules-typescript-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]--[hash:base64:5]',
                  },
                },
              },
              'sass-loader',
            ],
          },
          {
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
})

export default config
