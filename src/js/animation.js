// -------------------- ANIMATION -------------------//

Splitting();

  // window.onload = function() {
    // let preload = document.querySelector('.preloader');

    // preload.classList.toggle("preload_out");
    // noise();



// Получил массив для заголовков
let subtitle = gsap.utils.toArray(document.querySelectorAll('#subtitle .word > .char, whitespace')),

// Получил массив для основного текста
    paragraph = gsap.utils.toArray(document.querySelectorAll('#paragraph .word > .char')),

// Получил массив для объектов
    obj = gsap.utils.toArray(document.querySelectorAll('#obj')),
    nav = gsap.utils.toArray(document.querySelectorAll('#nav .word > .char')),
    title = gsap.utils.toArray(document.querySelectorAll('#title'));



// Переменные тайминга
const timelineSettings = {
    staggerValue: 0.01,
    charsDuration: 0.5
};

let tl = gsap.timeline({
    // repeat: -1,
    scrollTrigger: {
      trigger: subtitle,
      start: "top bottom",
    }
})

// Анимация объектов
.from( obj, {
  y:"150%",
  opacity: 0,
  duration: 1.8,
  stagger: {
      each: .35,
    },
  ease: "elastic.out(1, 1.5)"
}, "+=.75")
.to ( obj , {
  y: 0,
  opacity: 1,
})

// Анимация заголовков
.from( title, {
  y:"50%",
  opacity: 0,
  scaleX: 1.8,
  duration: 1.4,
  ease: "back.out(0.75)"
}, "-=1.55")
.to ( title, {
  y: 0,
  opacity: 1,
})


// Анимация подзаголовков
  .from( subtitle, {
    y:'100%',
    stagger: timelineSettings.staggerValue,
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=.8")
  .to( subtitle, {
    y:0,
    stagger: timelineSettings.staggerValue,
    opacity: 1,
  })

// Анимация основного текста
.from( paragraph, {
    y:'100%',
      rotateX: -160,
    stagger: {
      each: 0.0035,
    },
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=.75")
  .to( paragraph, {
    y:0,
    opacity: 1,
  })



// Анимация ссылок
.from( nav, {
    y:'-100%',
  rotateX: "-180",
  duration: 0.75,
    stagger: {
      each: 0.01,
    },
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1.65")
  .to( nav, {
    y:0,
    rotateX: 0,
    stagger: {
      each: 0.01,
    },
    opacity: 1,
  })


  // }

