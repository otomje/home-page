document.addEventListener("DOMContentLoaded", () => {
    const hvBlock = document.querySelector('.hv');
    let inactiveTimer;

    // Функція для активації класу після 1 хвилини без активності
    function setInactive() {
        hvBlock.classList.add('active');
    }

    // Скидаємо таймер і видаляємо клас active при активності користувача
    function resetTimer() {
        hvBlock.classList.remove('active');
        clearTimeout(inactiveTimer);
        inactiveTimer = setTimeout(setInactive, 120000); // 60000 мс = 1 хвилина
    }

    // Запускаємо таймер при завантаженні сторінки
    resetTimer();

    // Відслідковуємо активність миші і клавіатури
    ['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetTimer);
    });

    // При кліку по hv блоку видаляємо active і знову запускаємо таймер
    hvBlock.addEventListener('click', () => {
        hvBlock.classList.remove('active');
        resetTimer();
    });
});