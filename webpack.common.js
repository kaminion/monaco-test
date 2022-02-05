const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = 
{
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
      ]  
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            meta: {
                viewport:"width=device-width, initial-scale=1.0"
            }
        })
    ],
    mode: 'none',
    target:'web'
}