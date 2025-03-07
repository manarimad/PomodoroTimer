// // import './style.scss';
// // import './style.css';


// // webpack.config.js
// // const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');

// // module.exports = {
// //   entry: './src/index.js',
// //   output: {
// //     filename: 'main.js',
// //     path: path.resolve(__dirname, 'dist'),
// //     clean: true,
// //   },
// //   mode: 'development',
// //   module: {
// //     rules: [
// //       {
// //         test: /\.css$/i,
// //         use: ['style-loader', 'css-loader'],
// //       },
// //       {
// //         test: /\.mp3$/,
// //         use: [
// //           {
// //             loader: 'file-loader',
// //             options: {
// //               name: '[name].[ext]',
// //               outputPath: 'assets/',
// //             },
// //           },
// //         ],
// //       },
// //     ],
// //   },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: './public/index.html',
// //     }),
// //   ],
// //   devServer: {
// //     static: './dist',
// //     hot: true,
// //   },
// // };

// // src/index.js (Entry point)
// // import './ui.js';
// // import './timer.js';
// // import './settings.js';
// // import './notifications.js';
// // import './style.scss';

// // console.log('Pomodoro Timer App Initialized');

// // src/notifications.js (Sound Alerts)
// // import notificationSound from './assets/notification.mp3';

// // export function playNotification() {
// //   const audio = new Audio(notificationSound);
// //   audio.play();
// // }
// import { startTimer, pauseTimer, resetTimer, setDurations } from "./timer.js";
// import { updateTimerDisplay } from "./ui.js";
// import { loadSettings, saveSettings } from "./settings.js";
// import { addTask, loadTasks } from "./tasks.js";
// import "./style.scss";
// // import "./style.css";


// document.addEventListener("DOMContentLoaded", () => {
//     loadSettings();
//     loadTasks();

//     document.getElementById("start").addEventListener("click", startTimer);
//     document.getElementById("pause").addEventListener("click", pauseTimer);
//     document.getElementById("reset").addEventListener("click", resetTimer);
//     document.getElementById("save-settings").addEventListener("click", setDurations);
//     document.getElementById("add-task").addEventListener("click", addTask);
// });
import { startTimer, pauseTimer, resetTimer, setDurations } from "./timer.js";
import { updateTimerDisplay } from "./ui.js";
import { loadSettings, saveSettings } from "./settings.js";
import { addTask, loadTasks } from "./tasks.js";
import "./style.scss"; // تأكد من أن ملف style.scss موجود في src

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();  // تأكد أن هذه الدالة تعمل وتقوم بتحميل الإعدادات بشكل صحيح
    loadTasks();     // تأكد أن هذه الدالة تعمل وتقوم بتحميل المهام بشكل صحيح

    // تأكد من أن هذه العناصر موجودة في ملف HTML
    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("pause").addEventListener("click", pauseTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
    document.getElementById("save-settings").addEventListener("click", setDurations);
    document.getElementById("add-task").addEventListener("click", addTask);
});
