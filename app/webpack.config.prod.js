const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    }
})
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer');
const shouldUseSourceMap = true;
const cssFilename = '[name].[contenthash:8].css';
const buildPath = path.resolve('build');

module.exports = {
    devtool: shouldUseSourceMap
        ? 'source-map'
        : false,
    entry: {
        client: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
    },
    output: {
        path: buildPath,
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    compact: true
                }
            }, {
                oneOf: [
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(Object.assign({
                            fallback: {
                                loader: require.resolve('style-loader'),
                                options: {
                                    hmr: false
                                }
                            },
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
                                        minimize: true,
                                        sourceMap: shouldUseSourceMap
                                    }
                                }, {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        // Necessary for external CSS imports to work
                                        // https://github.com/facebookincubator/create-react-app/issues/2677
                                        ident: 'postcss',
                                        plugins: () => [
                                            require('postcss-flexbugs-fixes'),
                                            autoprefixer({
                                                browsers: [
                                                    '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', // React doesn't support IE8 anyway
                                                ],
                                                flexbox: 'no-2009'
                                            })
                                        ]
                                    }
                                }
                            ]
                        }, {publicPath: buildPath}))
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({filename: cssFilename}),
        new ManifestPlugin({fileName: 'asset-manifest.json'}),
        new CleanWebpackPlugin(['build'], {verbose: true}),
        new webpack
            .optimize
            .UglifyJsPlugin({
                compress: {
                    warnings: false,
                    comparisons: false
                },
                mangle: {
                    safari10: true
                },
                output: {
                    comments: false,
                    ascii_only: true
                },
                sourceMap: shouldUseSourceMap
            }),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'vendor', filename: 'vendor.[chunkhash].js'}),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'manifest'})
    ]
}
