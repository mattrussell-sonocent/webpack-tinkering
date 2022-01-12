import common from "./webpack.common"
import webpack from 'webpack'
import { merge } from "webpack-merge"
import 'webpack-dev-server'

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: './dist'
  }
})

export default config
