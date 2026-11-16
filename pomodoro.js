
const timer = document.getElementById("timer");
const mode = document.getElementById("mode");

let seconds = 25 * 60;
let interval = null;
let isBreak = false;

function showTime() {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    timer.textContent =
        String(min).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0");
}

function startTimer() {
    if (interval !== null) return;

    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            showTime();
        } else {
            clearInterval(interval);
            interval = null;

            isBreak = !isBreak;
            seconds = isBreak ? 5 * 60 : 25 * 60;

            mode.textContent = isBreak
                ? "☕ 休息時間"
                : "📚 讀書時間";

            alert(isBreak
                ? "讀書完成！休息 5 分鐘吧！"
                : "休息結束！準備開始讀書！");
            showTime();
        }
    }, 1000);
}

document.getElementById("start").addEventListener("click", startTimer);

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    isBreak = false;
    seconds = 25 * 60;
    mode.textContent = "📚 讀書時間";
    showTime();
});

showTime();
