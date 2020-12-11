/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
/* eslint-disable sort-keys */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies

module.exports = {
    entry: './src/index',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.mjs', '.jsx'],
        alias: {
            events: 'events',
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true,
        hot: false,
        hotOnly: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    output: {
        publicPath: 'http://localhost:3000/',
        chunkFilename: '[id].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.m?js$/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader' },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new ESLintPlugin({ fix: true }),
        new ModuleFederationPlugin({
            name: 'livia_container',
            filename: 'remoteEntry.js',
            exposes: {
                './ApolloClientContainer': './src/hooks/ApolloClientContainer',
            },
            remotes: {
                livia_container: 'livia_container@http://localhost:3000/remoteEntry.js',
                exames: 'exames@http://localhost:3001/remoteEntry.js',
            },
            shared: [
                {
                    graphql: { singleton: true, requiredVersion: deps.graphql },
                    '@apollo/client': { singleton: true, requiredVersion: deps['@apollo/client'] },
                    react: { singleton: true, requiredVersion: deps.react },
                    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}
