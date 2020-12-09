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
    folio = gsap.utils.toArray(document.querySelectorAll('#folio')),
    title = gsap.utils.toArray(document.querySelectorAll('#title'));



// Переменные тайминга
const timelineSettings = {
    staggerValue: 0.01,
    charsDuration: 0.5
};

let tl = gsap.timeline({
    // repeat: -1,
    scrollTrigger: {
      trigger: title,
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
  //
  //
  //
  // Анимация портфолио
  let rnd = gsap.utils.random(0, 30, 5);
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: folio,
      // pin: "#pinned",
      // scrub: true,
      start: "top center",
      // end: "+=120%",

      // onUpdate: ({progress}) => timeline.progress() < progress ? timeline.progress(progress) : null
    },
})

// Анимация картинок
.from( folio, {
  y:rnd,
  scale: 0,
  opacity: 0,
  duration: 2.5,
  stagger: {
      each: .15,
      from: "top",
    },
  ease: "elastic.out(1, 1.25)"
});




let serviceTitle = gsap.utils.toArray(document.querySelectorAll('#serviceTitle'));
let serviceSubtitle = gsap.utils.toArray(document.querySelectorAll('#serviceSubtitle .word > .char, whitespace')),

// Получил массив для основного текста
    serviceParagraph = gsap.utils.toArray(document.querySelectorAll('#serviceParagraph .word > .char'));

let service = gsap.timeline({
    // repeat: -1,
    scrollTrigger: {
      trigger: serviceTitle,
      start: "top center",
      // markers: true
    }
})
.from( serviceTitle, {
  y:"50%",
  opacity: 0,
  scaleX: 1.8,
  duration: 1.4,
  ease: "back.out(0.75)"
})
.to ( serviceTitle, {
  y: 0,
  opacity: 1,
})
// Анимация подзаголовков
  .from( serviceSubtitle, {
    y:'100%',
    stagger: timelineSettings.staggerValue,
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1")
  .to( serviceSubtitle, {
    y:0,
    stagger: timelineSettings.staggerValue,
    opacity: 1,
  })

// Анимация основного текста
.from( serviceParagraph, {
    y:'100%',
      rotateX: -160,
    stagger: {
      each: 0.0035,
    },
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1.75")
  .to( serviceParagraph, {
    y:0,
    opacity: 1,
  });







  let stagesTitle = gsap.utils.toArray(document.querySelectorAll('#stagesTitle'));
let stagesSubtitle = gsap.utils.toArray(document.querySelectorAll('#stagesSubtitle .word > .char, whitespace')),

// Получил массив для основного текста
    stagesParagraph = gsap.utils.toArray(document.querySelectorAll('#stagesParagraph .word > .char'));

let stages = gsap.timeline({
    // repeat: -1,
    scrollTrigger: {
      trigger: stagesTitle,
      start: "top center",
      // markers: true
    }
})
.from( stagesTitle, {
  y:"50%",
  opacity: 0,
  scaleX: 1.8,
  duration: 1.4,
  ease: "back.out(0.75)"
})
.to ( stagesTitle, {
  y: 0,
  opacity: 1,
})
// Анимация подзаголовков
  .from( stagesSubtitle, {
    y:'100%',
    stagger: timelineSettings.staggerValue,
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1")
  .to( stagesSubtitle, {
    y:0,
    stagger: timelineSettings.staggerValue,
    opacity: 1,
  })

// Анимация основного текста
.from( stagesParagraph, {
    y:'100%',
      rotateX: -160,
    stagger: {
      each: 0.0035,
    },
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1.75")
  .to( stagesParagraph, {
    y:0,
    opacity: 1,
  })
