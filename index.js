var loaderUtils = require("loader-utils");

function loader(source, inputSourceMap) {
    var callback = this.async();
    if(source.indexOf('Proxy') != -1){//Case when Proxy is used in the source
        var loaderOptions = loaderUtils.parseQuery(this.query);
        if(loaderOptions.type === 'ts'){
            source = "import * as Proxy from 'proxy-polyfill-loader/lib';"+"\n"+source
        }
        else{
            source  = 'var Proxy = require("proxy-polyfill-loader/lib")' + '\n'+ source;
        }
    }
    callback(null, source, inputSourceMap);
}

module.exports = loader;
