const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(mp3|wav|ogg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      outputPath: 'audio/', // Output directory for audio files
                      publicPath: 'audio/' // Public URL for audio files
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        compress: true,
        port: 8080,
        hot: true,
    },
};
