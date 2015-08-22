var path = require('path');
var webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry: {
      javascript: './js/app.js',
      html: './index.html'
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /.css$/, loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}

