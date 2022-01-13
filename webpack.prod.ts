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
        test: /\.(s[ac]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
})

export default config
