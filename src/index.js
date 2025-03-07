import { startTimer, pauseTimer, resetTimer, setDurations } from "./timer.js";
import { updateTimerDisplay } from "./ui.js";
import { loadSettings, saveSettings } from "./settings.js";
import { addTask, loadTasks } from "./tasks.js";
import "./style.scss"; // استدعاء ملف style.scss الموجود في src

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();  //تقوم بتحميل الإعدادات 
    loadTasks();     //تقوم بتحميل المهام 

    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("pause").addEventListener("click", pauseTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
    document.getElementById("save-settings").addEventListener("click", setDurations);
    document.getElementById("add-task").addEventListener("click", addTask);
});
