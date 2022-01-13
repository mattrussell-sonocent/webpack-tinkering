import webpack from 'webpack'
import { merge } from 'webpack-merge'
import { commonConfig } from './webpack.common'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: webpack.Configuration = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        oneOf: [
          {
            test: /\.module\.s[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader,
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
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
})

// noinspection JSUnusedGlobalSymbols
export default config
