const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = 
{  
    entry: './src/index.js',  
    output: {    
        path: __dirname + '/build',    
        publicPath: '/',    
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
};

