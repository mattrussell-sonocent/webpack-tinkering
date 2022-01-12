import common from './webpack.common'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const config: webpack.Configuration = merge(common, {
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
