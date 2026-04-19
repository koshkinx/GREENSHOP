document.addEventListener('DOMContentLoaded', function(){

 const navIcon = document.querySelector('.header__nav-burger');
 const header = document.querySelector('.header');

 navIcon.addEventListener('click', function(){
   header.classList.toggle('active');
 });

});