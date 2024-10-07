"use strict";

// navbar toggle in mobile

const /*{NodeElement}*/ $navbar = document.querySelector("[data-navbar]");
const /*{NodeElement}*/ $navToggler =
    document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => {
  $navbar.classList.toggle("active");
  $navToggler.classList.toggle("active");
});

// Header scroll state

const /*{Node Element}*/ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});




/*================
Add to favorite button toggle
=================*/ 

const /*{Nodelist}*/ $toggleBtns = document.querySelectorAll("[data-toggle-btn]") 


$toggleBtns.forEach($toggleBtn =>{
  $toggleBtn.addEventListener('click', ()=>{
    $toggleBtn.classList.toggle('active')
  })
})