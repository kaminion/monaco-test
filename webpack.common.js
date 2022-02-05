const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = 
{
    entry: "./index.tsx",
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
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options:
                        {
                            minimize: true
                        }
                    }
                ]
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
            template:'public/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ],
    mode: 'none',
    target:'web'
}