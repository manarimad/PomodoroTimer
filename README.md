# ⏳ Pomodoro Timer - Your Productivity Companion

The **Pomodoro Timer** website is a productivity tool that helps users manage their time efficiently by implementing the Pomodoro Technique. This technique divides work into focused intervals (Pomodoros) followed by short breaks to improve concentration and prevent burnout.

---

## 🌟 About Pomodoro Timer

The website allows users to start, pause, and reset the timer, customize work and break durations, and manage tasks seamlessly. With a simple and intuitive interface, Pomodoro Timer helps users stay organized and maximize productivity in both personal and professional tasks.

---

## 📂 Project Structure

The project is built with HTML, JavaScript (ES6 modules), SCSS, and Webpack for bundling and optimization. Below is the file structure:

1. **[index.html]**  
   - The main structure of the webpage.


2. **[index.js]**  
   -  Handles initialization and event listeners. 


3. **[timer.js]**  
   - Manages the countdown timer logic.


4. **[settings.js]**  
   -  Handles user preferences.

5. **[tasks.js]**
- Manages the task list functionality.

6. **[ui.js]**
- Updates the UI dynamically.

7. **[notification.js]**
- Plays a sound notification when a session ends.

8. **[style.scss]**
- Styles the UI using SCSS.

9. **[webpack.config.js]**
- Configures Webpack for bundling.

10. **[package.json]**
- Lists dependencies and scripts for development.

---
## 🕒 How the Pomodoro Timer Works
- **Work Session**  The user works for 25 minutes (default).
- **Short Break** A 5-minute break follows each work session.
- **Repeating Cycles** This process repeats four times (work + short break).
- **Long Break** After four cycles, the user gets a 15-minute break.
- **Customization** Users can adjust work/break durations as needed.
--- 

## 🚀 Features & Functionalities

- **✅ Timer Functionality (timer.js)**:
 The timer counts down and updates the display dynamically.<br>
When a session ends, the app automatically switches between work and break modes.<br>
After four work sessions, a long break is triggered.<br>
Users can start, pause, and reset the timer at any time.<br>
- **✅ User Customization (settings.js)**:
 Users can set custom durations for work and break periods.<br>
Settings are saved using localStorage, ensuring preferences persist after a page refresh.<br>
- **✅ Task Management (tasks.js)**:
Users can add tasks to track what they are working on.<br>
Tasks are stored in localStorage and remain saved even after a reload.<br>
- **✅ Visual & Sound Notifications (ui.js & notification.js)**: 
A notification sound plays when a session ends.<br>
The background color changes dynamically based on work or break mode.<br>

---

## 🎨 Frontend UI & Styling (style.scss)

- **✨ Key UI Elements**
A minimalistic, centered timer with clear visibility.<br>
Start, Pause, and Reset buttons for easy control.<br>
Input fields for customizing work/break durations.<br>
Task management section for adding and tracking tasks.<br>

- **🎨 Styling Highlights**
Uses SCSS variables for color consistency and UI elements.<br>
Smooth background transitions for work and break modes.<br>
Responsive layout, ensuring functionality across all screen sizes.<br>
 

---

## ⚙️ Webpack Configuration (webpack.config.js)

- **The project is bundled using Webpack for optimization.**
- **🔧 Key Webpack Features**
HTML Processing – Uses html-loader to manage HTML files.<br>
SCSS & CSS Handling – Compiles SCSS to CSS via sass-loader.<br>
Asset Management – Images and sound files are copied to the dist folder.<br>
Live Server – webpack-dev-server enables auto-refresh on changes.<br>

---
  
  ## 🛠️ Running the Project
- **🔹 For Development**
npm install  # Install dependencies
npm start    # Start Webpack Dev Server
- **The app will open at http://localhost:8081/.**

- **🔹 For Production Build**
npm run build  # Generate optimized files in the 'dist' folder

---

## 📌 Conclusion
- **The Pomodoro Timer** is a productivity-boosting tool that helps users stay focused, track tasks, and maintain a balanced workflow. Built with JavaScript, SCSS, and Webpack, this project showcases modular code organization, localStorage usage, and Webpack bundling techniques. 🚀