document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("notes-text");
    if (!textarea) return;

    const STORAGE_KEY = "notes-text";
    textarea.value = localStorage.getItem(STORAGE_KEY) || "";

    let saveInterval = null;

    function saveText() {
        localStorage.setItem(STORAGE_KEY, textarea.value);
        // console.log("Сохранили текст");
    }

    textarea.addEventListener("focus", () => {
        // Запускаем интервал сохранения раз в 1 секунду
        if (!saveInterval) {
            saveInterval = setInterval(saveText, 1000);
        }
    });

    textarea.addEventListener("blur", () => {
        // Останавливаем интервал при потере фокуса
        if (saveInterval) {
            clearInterval(saveInterval);
            saveInterval = null;
            saveText(); // Сохраняем последний раз при уходе с поля
        }
    });
});