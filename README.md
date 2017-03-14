# proxy-polyfill-loader
proxy poly fill loader for webpack


## Installation

``` shell
npm install proxy-polyfill-loader --save-dev
```

## Usage

Apply the proxy loader as preLoader in your webpack configuration:
For type script provide query param type=ts (proxy-polyfill-loader?type=ts)

``` javascript
module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'proxy-polyfill-loader'
            }
        ]
    }

}
```

## Proxy fill

Added by proxy-polyfill (https://github.com/GoogleChrome/proxy-polyfill) module es5 standard transpilation
can be transpiled by following commands

``` shell
npm install
npm run transpile-proxy
```



## License

[MIT](http://www.opensource.org/licenses/mit-license.php)


