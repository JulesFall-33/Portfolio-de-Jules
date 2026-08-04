const openMenu = () => {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')){
        document.querySelector("header .icon").innerHTML = "🗙"
    }
    else {
        document.querySelector("header .icon").innerHTML = "⫶☰"
    }
}