//burger-menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__container__burger');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', () => {
      body.style.overflow = 'hidden';
      menu.style.display = 'block';
      overlay.style.display = 'block';
  
      setTimeout(() => {
        menu.style.opacity = '1';
        overlay.style.opacity = '1';
      }, 200)
    })
  
    overlay.addEventListener('click', () => {
      body.style.overflow = 'scroll';
      menu.style.opacity = '0';
      overlay.style.opacity = '0';
  
      setTimeout(() => {
        menu.style.display = 'none';
        overlay.style.display = 'none';
      }, 200)
    })
  })


  //animations
  
  function animateElements(selector, options = {}) {
    gsap.from(selector, { ...options, ease: "back" }); 
  }

  animateElements(".header", {y:-50, opacity: 0, duration:1, delay: 2.3 });

  animateElements(".esteemTherapy__container__vector", {x:-50, rotation:90, opacity: 0, duration: 1, delay: 2 });
  animateElements(".esteemTherapy__container__info__subtitle", {y:-80, rotation:100, opacity: 0, duration: 1, delay: .5 });
  animateElements(".esteemTherapy__container__info__title", {x: -50, opacity: 0, duration: 1,  delay: .8});
  animateElements(".esteemTherapy__container__info__text", {x:-50, opacity: 0, duration: 1,  delay: 1 });
  animateElements(".esteemTherapy__container__info__button", {y:50, opacity: 0, duration: 1,  delay: 1.3 });
  animateElements(".esteemTherapy__container__img", {x:50, opacity: 0, duration: 1,  delay: .6 });


  ScrollTrigger.create({
    trigger: ".transformYourLife__container",
    start: 'top 80%',
    end: 'bottom 100%',
    onEnter: () => {
        animateElements(".transformYourLife__container__subtitle", { opacity: 0, duration: 1.5,  delay: .3 });
        animateElements(".transformYourLife__container__title", { opacity: 0, duration: 1.5,  delay: .6 });
        animateElements(".transformYourLife__container__text", { opacity: 0, duration: 1.5,  delay: 1 });
      
        animateElements(".transformYourLife__container__cards__card", {y: 50, stagger: .3,  opacity: 0, duration: 1,  delay: 1.6 });
    },
  })


