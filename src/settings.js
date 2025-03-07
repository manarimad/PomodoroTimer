export function saveSettings() {
    const workDuration = document.getElementById("work-duration").value;
    const breakDuration = document.getElementById("break-duration").value;
    localStorage.setItem("workDuration", workDuration);
    localStorage.setItem("breakDuration", breakDuration);
}

export function loadSettings() {
    document.getElementById("work-duration").value = localStorage.getItem("workDuration") || 25;
    document.getElementById("break-duration").value = localStorage.getItem("breakDuration") || 5;
}
