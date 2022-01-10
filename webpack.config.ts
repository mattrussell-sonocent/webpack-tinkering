import { Configuration } from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Tinkering"
    })
  ]
}

export default config
