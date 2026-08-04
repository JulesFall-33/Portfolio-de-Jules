const openMenu = () => {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')){
        document.querySelector("header .menu-icon").textContent = "✕";
    }
    else {
        document.querySelector("header .menu-icon").textContent = "☰";
    }
}

const liens = document.querySelectorAll(".header-menu a");

liens.forEach(lien => {
    lien.addEventListener("click", () => {
        const menu = document.querySelector(".header-menu");

        menu.classList.remove("active");
        document.querySelector("header .menu-icon").textContent = "☰";
    });
});