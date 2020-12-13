Splitting();
gsap.registerPlugin(ScrollTrigger);


let section = document.querySelectorAll('[data-animation-section]'),
    random = gsap.utils.random(10, 50, 10);

    // obj = gsap.utils.toArray(document.querySelectorAll('[data-animation-obj]')),
    // header = gsap.utils.toArray(document.querySelectorAll('[data-animation-header]')),
    // subtitle = gsap.utils.toArray(document.querySelectorAll('[data-animation-subtitle] .word > .char')),
    // text = gsap.utils.toArray(document.querySelectorAll('[data-animation-text] .word > .char'));

// header.forEach(item => {
//   gsap.from(item, {
//   y:"50%",
//   opacity: 0,
//   scaleX: 1.8,
//   duration: 1.4,
//   ease: "back.out(0.75)",
//   stagger: {
//     each: .35
//   },
//   scrollTrigger: {
//     trigger: item,
//     start: 'top center',
//   }
// })
// })
//
//
//
//


// gsap.registerEffect({
//   name: 'headerIn',
//   extendTimeline: true,
//   defaults: {duration: 1, ease: "back.out(0.75)"},

//   effect: (header, config) => {
//     let tl = gsap.timeline({})
//     // header.forEach(item => {
//       tl.from(header, {
//         y:"50%",
//         opacity: 0,
//         // scaleX: 1.8,
//         duration: config.duration,
//         ease: config.ease,
//         stagger: {
//           each: .0035
//         },
//         scrollTrigger: {
//           trigger: section[0],
//           start: 'top center',
//         }
//       })
//       return tl
//     // })
//   }
// })









section.forEach(item => {

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: "back.out(0.75)",
      duration: 1,
      y: "50%"
    }
  })
  .from(item.querySelector('[data-animation-header]'), {
    // y:random,
    opacity: 0,
  }, "+=.5")
  .from(item.querySelectorAll('[data-animation-subtitle] .char'), {
    // y:random,
    opacity: 0,
    stagger: {
      each: .0035
    }
  }, "-=1.5")
  .from(item.querySelectorAll('[data-animation-text] .char'), {
    // y:random,
    opacity: 0,
    stagger: {
      each: .0035
    }
  }, "+=2")

ScrollTrigger.create({
  animation: tl,
  trigger: item,
  start: "top center",
  end: "bottom top",
})

})








