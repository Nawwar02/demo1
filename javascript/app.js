
//Navbar hamburgare
const navSlide = () => {
   const hamburgare  = document.querySelector('.hamburgare'),
   navList = document.querySelector('.nav-list'),
   navElement = document.querySelectorAll('.nav-element');

   hamburgare.addEventListener('click', () => {   
       
    //Toggling
    navList.classList.toggle('nav-active'); 
       
    //Animating
    navElement.forEach((link, index) => {
       if (link.style.animation) {
        link.style.animation=''       
    }else {
        link.style.animation=`navLinkFade 0.5s ease forwards ${index /10 + 1}s`    
       }
    });
    
    //hamburgare
    hamburgare.classList.toggle('toggle');
    
   });
}

navSlide();

//SLIDE SHOW


const slideShow = document.querySelectorAll('.slide'),
    nextBtn = document.querySelector('#arrow-right'),
    prevBtn = document.querySelector('#arrow-left');

const nextSlide = () => {
  const currentSlide = document.querySelector('.current');
  currentSlide.classList.remove('current');

  if (currentSlide.nextElementSibling) {
  currentSlide.nextElementSibling.classList.add('current');
  } else { 
    slideShow[0].classList.add('current');
  }

  setTimeout(() => currentSlide.classList.remove('current'));
};

const prevSlide = () => {
  const currentSlide = document.querySelector('.current');
  currentSlide.classList.remove('current');

  if (currentSlide.previousElementSibling)  {
    currentSlide.previousElementSibling.classList.add('current');
  } else {
    slideShow[slideShow.length - 1].classList.add('current');
  }

  setTimeout(() => currentSlide.classList.remove('current'));
};

// Button events
nextBtn.addEventListener('click', e => {
  nextSlide();
});

prevBtn.addEventListener('click', e => {
  prevSlide();
});
