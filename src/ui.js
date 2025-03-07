export function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(secs).padStart(2, "0");
}

export function toggleMode(isWork) {
    document.body.style.backgroundColor = isWork ? "#f76c6c" : "#6cf7a4";
}
