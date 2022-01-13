import webpack from 'webpack'
import { merge } from 'webpack-merge'
import { commonConfig } from './webpack.common'

const config: webpack.Configuration = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
})

export default config
