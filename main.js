const ham_open = document.querySelector('.open');
const ham_close = document.querySelector('.close');
const nav_list = document.querySelector('#nav-mobile');

ham_open.addEventListener('click',()=>{
    nav_list.classList.toggle('toggle');
})

ham_close.addEventListener('click',()=>{
    nav_list.classList.toggle('toggle');
})