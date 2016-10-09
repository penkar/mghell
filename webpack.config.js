// require('babel-polyfill')

var path = require('path');
var webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

module.exports = {
  context: __dirname,
  entry: PATHS.src,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.OldWatchingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },{
        test: /\.scss$/,
        include: PATHS.src,
        loaders: ['style', 'css', 'sass']
      },{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },{
        test: /\.(png|woff|woff2|eot|ttf|svg|TTF)$/,
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  // devtool: 'source-map',
  watch: true
};
