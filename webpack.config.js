const path = require("path");
const development = process.env.NODE_ENV !== 'production';
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let WebpackNotifierPlugin = require('webpack-notifier');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // Set the mode based on the NODE_ENV environment variable
    mode: development ? 'development' : 'production',

    // Optimization Information
    optimization: {
        // Only minimize for production
        minimize: !development,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    externals : {
    },

    // Entry points
    entry: {
        // Assets for the majority of the site
        index: [
            './src/index.js'
        ],
    },

    // Outputs
    output: {
        // Specify the public path
        path: path.resolve(__dirname, './dist'),
        // Specify where the js should be saved. Give it a chunkhash if in production to allow caching
        filename: '[name].js'
    },
    module: {
        rules: [
            // Compile JS with babel so we can use modern JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // Loader for .vue files
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        // Clean old compiled files before new ones are compiles
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist/*'],
        }),

        // Load Vue
        new VueLoaderPlugin(),

        // Notify on completed build. Notify on error in production, or always in development
        new WebpackNotifierPlugin({
            title: 'Frontend Toolkit',
            alwaysNotify: development
        })
    ],

    resolve: {
        // Define aliases
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    stats: {
        // Hide stats about child output
        children: false
    }
}
