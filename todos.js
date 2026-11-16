
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const progress = document.getElementById("progress");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function showTodos() {
    list.innerHTML = "";

    const done = todos.filter(todo => todo.done).length;
    progress.textContent = `完成進度：${done} / ${todos.length} 項`;

    todos.forEach((todo, index) => {
        const item = document.createElement("div");
        item.className = "item";

        const label = document.createElement("label");
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.gap = "8px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.width = "auto";
        checkbox.style.margin = "0";
        checkbox.checked = todo.done;

        const text = document.createElement("span");
        text.textContent = todo.text;
        if (todo.done) text.className = "completed";

        checkbox.addEventListener("change", () => {
            todos[index].done = checkbox.checked;
            save();
        });

        label.append(checkbox, text);

        const del = document.createElement("button");
        del.textContent = "刪除";
        del.addEventListener("click", () => {
            todos.splice(index, 1);
            save();
        });

        item.append(label, del);
        list.appendChild(item);
    });
}

function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    todos.push({text, done: false});
    input.value = "";
    save();
});

showTodos();
