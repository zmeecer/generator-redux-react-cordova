var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");
var stylelint = require('stylelint');
var appPackage = require('./package.json');

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
        loader: 'null'
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
  eslint: {
    rules: {
      'no-debugger': 0,
      'no-console': 0,
    }
  },
  jscs: {
    // JSCS errors are displayed by default as warnings.
    emitErrors: false,
    // JSCS errors do not interrupt the compilation.
    failOnHint: false,
  }
};
