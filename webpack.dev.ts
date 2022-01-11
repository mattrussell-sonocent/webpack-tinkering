import common from "./webpack.common"
import { Configuration } from "webpack"
import { merge } from "webpack-merge"
import 'webpack-dev-server'

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
})

export default config
