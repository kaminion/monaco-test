const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundles.[chunkhash].js",
        chunkFilename: "chunkbundle.[chunkhash].js",
    },
    optimization: {
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            path: require.resolve("path-browserify"),
            buffer: require.resolve("buffer/"),
            querystring: require.resolve("querystring-es3"),
            stream: require.resolve("stream-browserify"),
            os: require.resolve("os-browserify/browser"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new MonacoWebpackPlugin(),
    ],
    target: "web",
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path.resolve(__dirname, "./dist") },
        hot: true,
        host: "localhost",
        port: "10600",
        open: true,
    },
};
