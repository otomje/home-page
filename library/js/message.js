document.addEventListener("DOMContentLoaded", () => {
    const connectionEl = document.getElementById("internet-connection");

    if (!connectionEl) return;

    function updateConnectionStatus() {
        if (navigator.onLine) {
            connectionEl.classList.remove("active");
        } else {
            connectionEl.classList.add("active");
        }
    }

    // Проверка при загрузке
    updateConnectionStatus();

    // События потери / восстановления интернета
    window.addEventListener("offline", updateConnectionStatus);
    window.addEventListener("online", updateConnectionStatus);
});