document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme-selector");
    const closeButton = document.getElementById("close-btn");
    const infoBanner = document.getElementById("info-banner");

    themeSelector.addEventListener("change", (event) => {
        document.documentElement.setAttribute("data-theme", event.target.value);
    });

    closeButton.addEventListener("click", () => {
        infoBanner.style.display = 'none';
    });
});
