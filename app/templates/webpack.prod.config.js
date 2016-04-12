var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    new ExtractTextPlugin('application.css', {
      allChunks: true
    }),
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
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.(png|jpg|gif)$//*, loader: 'file-loader'*/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.(html|xml)$/,
        loaders: [
          'file?name=[name].[ext]',
          'replace?flags=g&regex=META_NAME&sub=' + appPackage.appName,
          'replace?flags=g&regex=META_DESCRIPTION&sub=' + appPackage.description,
          'replace?flags=g&regex=META_BUNDLE_ID&sub=' + appPackage.bundleId,
          'replace?flags=g&regex=META_VERSION&sub=' + appPackage.version,
          'replace?flags=g&regex=META_SHORT_VERSION&sub=' + appPackage.shortVersion,
          'replace?flags=g&regex=META_AUTHOR_NAME&sub=' + appPackage.author.name,
          'replace?flags=g&regex=META_AUTHOR_HREF&sub=' + appPackage.author.href,
          'replace?flags=g&regex=META_AUTHOR_EMAIL&sub=' + appPackage.author.email
        ]
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
    emitErrors: true,

    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false,
  }
};
