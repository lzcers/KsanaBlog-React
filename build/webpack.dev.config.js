const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
    output: {
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(css|less|less)$/,
                loader: 'style-loader!css-loader!less-loader',
            },
        ],
    },
    // 开发环境需要将请求反向代理到本地的 Golang 后端
    devServer: {
        host: '0.0.0.0',
        proxy: {
            // '/api': {
            //   target: 'http://localhost:9090',
            //   pathRewrite: {'^/api': ''}
            // },
            '/api': {
                target: 'https://ksana.net',
                secure: false,
            },
        },
    },
    // 开发环境用这个 source-map 据说会更快
    devtool: '#cheap-module-eval-source-map',
})
