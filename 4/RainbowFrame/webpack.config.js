const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
    entry: "./App.js",
    output:{ 
        path: __dirname,
        filename: "bundle.js"
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }            
        ] 
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
    ]
}