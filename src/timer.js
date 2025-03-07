import { updateTimerDisplay, toggleMode } from "./ui.js";
import { playNotification } from "./notifications.js";

let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let longBreakDuration = 15 * 60;
let cycles = 0;
let timeLeft = workDuration;
let isWorkSession = true;
let timerInterval = null;

export function setDurations() {
    const workInput = parseInt(document.getElementById("work-duration").value) * 60;
    const breakInput = parseInt(document.getElementById("break-duration").value) * 60;
    
    if (workInput > 0 && breakInput > 0) {
        workDuration = workInput;
        breakDuration = breakInput;
        timeLeft = workDuration;
        updateTimerDisplay(timeLeft);
    }
}

export function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft);
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                playNotification();
                cycles++;

                if (isWorkSession) {
                    timeLeft = cycles % 4 === 0 ? longBreakDuration : breakDuration;
                } else {
                    timeLeft = workDuration;
                }

                isWorkSession = !isWorkSession;
                toggleMode(isWorkSession);
                startTimer();
            }
        }, 1000);
    }
}

export function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

export function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = isWorkSession ? workDuration : breakDuration;
    updateTimerDisplay(timeLeft);
}
