# generator-redux-react-cordova [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
>

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

## Features

* React ES6-style + React Router
* Redux with simple AJAX request to jsonplaceholder
* React CSS Modules
* Webpack: babel (ES6 with stages), hot-reload, jscs, eslint (TBD)
* PostCSS: autoprefixer, precss (sass-liked), csslint (TBD)
* config.xml with initial resources: splash screens, icons, plugins
* Gulp for images optimization and zip bundling for http://build.phonegap.com

## Supported Platform

* Node.js 4.x or 5.x
* Cordova-cli (phonegap-cli): 6.x [release note]( http://cordova.apache.org/news/2016/01/28/tools-release.html)
    * Cordova iOS: ~4.0.1
    * Cordova Android: ~5.1.0
    * and you can add other platforms

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

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
