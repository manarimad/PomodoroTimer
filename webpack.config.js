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
         //  /\.s[ac]ss$/i,
        //  use: [

        //    // Creates `style` nodes from JS strings
        //  //   "style-loader",
        //  MiniCssExtractPlugin.loader, 

        //    // Translates CSS into CommonJS
        //    "css-loader",
        //    // Compiles Sass to CSS
        //    "sass-loader",
        //  ],
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


// // // // // const path = require("path");
// // // // // const HtmlWebpackPlugin = require("html-webpack-plugin");

// // // // // module.exports = {
// // // // //     entry: "./src/index.js",
// // // // //     output: {
// // // // //         filename: "main.js",
// // // // //         path: path.resolve(__dirname, "dist"),
// // // // //     },
// // // // //     module: {
// // // // //         rules: [
// // // // //             { test: /\.css$/, use: ["style-loader", "css-loader"] },
// // // // //             { test: /\.(mp3)$/, use: ["file-loader"] }
// // // // //         ],
// // // // //     },
// // // // //     plugins: [
// // // // //         new HtmlWebpackPlugin({ template: "./index.html" })
// // // // //     ],
// // // // //     mode: "development"
// // // // // };


// // // // const path = require("path");
// // // // const HtmlWebpackPlugin = require("html-webpack-plugin");

// // // // module.exports = {
// // // //     mode: "development",
// // // //     entry: "./src/index.js",
// // // //     output: {
// // // //         filename: "bundle.js",
// // // //         path: path.resolve(__dirname, "dist"),
// // // //         clean: true,
// // // //     },
// // // //     module: {
// // // //         rules: [
// // // //             {
// // // //                 test: /\.scss$/,
// // // //                 use: ["style-loader", "css-loader", "sass-loader"],
// // // //                 test: /\.css$/, use: ["style-loader", "css-loader"],
// // // //             },
// // // //         ],
// // // //     },
    
// // // //     plugins: [
// // // //         new HtmlWebpackPlugin({
// // // //             template: "./src/index.html",
// // // //         }),
// // // //     ],
// // // //     devServer: {
// // // //         static: "./dist",
// // // //         hot: true,
// // // //     },
// // // // };


// // // const path = require("path");
// // // const HtmlWebpackPlugin = require("html-webpack-plugin");

// // // module.exports = {
// // //     mode: "development",
// // //     entry: "./src/index.js",
// // //     output: {
// // //         filename: "bundle.js",
// // //         path: path.resolve(__dirname, "dist"),
// // //         clean: true,
// // //     },
// // //     module: {
// // //         rules: [
// // //             {
// // //                 test: /\.scss$/,  // استهداف ملفات SCSS
// // //                 use: ["style-loader", "css-loader", "sass-loader"],
// // //             },
// // //             {
// // //                 test: /\.css$/,  // استهداف ملفات CSS العادية
// // //                 use: ["style-loader", "css-loader"],
// // //             }
// // //         ],
// // //     },
// // //     plugins: [
// // //         new HtmlWebpackPlugin({
// // //             template: "./src/index.html",
// // //         }),
// // //     ],
// // //     devServer: {
// // //         static: "./dist",
// // //         hot: true,
// // //     },
    
// // // };


// // const path = require("path");
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // const HtmlWebpackPlugin = require("html-webpack-plugin");
// // const CopyPlugin = require("copy-webpack-plugin");

// // module.exports = {
// //   mode: "development", // يمكن تغييره إلى "production" عند النشر
// //   entry: "./src/index.js",
// //   output: {
// //     filename: "bundle.js",
// //     path: path.resolve(__dirname, "dist"),
// //     clean: true, // حذف الملفات القديمة عند كل بناء جديد
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.js$/, // لدعم JavaScript
// //         exclude: /node_modules/,
// //         use: {
// //           loader: "babel-loader",
// //           options: {
// //             presets: ["@babel/preset-env"],
// //           },
// //         },
// //       },
// //       {
// //         test: /\.scss$/, // لمعالجة SASS إلى CSS
// //         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
// //       },
// //       {
// //         test: /\.(png|jpg|jpeg|gif|svg|mp3)$/, // لدعم الصور والصوتيات
// //         type: "asset/resource",
// //         generator: {
// //           filename: "assets/[name][ext]",
// //         },
// //       },
// //     ],
// //   },
// //   plugins: [
// //     new MiniCssExtractPlugin({
// //       filename: "style.css", // استخراج الـ CSS النهائي
// //     }),
// //     new HtmlWebpackPlugin({
// //       template: "./src/index.html", // توليد HTML تلقائيًا
// //       filename: "index.html",
// //     }),
// //     new CopyPlugin({
// //       patterns: [{ from: "src/assest", to: "assest" }], // نسخ الملفات إلى dist/assets
// //     }),
// //   ],
// //   devServer: {
// //     static: path.join(__dirname, "dist"),
// //     compress: true,
// //     port: 3000,
// //     hot: true,
// //     open: true,
// //   },
// // };


// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

// module.exports = {
//   mode: "development", // يمكن تغييره إلى "production" عند النشر
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true, // حذف الملفات القديمة عند كل بناء جديد
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // لدعم JavaScript
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.scss$/, // لمعالجة SASS إلى CSS
//         use: [
//           // استخدم MiniCssExtractPlugin في الإنتاج، وstyle-loader في التطوير
//           process.env.NODE_ENV === "production"
//             ? MiniCssExtractPlugin.loader
//             : "style-loader", 
//           "css-loader",
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|svg|mp3)$/, // لدعم الصور والصوتيات
//         type: "asset/resource",
//         generator: {
//           filename: "assets/[name][ext]",
//         },
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "style.css", // استخراج الـ CSS النهائي
//     }),
//     new HtmlWebpackPlugin({
//       template: "./src/index.html", // توليد HTML تلقائيًا
//       filename: "index.html",
//     }),
//     new CopyPlugin({
//       patterns: [
//         { from: "src/assest", to: "assest" }, // نسخ الملفات إلى dist/assets
//       ],
//     }),
//   ],
//   devServer: {
//     static: path.join(__dirname, "dist"),
//     compress: true,
//     port: 3000,
//     hot: true,
//     open: true,
//   },
// };




// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

// module.exports = {
//   mode: "development", // يمكن تغييره إلى "production" عند النشر
//   entry: "./src/index.js", // يجب أن تتأكد أن ملف style.scss يتم استيراده في هذا الملف
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true, // حذف الملفات القديمة عند كل بناء جديد
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // لدعم JavaScript
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.scss$/, // لمعالجة SASS إلى CSS
//         use: [
//           // استخدم MiniCssExtractPlugin في الإنتاج، وstyle-loader في التطوير
//           process.env.NODE_ENV === "production"
//             ? MiniCssExtractPlugin.loader
//             : "style-loader", 
//           "css-loader",
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|svg|mp3)$/, // لدعم الصور والصوتيات
//         type: "asset/resource",
//         generator: {
//           filename: "assets/[name][ext]",
//         },
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "style.scss", // استخراج الـ CSS النهائي
//     }),
//     new HtmlWebpackPlugin({
//       template: "./src/index.html", // توليد HTML تلقائيًا
//       filename: "index.html",
//     }),
//     new CopyPlugin({
//       patterns: [
//         { from: "src/assest", to: "assest" }, // نسخ الملفات إلى dist/assets
//       ],
//     }),
//   ],
//   devServer: {
//     static: path.join(__dirname, "dist"),
//     compress: true,
//     port: 3000,
//     hot: true,
//     open: true,
//   },
// };
