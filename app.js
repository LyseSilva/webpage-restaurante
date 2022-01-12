let menu = document.getElementById("bars");
let navBar = document.querySelector(".navBar");

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let dots = document.querySelector('.dot');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

window.addEventListener('scroll', ()=> {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active')
});

document.querySelector("#search-icon").onclick = () =>{
    document.querySelector("#search-form").classList.toggle('active');
}


document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove('active');
}

var slideIndex = 1;
showSlides(slideIndex);

nextBtn.addEventListener('click', ()=>{
  showSlides(slideIndex += 1);
});
prevBtn.addEventListener('click', ()=>{
  showSlides(slideIndex-=1);
});

dots.addEventListener('change', ()=>{
  showSlides(slideIndex);
});




function showSlides(index) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "flex";
   dots[slideIndex-1].className += " active";
}

setInterval(() =>{
   showSlides(slideIndex += 1)

}, 8000)        
            