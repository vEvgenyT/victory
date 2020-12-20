// GSDevTools.create();
function initAnimation() {
gsap.registerPlugin(ScrollTrigger);
Splitting();


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: .09
});


locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});





// const animationIn = function() {

  let section = document.querySelectorAll('[data-animation-section]');


  section.forEach(item => {


    const tl = gsap.timeline({
      paused: true,
      defaults: {
      ease: "power2.Out",
      }
    })
    .add('startPosition', .75)
    .from(item.querySelector('[data-animation-header]'), {
      y:"30%",
      opacity: 0,
      duration: 1,
      stagger: {
        each: .05
      }
    }, "startPosition")
    .from(item.querySelectorAll('[data-animation-subtitle] .char'), {
      opacity: 0,
      y: "80%",
      duration: .55,
      stagger: {
        each: .0030
      }
    }, "startPosition+=.4")
    .from(item.querySelectorAll('[data-animation-text] .char'), {
      duration: .45,
      y: "80%",
      opacity: 0,
      stagger: {
        each: .0015
     }
  }, "startPosition+=.65")
  .from(item.querySelectorAll('[data-animation-folio]'), {
    duration: 1,
    y: "25%",
    opacity: 0,
    stagger: {
      each: .1,
      from: "random"
    },
    ease: "back.inOut(1.7)"
  }, 0)
  .from(item.querySelector('[data-animation-canvas]'), {
    y:"-30%",
    opacity: 0,
    duration: 1.25,
    stagger: {
      each: .05
    }
  }, "startPosition+=1.5")

  ScrollTrigger.create({
    animation: tl,
    trigger: item,
    start: "top center-=100px",
  })
  })
// };




// const animationOut = function() {

//   let section = document.querySelectorAll('[data-animation-section]');


//   section.forEach(item => {

//   const tlOut = gsap.timeline({
//     defaults: {
//       paused: true,
//       ease: "power2.In",
//     }
//   })
//   .add('startPosition', 0)
//   .to(item.querySelectorAll('[data-animation-text] .char'), {
//     duration: .15,
//     y: "100%",
//     opacity: 0,
//     stagger: {
//       each: .0015,
//       from: "end"
//     }
//   }, 'startPosition')
//   .to(item.querySelector('[data-animation-header]'), {
//     y:"30%",
//     opacity: 0,
//     duration: .35,
//     stagger: {
//       each: .05
//     }
//   }, 'startPosition+=.5')
//   .to(item.querySelectorAll('[data-animation-subtitle] .char'), {
//     opacity: 0,
//     y: "80%",
//     duration: .25,
//     stagger: {
//       each: .0025,
//       from: "end"
//     }
//   }, 'startPosition+=.05')

//   ScrollTrigger.create({
//     animation: tlOut,
//     trigger: item,
//     start: "top center",
//   })

// })
// }


gsap.from(document.querySelector('[data-animation-canvas]'), {
    y:"-30%",
    opacity: 0,
    duration: 1.05,
    ease: "back.inOut(1.7)"
  }, .25)

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
