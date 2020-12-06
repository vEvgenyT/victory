










// ---------------------- SCROLL ANIMATION ---------------------- \\

// Splitting();

// // Получил массив для заголовков
// let subtitle = gsap.utils.toArray(document.querySelectorAll('#subtitle .word > .char, whitespace')),

// // Получил массив для основного текста
//     paragraph = gsap.utils.toArray(document.querySelectorAll('#paragraph .word > .char')),

// // Получил массив для объектов
//     obj = gsap.utils.toArray(document.querySelectorAll('#obj')),
//     nav = gsap.utils.toArray(document.querySelectorAll('#nav .word > .char')),
//     title = gsap.utils.toArray(document.querySelectorAll('#title'));



// // Переменные тайминга
// const timelineSettings = {
//     staggerValue: 0.01,
//     charsDuration: 0.5
// };

// let tl = gsap.timeline({
//     // repeat: -1,
//     scrollTrigger: {
//       trigger: subtitle,
//       start: "top bottom",
//     }
// })

// // Анимация заголовков
// .from( title, {
//   y:"100%",
//   opacity: 0,
//   duration: 1,
//   ease: "back.out(1)"
// })
// .to ( title, {
//   y: 0,
//   opacity: 1,
//   // ease: "elastic.out(1, 0.75)"
// })


// // Анимация подзаголовков
//   .from( subtitle, {
//     y:'100%',
//     stagger: timelineSettings.staggerValue,
//     opacity: 0,
//     // rotateX: -360,
//     ease: 'Power3.easeOut'
//   }, "-=.75")
//   .to( subtitle, {
//     y:0,
//     stagger: timelineSettings.staggerValue,
//     opacity: 1,
//     // rotateX: 0,
//   })

// // Анимация основного текста
// .from( paragraph, {
//     y:'100%',
//     stagger: {
//       each: 0.002,
//     },
//     opacity: 0,
//     ease: 'Power3.easeOut'
//   }, "-=1.65")
//   .to( paragraph, {
//     y:0,
//     stagger: {
//       each: 0.002,
//     },
//     opacity: 1,
//   })

// // Анимация объектов
// .from( obj, {
//   y:"100%",
//   opacity: 0,
//   duration: 0.75,
//   ease: "elastic.out(1, 1)"
// }, "-=1.5")
// .to ( obj , {
//   y: 0,
//   opacity: 1,
// })

// // Анимация ссылок
// .from( nav, {
//     y:'-100%',
//   rotateX: "-180",
//   duration: 0.75,
//     stagger: {
//       each: 0.01,
//     },
//     opacity: 0,
//     ease: 'Power3.easeOut'
//   }, "-=1.65")
//   .to( nav, {
//     y:0,
//     rotateX: 0,
//     stagger: {
//       each: 0.01,
//     },
//     opacity: 1,
//   })















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















































