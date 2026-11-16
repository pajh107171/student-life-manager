
const foods = [
    "🍜 牛肉麵",
    "🍱 日式便當",
    "🍛 咖哩飯",
    "🍝 義大利麵",
    "🍔 漢堡",
    "🥟 水餃",
    "🍗 雞腿飯",
    "🍣 壽司",
    "🍲 火鍋",
    "🥪 三明治",
    "🍳 蛋炒飯",
    "🍜 鍋燒意麵"
];

document.getElementById("chooseFood").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    document.getElementById("foodResult").textContent =
        foods[randomIndex];
});
