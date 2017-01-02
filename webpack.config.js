var webpack = require("webpack");
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: './',
        libraryTarget: "amd"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
},
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    externals: [
        function(context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
   ],
devtool: 'source-map'
};