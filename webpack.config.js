 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const CopyWebpackPlugin = require('copy-webpack-plugin');  // فقط استيراد مرة واحدة

 module.exports = {
   entry: {
     main: path.resolve(__dirname, './src/index.js')
   },
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,          // حذف الملفات القديمة تلقائيًا عند كل build
    },

 module: {
     rules: [
       {
         test: /\.html$/i,
         loader: "html-loader",
       },
       {
         test: /\.(sa|sc|c)ss$/,
         
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],        
       },
       {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
   devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8081,
    open: true,
  },
  
   plugins: [ new CopyWebpackPlugin({
    patterns: [
      { from: 'src/assest', to: 'assest' },
    ],
  }),
    new HtmlWebpackPlugin({
   filename: 'index.html',
   template: './src/index.html'
   }),
   new MiniCssExtractPlugin({filename: 'style.css'})
 ],
 devServer: {
  static: path.resolve(__dirname, 'dist'),
  port: 8081,
  open: true,
  watchFiles: ['src/**/*.html'], // تحديث الصفحة تلقائيًا عند تغيير HTML
},
 };