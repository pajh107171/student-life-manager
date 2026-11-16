
const form = document.getElementById("courseForm");
const list = document.getElementById("courseList");

let courses = JSON.parse(localStorage.getItem("courses") || "[]");

function showCourses() {
    list.innerHTML = "";

    if (courses.length === 0) {
        list.textContent = "目前還沒有課程，請新增課程！";
        return;
    }

    courses.forEach((course, index) => {
        const item = document.createElement("div");
        item.className = "item";

        const info = document.createElement("span");
        info.textContent = `${course.day} ${course.time}｜${course.name}｜${course.room || "未填教室"}`;

        const del = document.createElement("button");
        del.textContent = "刪除";
        del.addEventListener("click", () => {
            courses.splice(index, 1);
            save();
        });

        item.append(info, del);
        list.appendChild(item);
    });
}

function save() {
    localStorage.setItem("courses", JSON.stringify(courses));
    showCourses();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    courses.push({
        name: document.getElementById("courseName").value.trim(),
        day: document.getElementById("courseDay").value,
        time: document.getElementById("courseTime").value,
        room: document.getElementById("courseRoom").value.trim()
    });

    form.reset();
    save();
});

showCourses();
