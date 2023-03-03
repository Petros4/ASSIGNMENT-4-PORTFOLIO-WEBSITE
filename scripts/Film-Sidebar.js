let testBool = false;
const menuAnimationOpen = [
    {
        transform: 'translateX(350px)'
    }
]
const menuAnimationClose = [
    {
        transform: 'translateX(0px)'
    }
]

menuTiming = {
    duration: 400,
    fill: 'forwards'
}

const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
button.innerHTML="&#8250";
menu.addEventListener('click', ()=>{
    if (!testBool) {
    menu.animate(menuAnimationOpen, menuTiming);
    button.innerHTML="&#8249";
    testBool = true;
}
else {
    menu.animate(menuAnimationClose, menuTiming);
    button.innerHTML="&#8250";
    testBool = false;
    }
})

