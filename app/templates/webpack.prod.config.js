var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var precss = require('precss');
var path = require("path");
var stylelint = require('stylelint');
var appPackage = require('./package.json');

var publicFolderName = ".public";

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app/index'
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss']
  },
  output: {
    path: __dirname + '/' + publicFolderName,
    publicPath: './',
    filename: 'application.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin('./.public/'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      }
    })
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
        test: /\.(png|jpg|gif)$/,
        exclude: /(splashes|icons)/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.png$/,
        include: /(splashes|icons)/,
        loaders: [
          'file?name=[path][name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.(html|xml)$/,
        loaders: [
          'file?name=[name].[ext]', 'multiple-replace?' +
          'META_NAME=' + appPackage.appName +
          '&META_DESCRIPTION=' + appPackage.description +
          '&META_BUNDLE_ID=' + appPackage.bundleId +
          '&META_VERSION=' + appPackage.version +
          '&META_SHORT_VERSION=' + appPackage.shortVersion +
          '&META_AUTHOR_NAME=' + appPackage.author.name +
          '&META_AUTHOR_HREF=' + appPackage.author.url +
          '&META_AUTHOR_EMAIL=' + appPackage.author.emai
        ]
      },
      {
        test: /\.(json)$/, loader: 'json-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|otf)(\?[a-z0-9]+)?$/,
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
    emitErrors: true,
    // JSCS errors do not interrupt the compilation.
    failOnHint: false,
  }
};
