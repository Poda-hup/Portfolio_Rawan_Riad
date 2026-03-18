let menu = document .querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclik = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}
const typed = new Typed('.multiple-text', {
    strings: ['UI UX Designer','Web Designer'],
    typeSpeed: 80,
    backSpedd:80,
    backDelay:1200,
    loop:true,
  });