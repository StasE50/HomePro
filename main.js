// Получаем элементы с классами
const burgerBtn = document.querySelector('.header__burger-btn');
var links =document.querySelectorAll('.nav_ref');
const menu = document.querySelector('.menu');

// Обработчик события клика на бургере
burgerBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});
links.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('active'); // Закрываем меню
    burgerBtn.classList.remove('active'); // Меняем состояние бургера
    document.body.classList.remove('menu-open');
  });
});

// Обработчик события клика на кресте