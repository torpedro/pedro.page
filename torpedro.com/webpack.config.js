
var webpack = require('webpack');
var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  context: __dirname + "/src",
  entry: "./app.ts",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: { 
    // lists the extensions of files to look for in requires
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.tsx$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/,
        loaders: ["style-loader", "css-loader?-url", "sass-loader"]
      }, // ?-url disables url(...) handling
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};
