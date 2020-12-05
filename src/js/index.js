"use strict";
console.clear();
console.log ( '%ccreated by VICTORY in Ukraine #MRPL', 'padding: 1px;background-color:#0A0B0D;color: #808080;');




// ---------------------- NOISE ---------------------- \\

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff717171;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 15));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;
        // wHeight = document.querySelector('html').getBoundingClientRect().height;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.querySelector('#noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

// noise();

// window.onload = function() {
//   noise();
// }


function offScroll() {
  document.querySelector('body').classList.toggle("preloader_srcoll-off");
}

window.onload = function() {
    let preload = document.querySelector('.preloader');

    preload.classList.toggle("preload_out");

    noise();
    setTimeout(offScroll, 1000);
}


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



Splitting();

  window.onload = function() {
    let preload = document.querySelector('.preloader');

    preload.classList.toggle("preload_out");
    noise();



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


  }













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




let checkbox = document.querySelector("#checkbox");

checkbox.addEventListener( 'change', function() {
  if(this.checked) {
    document.querySelector(".aside").classList.toggle('aside_checked');
    document.querySelector(".index-title__contacts_style").innerHTML = 'Закрыть';
  } else {
      document.querySelector(".aside").classList.toggle('aside_checked');
    document.querySelector(".index-title__contacts_style").innerHTML = 'Контакты';
    }
});








// ---------------------- THREEJS ---------------------- \\



// let canvas = document.querySelector(".object"),
//     renderer = new THREE.WebGLRenderer({canvas});

//  renderer.setPixelRatio(window.devicePixelRatio);
//  //Фон канваса
//  renderer.setClearColor(0x202020);



// const cameraData = {
//   fov: 75, // угол обзора
//   aspect: canvas.clientWidth / canvas.clientHeight, // соотрошение сторон, убираем деформацию фигур от изменения размеров окна+ добавить в функцию анимация для вызова перерисовки сцены для динамичного отображения
//   near: 0.1, // передний план
//   far: 10000 // задний план
// };


// const camera = new THREE.PerspectiveCamera(cameraData.fov, cameraData.aspect, cameraData.near, cameraData.far);


// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 60;


// const scene = new THREE.Scene();

// const lightData = {
//   colors: 0xDCDBDA,
//   intensity: 1
// }

// const light = new THREE.DirectionalLight(lightData.colors, lightData.intensity);

// light.position.set(0, 150, 550);
// scene.add(light);

// // const boxWidth = 1000;
// // const boxHeight = 1000;
// // const boxDepth = 1000;
// // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

// const geometry = new THREE.DodecahedronBufferGeometry(28, 2);

// // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

// let material = new THREE.MeshPhongMaterial({color: 0x404040, flatShading: true, wireframe: false});

// const cube = new THREE.Mesh(geometry, material);


// scene.add(cube);


// renderer.render(scene, camera);


// function render(time) {
// // cube.position.x = 40;
// // cube.position.y = 40;
// // cube.position.z = 40;
//   time *= 0.00025;  // конвертировать время в секунды

//   cube.rotation.x = time;
//   cube.rotation.y = time;

// camera.aspect = canvas.clientWidth / canvas.clientHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

//   renderer.render(scene, camera);

//   requestAnimationFrame(render);
// }
// requestAnimationFrame(render);





let canvas = document.querySelector(".object"),
    renderer = new THREE.WebGLRenderer({canvas});

 renderer.setPixelRatio(window.devicePixelRatio);
 //Фон канваса
 renderer.setClearColor(0x202020);


const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

document.addEventListener( 'mousemove', onMouseMove, false );
    // document.addEventListener( 'wheel', onMouseWheel, false );
    window.addEventListener( 'resize', onResize, false );

function onMouseMove( event ) {

  mouse.x = ( event.clientX - windowHalf.x );
  mouse.y = ( event.clientY - windowHalf.x );

}

// function onMouseWheel( event ) {

//   camera.position.z += event.deltaY * 0.1; // move camera along z-axis

// }

function onResize( event ) {

  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set( width / 2, height / 2 );

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );

}

 // document.body.appendChild (renderer.domElement);



const cameraData = {
  fov: 75, // угол обзора
  aspect: canvas.clientWidth / canvas.clientHeight, // соотрошение сторон, убираем деформацию фигур от изменения размеров окна+ добавить в функцию анимация для вызова перерисовки сцены для динамичного отображения
  near: 0.1, // передний план
  far: 10000 // задний план
};


const camera = new THREE.PerspectiveCamera(cameraData.fov, cameraData.aspect, cameraData.near, cameraData.far);

const controls = new THREE.OrbitControls(camera, canvas);



camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 60;

controls.update();

const scene = new THREE.Scene();

const lightData = {
  colors: 0xDCDBDA,
  intensity: 1
}

const light = new THREE.DirectionalLight(lightData.colors, lightData.intensity);

light.position.set(0, 150, 550);
scene.add(light);

// const boxWidth = 1000;
// const boxHeight = 1000;
// const boxDepth = 1000;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const geometry = new THREE.DodecahedronBufferGeometry(30, 3);

// const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

let material = new THREE.MeshPhongMaterial({color: 0x404040, flatShading: true, wireframe: false});

const cube = new THREE.Mesh(geometry, material);


scene.add(cube);


renderer.render(scene, camera);




function render(time) {
// cube.position.x = 40;
// cube.position.y = 40;
// cube.position.z = 40;
  time *= 0.000005;  // конвертировать время в секунды

  cube.rotation.x = time;
  cube.rotation.y = time;

camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  renderer.render(scene, camera);

  requestAnimationFrame(render);

  controls.update();

  target.x = ( 1 - mouse.x ) * 0.0009;
  target.y = ( 1 - mouse.y ) * 0.0009;

  // cube.rotation.x += 0.102 * ( target.y - camera.rotation.x );
  // cube.rotation.y += 0.102 * ( target.x - camera.rotation.y );
    cube.rotation.z += 0.02 * ( target.x - camera.rotation.y );

}
requestAnimationFrame(render);























// -------------------- BUTTON -------------------//
//
//
// utils
// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};

// Gets the mouse position
const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return { x : posx, y : posy }
};

const distance = (x1,y1,x2,y2) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
}

// Generate a random float.
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);


// btnCtrl
// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

class ButtonCtrl extends EventEmitter {
    constructor(el) {
        super();
        // DOM elements
        // el: main button
        // text: inner text element
        this.DOM = {el: el};
        this.DOM.text = this.DOM.el.querySelector('.button__text');
        this.DOM.textinner = this.DOM.el.querySelector('.button__text-inner');
        this.DOM.decoTop = this.DOM.el.querySelector('.button__deco--1');
        this.DOM.decoBottom = this.DOM.el.querySelector('.button__deco--2');
        // amounts the button will translate/scale
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1},
            tx2: {previous: 0, current: 0, amt: 0.05},
            ty2: {previous: 0, current: 0, amt: 0.05}
        };

        // button state (hover)
        this.state = {
            hover: false
        };
        // calculate size/position
        this.calculateSizePosition();
        // init events
        this.initEvents();
        // loop fn
        requestAnimationFrame(() => this.render());
    }
    calculateSizePosition() {
        // size/position
        this.rect = this.DOM.el.getBoundingClientRect();
        // the movement will take place when the distance from the mouse to the center of the button is lower than this value
        this.distanceToTrigger = this.rect.width*1.5;
    }
    initEvents() {
        this.onResize = () => this.calculateSizePosition();
        window.addEventListener('resize', this.onResize);
    }
    render() {
        // calculate the distance from the mouse to the center of the button
        const distanceMouseButton = distance(mousepos.x, mousepos.y, this.rect.left + this.rect.width/2, this.rect.top + this.rect.height/2);
        // new values for the translations and scale
        let x = 0;
        let y = 0;

        if ( distanceMouseButton < this.distanceToTrigger ) {
            if ( !this.state.hover ) {
                this.enter();
            }
            x = (mousepos.x - (this.rect.left + this.rect.width/2))*.3;
            y = (mousepos.y - (this.rect.top + this.rect.height/2))*.3;
        }
        else if ( this.state.hover ) {
            this.leave();
        }

        this.renderedStyles['tx'].current = this.renderedStyles['tx2'].current = x;
        this.renderedStyles['ty'].current = this.renderedStyles['ty2'].current = y;

        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.decoTop.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
        this.DOM.decoBottom.style.transform = `translate3d(${this.renderedStyles['tx2'].previous}px, ${this.renderedStyles['ty2'].previous}px, 0)`;
        this.DOM.text.style.transform = `translate3d(${this.renderedStyles['tx'].previous*0.5}px, ${this.renderedStyles['ty'].previous*0.5}px, 0)`;



        requestAnimationFrame(() => this.render());
    }
    enter() {
        this.emit('enter');
        this.state.hover = true;

        this.DOM.el.classList.add('button--hover');
        document.body.classList.add('active');

        gsap.killTweensOf(document.body);
        gsap.killTweensOf(this.DOM.textinner);

let targets = gsap.utils.toArray(this.DOM.textinner);
        gsap
        .timeline()
        // .to(document.body, 0.2, {backgroundColor: '#000'})
        .to(targets, 0.1, {
            ease: 'Power3.easeOut',
            opacity: 0,
            y: '-10%'
        }, 0)
        .to(targets, 0.2, {
            ease: 'Expo.easeOut',
            opacity: 1,
            startAt: {y: '20%'},
            y: '0%'
        });
    }
    leave() {
        this.emit('leave');
        this.state.hover = false;

        this.DOM.el.classList.remove('button--hover');
        document.body.classList.remove('active');

        gsap.killTweensOf(document.body);
        gsap.killTweensOf(this.DOM.textinner);

        // gsap
        // .timeline()
        // // .to(document.body, 0.2, {backgroundColor: bodyColor})
        // .to(this.DOM.textinner, 0.1, {
        //     ease: 'Power3.easeOut',
        //     opacity: 0,
        //     y: '10%'
        // }, 0)
        // .to(this.DOM.textinner, 0.2, {
        //     ease: 'Expo.easeOut',
        //     opacity: 1,
        //     startAt: {y: '-20%'},
        //     y: '0%'
        // });
    }
}


const button = new ButtonCtrl(document.querySelector('.button'));











