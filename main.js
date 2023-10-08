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
var element = document.querySelector('.logo1');
// Функция, которая будет проверять ширину экрана и скрывать элемент при необходимости
function hideElementOnResize() {
  if (window.innerWidth > 780) { // Если ширина экрана менее или равна 780 пикселей
    element.style.display = 'none';
  }
  else{
    element.style.display = 'block';
  } 
}
hideElementOnResize();
// Добавляем обработчик события изменения размера окна браузера
window.addEventListener("resize", hideElementOnResize);
// Обработчик события клика на кресте
document.querySelector(".call_btn").addEventListener("click", function() {
  window.location.href = "tel:+380977149897";
});
document.querySelector(".call-us-now").addEventListener("click", function() {
  window.location.href = "tel:+380977149897";
});
AOS.init();