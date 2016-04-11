var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");
var stylelint = require('stylelint');


var publicFolderName = ".public";
var localhost = "http://localhost:8080/";

module.exports = {
  entry: [
    'webpack-dev-server/client?' + localhost,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/app/index',
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  devtool: "source-map",
  output: {
    path: __dirname + '/' + publicFolderName,
    publicPath: localhost + 'src/',
    filename: 'application.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['jscs', 'eslint'],
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style',
                  'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                  'postcss'
                ]
      },
      {
        test: /\.(png|jpg|gif)$//*, loader: 'file-loader'*/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.(json)$/, loader: 'json-loader'
      },
      {
        test   : /\.(ttf|eot|svg|woff|otf)(\?[a-z0-9]+)?$/,
        loader : 'file'
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({ browsers: ['Android >= 2.3', 'iOS >= 7', 'Chrome >= 46'] }),
    precss
  ],
  jscs: {
    // JSCS errors are displayed by default as warnings.
    // Set `emitErrors` to `true` to display them as errors.
    emitErrors: false,

    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false,
  }
};
