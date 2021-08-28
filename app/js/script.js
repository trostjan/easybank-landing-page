const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const mobile_menu = document.querySelector('#mobile-menu');
const body = document.querySelector('body');

btnHamburger.addEventListener("click", function(){
    console.log('open hamburger');
    if(header.classList.contains("open")){
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        mobile_menu.classList.remove("fade-in")
        mobile_menu.classList.add("fade-out");
        body.classList.remove("no-scroll");
    }else{
        header.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        mobile_menu.classList.remove("fade-out")
        mobile_menu.classList.add("fade-in");
        body.classList.add("no-scroll");
    }
})

