import './style.css'


const menu_btn = document.getElementById("menu_open");
const overlay = document.getElementById("overlay");

const menu = document.getElementById("menu");
menu_btn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    const isOpen = !menu.classList.contains("hidden");

    menu_btn.src = isOpen
        ? "/public/icon-close.svg"
        : "/public/icon-menu.svg";
});