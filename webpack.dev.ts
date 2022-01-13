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
})

console.log('Dev config')
console.log(config)

export default config
