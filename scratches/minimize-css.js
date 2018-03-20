const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                oneOf: [{
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        use: [{
                            loader: require.resolve('css-loader'),
                            options: {
                                minimize: true
                            }
                        }]
                    })
                }]
            }
        ]
    }
}