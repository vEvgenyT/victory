Splitting();

// Переменные для анимации
let titleParagraph = gsap.utils.toArray(document.querySelectorAll('#titleParagraph .word > .char')),
    serviceItems = gsap.utils.toArray(document.querySelectorAll('#itemsService')),
    serviceParagraph = gsap.utils.toArray(document.querySelectorAll('#paragraph .word > .char')),
    serviceItem = gsap.utils.toArray(document.querySelectorAll('.index-service__item')),
    stageItem = gsap.utils.toArray(document.querySelectorAll('.index-stages__item')),
    stageParagraph = gsap.utils.toArray(document.querySelectorAll('#stageParagraph .word > .char'));
let title = gsap.utils.toArray(document.querySelectorAll('#title'));
let subtitle = gsap.utils.toArray(document.querySelectorAll('#subtitle .word > .char'));
let subtitletwo = gsap.utils.toArray(document.querySelectorAll('#subtitletwo .word > .char'));




// gsap.registerEffect({
//   name: 'titleIn',
//   extendTimeline: true,
//   effect: (targets, config) => {


//     let tl = gsap.timeline({});

//         tl.from(targets, {
//           y:'100%',
//           rotateX: -160,
//           stagger: {
//             each: 0.0035,
//           },
//           opacity: 0,
//           ease: 'Power3.easeOut',
//           scrollTrigger: {
//             trigger: targets,
//             start: "top center",
//           }
//      }, "+=1")

//     return tl
//   }
// });




gsap.registerEffect({
  name: 'titleIn',
  extendTimeline: true,
  effect: (targets, config) => {


    // let tl = gsap.timeline({});

    targets.forEach(targets => {
        // tl.add(
        gsap.from(targets, {
          y:"50%",
  opacity: 0,
  scaleX: 1.8,
  duration: 1.4,
  ease: "back.out(0.75)",
          scrollTrigger: {
            trigger: targets,
            start: "top center",
          }
        })
        // )
    })

    return targets
  }
});



gsap.registerEffect({
  name: 'textIn',
  extendTimeline: true,
  effect: (targets, config) => {


    // let tl = gsap.timeline({});

    config.forEach(config => {
        // tl.add(
        gsap.from(targets, {
          y:'100%',
          // rotateX: -160,
          duration: .55,
          stagger: {
            each: 0.0032,
          },
          opacity: 0,
          ease: 'Power3.easeOut',
          scrollTrigger: {
            trigger: config,
            start: "top center",
          }
        })
        // )
    })

    return targets
  }
});





let tl = gsap.timeline({
  // repeat: -1

})
.titleIn(title)
// .textIn(titleParagraph, title)
.textIn(subtitle, serviceItem)
.textIn(subtitletwo, stageItem)
.textIn(serviceParagraph, serviceItem)
.textIn(stageParagraph, stageItem)
