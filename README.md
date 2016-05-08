# generator-react-great [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator for react, easy for you to build react components

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-great using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-great
```

Then create your project folder and generate your new project:

```bash
mkdir YOUR_FOLDER && cd YOUR_FOLDER
yo react-great
```

## Getting To Know `generator-react-great`

 * Please make sure your Node.js is at least `Node 4.x`
 * Using the latest `React 15.x`
 * Using the [Dora](https://github.com/dora-js/dora) service to start the development environment

## The Generated Project Structure

```bash
- demo              // app demo
- src
    - components    // your app components
    - index.jsx     // your app root
- webpack.config.js // config your webpack
- index.jsx         // your app export entry
```

## License

MIT © [Weiwei SUN](http://wwsun.github.io)


[npm-image]: https://badge.fury.io/js/generator-react-great.svg
[npm-url]: https://npmjs.org/package/generator-react-great
[travis-image]: https://travis-ci.org/wwsun/generator-react-great.svg?branch=master
[travis-url]: https://travis-ci.org/wwsun/generator-react-great
[daviddm-image]: https://david-dm.org/wwsun/generator-react-great.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wwsun/generator-react-great
[coveralls-image]: https://coveralls.io/repos/wwsun/generator-react-great/badge.svg
[coveralls-url]: https://coveralls.io/r/wwsun/generator-react-great
