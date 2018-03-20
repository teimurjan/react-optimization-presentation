const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({template: './src/index.html', filename: 'index.html', inject: 'body'})
const autoprefixer = require('autoprefixer');

const shouldUseSourceMap = true;

module.exports = {
    devtool: shouldUseSourceMap
        ? 'source-map'
        : false,
    entry: {
        client: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve('build'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        modules: [
            'node_modules', 'src'
        ],
        extensions: ['*', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'), {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: shouldUseSourceMap
                        }
                    }, {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'vendor', filename: 'vendor.[chunkhash].js', minChunks: Infinity}),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'manifest'}),
        new webpack.HashedModuleIdsPlugin()
    ]
}