let navbarShow = document.querySelector('#three_line_div a');
let navbar = document.querySelector('.inner_down_header');

navbarShow.addEventListener('click', navShowFunc);

function navShowFunc() { 
  navbar.classList.add('navbar_show')
};