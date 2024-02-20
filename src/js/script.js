const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mainMenu = document.getElementById("main-menu");


menuBtn.addEventListener('click', () => {
    mainMenu.classList.remove("hidden");
});

closeBtn.addEventListener('click', () => {
    mainMenu.classList.add("hidden");
});

