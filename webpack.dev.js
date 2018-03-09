const commonConfig = require('./webpack.common');
const Merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = Merge(commonConfig, {
    entry: [
        "webpack-hot-middleware/client?reload=true"
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    module: {
        loaders: [
           {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["react","es2015","stage-0","react-hmre"]
                },
                include: __dirname
            }
        ]
    }
});

