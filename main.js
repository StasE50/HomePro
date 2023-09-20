// Получаем элементы с классами
const burgerBtn = document.querySelector('.header__burger-btn');
var links =document.querySelectorAll('.nav_ref');
const menu = document.querySelector('.menu');
const overlay=document.querySelector('.overlay');
const logo = document.querySelector('.logo');
const servicesTime = document.querySelector('.services_time');
// Обработчик события клика на бургере
burgerBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
overlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
 
});
overlay.addEventListener('click',()=>{
  menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
overlay.classList.toggle('active');
document.body.classList.toggle('menu-open');
});
links.forEach(function(link) {
  link.addEventListener('click', function() {
   if(window.innerWidth<=780){
overlay.classList.toggle('active');
menu.classList.toggle('active'); // Закрываем меню
    burgerBtn.classList.toggle('active'); // Меняем состояние бургера
    document.body.classList.toggle('menu-open');
   }
  
    
  });
});

// Обработчик события клика на кресте