const menu = document.querySelector('nav');



// navbar toggle
const menu2 = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.dropdown');

menu2.addEventListener('click',function(){
    menu2.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})