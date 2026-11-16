
const today = document.getElementById("today");

if (today) {
    today.textContent = new Date().toLocaleDateString(
        "zh-TW",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        }
    );
}
