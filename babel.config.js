const presets = [
  "@babel/preset-env",
  "@babel/preset-typescript",
  "@babel/preset-react"
]

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",

]

if (process.env["ENV"] === "development") {
  plugins.push("react-refresh/babel")
}

module.exports = { presets, plugins }
