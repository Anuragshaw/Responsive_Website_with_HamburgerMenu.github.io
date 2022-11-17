burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav_list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{
    nav_list.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    
})