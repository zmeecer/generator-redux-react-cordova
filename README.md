# generator-redux-react-cordova
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
>

## For What is for

It's boilerplate for Cordova (Phonegap) project: easy to use, useful for frequent projects development. In most cases, Cordova (Phonegap) application is optimal way to develop simple and cheap application over API for different platforms: iOS, Android, Web and other.

Actually, this is a good way to understand basics of Redux + React + Webpack for each developer and try it! After that you can build your Hybrid Mobile Application on the http://build.phonegap.com site (it was free for 1 app) or do it locally.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-redux-react-cordova using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-redux-react-cordova
```

Then generate your new project:

```bash
yo redux-react-cordova
```

## How to Start

Development mode with hot-reload:

```bash
npm run dev
```

Launch like website in prod mode:

```bash
npm run static
```

Building in prod mode and bundling zip archive (gulp-zip 3.0.2 is necessary):

```bash
npm run build
```

Also, there is a helpful plugin for Chrome browser with CORS proxy, settings for screens resolution/orientation, geo-simulation, etc [ripple-emulator](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc)

## Features

* React ES6-style + React Router
* Redux
    * simple AJAX request
    * internal search (TBD)
* React CSS Modules
* Webpack: babel (ES6 with stages), hot-reload, jscs, eslint
* PostCSS: autoprefixer, precss (sass features), csslint
* config.xml with initial resources: splash screens, icons, plugins
* Gulp for images optimization and zip bundling for http://build.phonegap.com

## Supported Platforms

* Node.js 4.x or 5.x as development environment
* Cordova-cli (phonegap-cli): 6.x [release note]( http://cordova.apache.org/news/2016/01/28/tools-release.html)
    * Cordova iOS: ~4.0.1
    * Cordova Android: ~5.1.0
    * and you can add other platforms

## Getting to Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## Contribute

Contributions are welcome. If you find something is missing or there are errors hidden somewhere, feel free to add a new issue.

## License

MIT © [Źmicier Jaraševič]()


[npm-image]: https://badge.fury.io/js/generator-redux-react-cordova.svg
[npm-url]: https://npmjs.org/package/generator-redux-react-cordova
[travis-image]: https://travis-ci.org/zmeecer/generator-redux-react-cordova.svg?branch=master
[travis-url]: https://travis-ci.org/zmeecer/generator-redux-react-cordova
[daviddm-image]: https://david-dm.org/zmeecer/generator-redux-react-cordova.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zmeecer/generator-redux-react-cordova
[coveralls-image]: https://coveralls.io/repos/zmeecer/generator-redux-react-cordova/badge.svg
[coveralls-url]: https://coveralls.io/r/zmeecer/generator-redux-react-cordova
