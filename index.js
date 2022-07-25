const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const overlay = document.querySelector('body')
 
// nav mobile
console.log(hamburger);
hamburger.addEventListener('click', ()=>{
    console.log('hello');
    nav.style.display = ' block';
    overlay.style.backgroundColor = 'rgba(88, 83, 82, 0.28)'
    close.style.display = 'block';
    hamburger.style.display = 'none';
});

close.addEventListener('click', ()=>{
    nav.style.display = ' none';
    close.style.display = 'none';
    hamburger.style.display = 'block';
    overlay.style.backgroundColor = 'white'
})

// slider
let slideNumber = 0;
displaySlides();


function displaySlides() {
  let i;
  let slides = document.getElementsByClassName("mini-sections");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideNumber++;
  if (slideNumber > slides.length) {slideNumber = 1} 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block";
  dots[slideNumber-1].className += " active";
  setTimeout(displaySlides, 2000);
}