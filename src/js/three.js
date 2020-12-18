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


// ORBIT CONTROLS
//
// const controls = new THREE.OrbitControls(camera, canvas);
// controls = new THREE.OrbitControls( camera );
// to disable zoom
// controls.enableZoom = false;
// to disable rotation
// controls.enableRotate = false;
// to disable pan
// controls.enablePan = false;


camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 60;

// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sound/background.mp3', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( true );
  sound.setVolume( 0.5 );
  sound.play();
  sound.autoplay = true;
});

// controls.update(); обновление положения камеры

const scene = new THREE.Scene();

const lightData = {
  // colors: 0xDCDBDA,
  colors: 0x858585,
  intensity: 1.35,
}

const light = new THREE.DirectionalLight(lightData.colors, lightData.intensity);

light.position.set(0, 150, 550);
scene.add(light);


// const boxWidth = 1000;
// const boxHeight = 1000;
// const boxDepth = 1000;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const geometry = new THREE.DodecahedronBufferGeometry(28, 3);

// const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

let material = new THREE.MeshPhongMaterial({color: 0x404040, flatShading: true, wireframe: false});

const cube = new THREE.Mesh(geometry, material);


scene.add(cube);

renderer.render(scene, camera);




function render(time) {

  time *= 0.000005;  // конвертировать время в секунды

  // cube.rotation.x = time;
  // cube.rotation.y = time;

camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  renderer.render(scene, camera);

  requestAnimationFrame(render);

  // controls.update(); обновление положения камеры

  target.x = ( 1 - mouse.x ) * 0.0009;
  target.y = ( 1 - mouse.y ) * 0.0009;

  // cube.rotation.x += 0.102 * ( target.y - camera.rotation.x );
  // cube.rotation.y += 0.102 * ( target.x - camera.rotation.y );
    cube.rotation.z += 0.012 * ( target.x - camera.rotation.y );
    // light.position.x += 0.02 * ( target.x - camera.rotation.y );

}
requestAnimationFrame(render);
