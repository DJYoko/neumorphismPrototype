const {
    VueLoaderPlugin
} = require('vue-loader')

const MODE = 'development'
const enabledSourceMap = MODE === 'development'
const path = require('path')

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/docs/js/',
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@js': path.resolve(__dirname, 'src/js')
        }
    },
    plugins: [new VueLoaderPlugin()]
}