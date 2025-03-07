const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        //  /\.s[ac]ss$/i,
        use: [

          // Creates `style` nodes from JS strings
        //   "style-loader",
        MiniCssExtractPlugin.loader, 

          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './src/index.html'
  }),
  new MiniCssExtractPlugin({filename: 'style.css'})
],
};