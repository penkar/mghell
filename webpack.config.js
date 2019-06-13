var path = require('path');
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
  module: {
    rules: [{
      test: /\.scss$/,
      include: PATHS.src,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },{
      test: /.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },{
      test: /\.(png|woff|woff2|eot|ttf|svg|TTF)$/,
      loader: 'url-loader' 
    }]
  },
  watch: true,
  devtool: 'source-map',
  mode: 'development'
};
