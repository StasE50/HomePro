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
//sider
const sliderContainer = document.querySelector('.reviews-sliders');
 const slider = document.querySelectorAll('.reviews-slider');
const prevButton=document.getElementById('button-prev');
const nextButton=document.getElementById('button-next');
let position=0,
dotIndex=0;
let ind=slider.length-1;
const nextSlide=()=>{
  const slider = document.querySelectorAll('.reviews-slider');
  if(position>=slider[0].offsetWidth*ind){
    position=0;
    dotIndex=0;
     }
     else{
        position+=slider[0].offsetWidth;
        dotIndex++;
     }
  sliderContainer.style.left=-position + 'px';
  thisSlide(dotIndex);
}
nextButton.addEventListener("click",nextSlide);
 function prevSlide(){
  const slider = document.querySelectorAll('.reviews-slider');
    if(position>0){
    position-=slider[0].offsetWidth; 
    dotIndex--;
    }else{
      position=slider[0].offsetWidth*ind;
      dotIndex=ind;
    }
  sliderContainer.style.left=-position + 'px' ;
  thisSlide(dotIndex);
  }
prevButton.addEventListener("click",prevSlide )

const dots=document.querySelectorAll('.dot');
const thisSlide=(index)=>{
for(let dot of dots){
dot.classList.remove('active2');
} 
dots[index].classList.add('active2');
}
dots.forEach((dot,index)=>{
  dot.addEventListener('click',()=>{
    const slider = document.querySelectorAll('.reviews-slider');
position=slider[0].offsetWidth*index;
sliderContainer.style.left=-position + 'px' ;
dotIndex=index;  
thisSlide(index);
  });
});
//sider end
const sliderWrap=document.querySelector('.slider-wrap')
sliderWrap.addEventListener('touchstart',handleTouchStar,false);
sliderWrap.addEventListener('touchmove',handleTouchMove,false);
let x1=null;
let y1=null;
function handleTouchStar(event){
x1=event.touches[0].clientX;
y1=event.touches[0].clientY;

}
function handleTouchMove(event){
  if (!x1||!y1){
return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff=x2-x1;
  let yDiff=y2-y1;
  if(Math.abs(xDiff)>Math.abs(yDiff)){
if(xDiff>0){
 //move right
  prevSlide();

}
else
{
  // move left
  nextSlide();
}
  }
  x1=null;
  y1=null;
}
//swiper





//end swiper
// Добавляем обработчик события изменения размера окна браузера
window.addEventListener("resize", hideElementOnResize);
// Обработчик события клика на кресте
document.querySelector(".call_btn").addEventListener("click", function() {
  window.location.href = "tel:+380977149897";
});
document.querySelector(".call-us-now").addEventListener("click", function() {
  window.location.href = "tel:+380977149897";
});
hideElementOnResize();
AOS.init();

