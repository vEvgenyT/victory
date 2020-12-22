// GSDevTools.create();

function starterAnimation() {

  Splitting();


const tl = gsap.timeline()
.add('start', .8)
  .from(document.querySelector('[data-animation-canvas]'), {
    y:"-30%",
    opacity: 0,
    duration: 1,
    stagger: {
      each: .05
    }
  }, "start")
   .from(document.querySelector('[data-animation-start-header]'), {
      y:"30%",
      opacity: 0,
      duration: .85,
      stagger: {
        each: .05
      }
    }, "start+=.75")
    .from(document.querySelectorAll('[data-animation-start-subtitle] .char'), {
      opacity: 0,
      y: "80%",
      duration: .65,
      stagger: {
        each: .0030
      }
    }, "start+=1.05")
    .from(document.querySelectorAll('[data-animation-start-text] .char'), {
      duration: .5,
      y: "80%",
      opacity: 0,
      stagger: {
        each: .0015
     }
  }, "start+=1.15")
}

function initAnimation() {
gsap.registerPlugin(ScrollTrigger);
Splitting();


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: .05
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
    .add('startPosition', 0)
    .from(item.querySelector('[data-animation-header]'), {
      y:"30%",
      opacity: 0,
      duration: .75,
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
      duration: .55,
      y: "80%",
      opacity: 0,
      stagger: {
        each: .002
     }
  }, "startPosition+=.65")
  .from(item.querySelectorAll('[data-animation-folio]'), {
    duration: .85,
    y: "25%",
    opacity: 0,
    stagger: {
      each: .1,
      from: "random"
    },
    ease: "back.inOut(1.7)"
  }, 0)
  // .from(item.querySelector('[data-animation-canvas]'), {
  //   y:"-30%",
  //   opacity: 0,
  //   duration: 1.25,
  //   stagger: {
  //     each: .05
  //   }
  // }, "startPosition+=1.5")

  ScrollTrigger.create({
    animation: tl,
    trigger: item,
    start: "top center-=150px",
  })
  })



// gsap.from(document.querySelector('[data-animation-canvas]'), {
//     y:"-30%",
//     opacity: 0,
//     duration: 1.05,
//     ease: "back.inOut(1.7)"
//   }, .25)

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
