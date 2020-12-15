const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: .05
});


locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});



document.querySelector('body').classList.remove("preloader_srcoll-off");
  // init();



Splitting();
gsap.registerPlugin(ScrollTrigger);


// function init() {
  let section = document.querySelectorAll('[data-animation-section]');


  section.forEach(item => {

  const tl = gsap.timeline({
    paused: true,
    // repeat: -1,
    defaults: {
      ease: "power2.Out",
    }
  })
  .add('startPosition', .3)
  .from(item.querySelector('[data-animation-header]'), {
    y:"30%",
    opacity: 0,
    duration: 1.05,
    stagger: {
      each: .05
    }
  }, "startPosition")
  .from(item.querySelectorAll('[data-animation-subtitle] .char'), {
    // y:random,
    opacity: 0,
    y: "80%",
    duration: .75,
    stagger: {
      each: .0045
    }
  }, "startPosition+=.4")
  .from(item.querySelectorAll('[data-animation-text] .char'), {
    duration: .55,
    y: "80%",
    opacity: 0,
    stagger: {
      each: .0025
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
  // markers: true
})

})

// }

// GSDevTools.create();




gsap.from(document.querySelector('[data-animation-btn]'), {
  opacity: 0,
  y: "-30%",
  ease: "elastic.out(1, 0.75)",
  duration: 1.5,
  scrollTrigger: {
    trigger: document.querySelector('[data-animation-btn]'),
    start: "bottom bottom+300%"
  }
})





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();








// _---------------------------_

// let out = document.querySelector('#js-btn_out');

// out.addEventListener('click', function() {
//   console.log('clicked');

//    section.forEach(item => {

//   const tl = gsap.timeline({
//     // paused: true,
//     defaults: {
//       ease: "power2.In",
//     }
//   })
//   .to(item.querySelectorAll('[data-animation-text] .char'), {
//     duration: .15,
//     y: "100%",
//     opacity: 0,
//     stagger: {
//       each: .0015,
//       from: "end"
//     }
//   },0)
//   .to(item.querySelector('[data-animation-header]'), {
//     y:"30%",
//     opacity: 0,
//     duration: .35,
//     stagger: {
//       each: .05
//     }
//   },.05)
// .to(item.querySelectorAll('[data-animation-subtitle] .char'), {
//     // y:random,
//     opacity: 0,
//     y: "80%",
//     duration: .25,
//     stagger: {
//       each: .0025,
//       from: "end"
//     }
//   },.05)
// })


// })
