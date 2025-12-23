document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-text");

    function doSearch(openInNewTab = false) {
        const raw = searchInput.value;
        const query = raw.trim();
        if (!query) return;

        // === КОМАНДА !link ===
        if (query.startsWith("!link ")) {
            let link = query.slice(6).trim(); // усе після "!link "

            if (!link) return;

            // якщо користувач не вказав протокол — додаємо https://
            if (!/^https?:\/\//i.test(link)) {
                link = "https://" + link;
            }

            // відкриваємо в новій вкладці або в тій же залежно від openInNewTab
            window.open(link, openInNewTab ? "_blank" : "_self");
            return;
        }

        // === ЗВИЧАЙНИЙ GOOGLE-ПОШУК ===
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.open(url, openInNewTab ? "_blank" : "_self");
    }

    // Клік по кнопці
    searchButton.addEventListener("click", () => doSearch());

    // Клавіші в інпуті
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (e.ctrlKey) {
                // Ctrl + Enter - нова вкладка
                doSearch(true);
            } else if (e.shiftKey) {
                // Shift + Backspace - очищає інпут (як ти писав)
                // Але Backspace це інша клавіша, тут Shift + Enter, тому якщо хочеш Shift + Backspace - треба окремий обробник
            } else {
                // просто Enter - у тій же вкладці
                doSearch(false);
            }
        } else if (e.key === "Backspace" && e.shiftKey) {
            // Очищуємо поле при Shift + Backspace
            e.preventDefault();
            searchInput.value = "";
        }
    });
});