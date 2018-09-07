const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
        h5ShareToNative:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
        library: '[name].js',
        libraryTarget: 'umd'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    //压缩js
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    }
}