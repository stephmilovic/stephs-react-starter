const webpack = require('webpack');
const commonPaths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: commonPaths.entryPath,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    emitWarning: process.env.NODE_ENV !== 'production',
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            outputPath: commonPaths.imagesFolder,
                        },
                    },
                ],
            },
            {
                test: /\.(woff2|ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.fontsFolder,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            src: commonPaths.src,
            helpers: commonPaths.helpers,
        },
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath,
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};
