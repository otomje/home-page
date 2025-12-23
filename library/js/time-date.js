document.addEventListener("DOMContentLoaded", () => {

    function updateTimeAndDate() {
        const timeEls = document.querySelectorAll(".time");
        const dateEls = document.querySelectorAll(".date");

        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const timeText = `${hours}:${minutes}`;

        const months = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        const days = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

        const dateText = `${now.getDate()} ${months[now.getMonth()]}, ${days[now.getDay()]}`;

        timeEls.forEach(el => el.textContent = timeText);
        dateEls.forEach(el => el.textContent = dateText);
    }

    // первый рендер
    updateTimeAndDate();

    // сколько мс до следующей минуты
    const now = new Date();
    const msToNextMinute =
        (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // ждём границу минуты
    setTimeout(() => {
        updateTimeAndDate();

        // дальше ровно каждую минуту
        setInterval(updateTimeAndDate, 60000);

    }, msToNextMinute);

});