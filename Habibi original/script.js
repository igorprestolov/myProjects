const humburger = document.querySelector('.header .humburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const header = document.querySelector('.header.container');
const title_appear = document.getElementById("test");
const menu_item = document.querySelectorAll('.header .nav-list ul a');

humburger.addEventListener('click', () => { 
    humburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 50) {
        header.style.backgroundColor = "rgba(38, 49, 61)";
    } else {
            header.style.backgroundColor = "transparent";
        };
        if(scroll_position > 100) {
            title_appear.style.opacity = "0";
        } else {
                title_appear.style.opacity = "1";
            }
});

menu_item.forEach(item=> {
    item.addEventListener('click', () => {
        humburger.classList.toggle('active');
       mobile_menu.classList.toggle('active');
    })
})

