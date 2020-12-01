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

window.onload = function() {
  noise();
}







// ---------------------- SCROLL ANIMATION ---------------------- \\

Splitting();

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

// Анимация заголовков
.from( title, {
  y:"100%",
  opacity: 0,
  duration: 1,
  ease: "back.out(1)"
})
.to ( title, {
  y: 0,
  opacity: 1,
  // ease: "elastic.out(1, 0.75)"
})


// Анимация подзаголовков
  .from( subtitle, {
    y:'100%',
    stagger: timelineSettings.staggerValue,
    opacity: 0,
    // rotateX: -360,
    ease: 'Power3.easeOut'
  }, "-=.75")
  .to( subtitle, {
    y:0,
    stagger: timelineSettings.staggerValue,
    opacity: 1,
    // rotateX: 0,
  })

// Анимация основного текста
.from( paragraph, {
    y:'100%',
    stagger: {
      each: 0.002,
    },
    opacity: 0,
    ease: 'Power3.easeOut'
  }, "-=1.65")
  .to( paragraph, {
    y:0,
    stagger: {
      each: 0.002,
    },
    opacity: 1,
  })

// Анимация объектов
.from( obj, {
  y:"100%",
  opacity: 0,
  duration: 0.75,
  ease: "elastic.out(1, 1)"
}, "-=1.5")
.to ( obj , {
  y: 0,
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



let canvas = document.querySelector(".object"),
    renderer = new THREE.WebGLRenderer({canvas});

 renderer.setPixelRatio(window.devicePixelRatio);
 //Фон канваса
 renderer.setClearColor(0x202020);



const cameraData = {
  fov: 75, // угол обзора
  aspect: canvas.clientWidth / canvas.clientHeight, // соотрошение сторон, убираем деформацию фигур от изменения размеров окна+ добавить в функцию анимация для вызова перерисовки сцены для динамичного отображения
  near: 0.1, // передний план
  far: 10000 // задний план
};


const camera = new THREE.PerspectiveCamera(cameraData.fov, cameraData.aspect, cameraData.near, cameraData.far);


camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 60;


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

const geometry = new THREE.DodecahedronBufferGeometry(28, 2);

// const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

let material = new THREE.MeshPhongMaterial({color: 0x404040, flatShading: true, wireframe: false});

const cube = new THREE.Mesh(geometry, material);


scene.add(cube);


renderer.render(scene, camera);


function render(time) {
// cube.position.x = 40;
// cube.position.y = 40;
// cube.position.z = 40;
  time *= 0.00025;  // конвертировать время в секунды

  cube.rotation.x = time;
  cube.rotation.y = time;

camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);














