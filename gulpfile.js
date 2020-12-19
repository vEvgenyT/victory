// $$\    $$\$$$$$$\  $$$$$$\$$$$$$$$\  $$$$$$\  $$$$$$$\$$\     $$\
// $$ |   $$ \_$$  _|$$  __$$\__$$  __|$$  __$$\ $$  __$$\$$\   $$  |
// $$ |   $$ | $$ |  $$ /  \__| $$ |   $$ /  $$ |$$ |  $$ \$$\ $$  /
// \$$\  $$  | $$ |  $$ |       $$ |   $$ |  $$ |$$$$$$$  |\$$$$  /
//  \$$\$$  /  $$ |  $$ |       $$ |   $$ |  $$ |$$  __$$<  \$$  /
//   \$$$  /   $$ |  $$ |  $$\  $$ |   $$ |  $$ |$$ |  $$ |  $$ |
// $$\\$  /  $$$$$$\ \$$$$$$  | $$ |    $$$$$$  |$$ |  $$ |  $$ |
// \__|\_/   \______| \______/  \__|    \______/ \__|  \__|  \__|


var gulp = require('gulp'),
    browserSync = require('browser-sync'), //автообновление браузера при изменении файлов
    order = require("gulp-order"), //определение порядка конкантенации файлов
    concat = require('gulp-concat'), //объединение нескольких файлов в один
    csscomb = require('gulp-csscomb'), //сортировка стилей по алфавиту + форматирование
    prefixer = require('gulp-autoprefixer'), //добавляет вендроные префиксы
    postcss = require('gulp-postcss'),
    uncss = require('postcss-uncss'), // удаление неиспользуемых стилей
    gcmq = require('gulp-group-css-media-queries'), //сортировка медиа запросов
    cssnano = require('cssnano'), // сжатие css файлов
    clear = require('del'), // очистка папок
    shorthand = require('gulp-shorthand'), //сокращение стилей для которых доступен shorthand
    imagemin = require('gulp-imagemin'), // минификация изображений
    imageminWebp = require('imagemin-webp'),//конвертация изображений в новый формат
    imageminOptipng = require('imagemin-optipng'), //минификация png
    tinypng = require('gulp-tinypng-extended'), //продвинутый минификатор
    imageminSvgo = require('imagemin-svgo'),
    htmlmin = require('gulp-htmlmin'),
    extReplace = require("gulp-ext-replace");
const gcc = require('google-closure-compiler').gulp(); // оптимизация и сжатие JS кода


var folder = [
  './src/css',
  './src/js',
  './src/img',
  './src/fonts',
  './src/sound',
  './bundles/css',
  './bundles/js',
  './bundles/img',
  './bundles/fonts',
  './bundles/sound'
];

var path = {
    src: {
        baseCss: [
          'src/css/**/normalize.css',
          'src/css/**/locomotive.css',
          'src/css/**/fonts.css',
          'src/css/**/color.css',
          'src/css/**/style.css',
          // 'src/css/**/style.css',
        ],
        indexCss: [
          'src/**/index/**/header/**/*.css',
          'src/**/index/**/title/**/*.css',
          'src/**/index/**/portfolio/**/*.css',
          'src/**/index/**/service/**/*.css',
          'src/**/index/**/mission/**/*.css',
          'src/**/index/**/stages/**/*.css',
          'src/**/index/**/footer/**/*.css',
          'src/**/about/**/*.css',
        ],
        indexHtml: [
          'src/**/head.html',
          'src/**/header.html',
          'src/**/index/**/title.html',
          'src/**/portfolio.html',
          'src/**/service.html',
          // 'src/**/mission.html',
          'src/**/stages.html',
          'src/**/footer.html',
        ],
        aboutHtml: [
          'src/**/head.html',
          'src/**/header.html',
          'src/**/about/**/title.html',
          'src/**/footer.html',
        ],
        js: [
          // 'src/**/*.js',
          'src/**/js/**/base.js',
          'src/**/js/**/locomotive.js',
          // 'src/**/js/**/buzz.js',
          'src/**/js/**/noise.js',
          'src/**/js/**/preloader.js',
          'src/**/js/**/offscroll.js',
          'src/**/js/**/three.js',
          // 'src/**/js/**/checkbox.js',
          'src/**/js/**/sinewave.js',
          // 'src/**/js/**/btn.js',
          'src/**/js/**/scrollanimation.js',
        ],
        img: 'src/img/**/*.*',
        imgWebpIn: [
          'src/img/**/*.png',
          'src/img/**/*.jpg',
          '!src/img/**/favicon/**/*.*',
        ],
        imgSvgIn: [
          'src/img/**/*.svg',
        ],
        imgPngIn: [
          'src/img/**/*.png',
        ],
        imgJpgIn: [
          'src/img/**/*.jpg',
        ],
        fonts: 'src/fonts/**/*.*',
        sound: 'src/sound/**/*.*'
    },
    bundles: {
        html: 'bundles/',
        css: 'bundles/css/',
        js: 'bundles/js/',
        img: 'bundles/img/',
        fonts: 'bundles/fonts/',
        sound: 'bundles/sound/'
    },
    watch: {
        html: 'src/**/*.html',
        css: 'src/**/*.css',
        js: 'src/**/*.js',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        sound: 'src/sound/**/*.*',
    },
    clean: 'bundles/**/*.*'
};



// Deploy //////////////////////////////////////////////////////////
// Создание каталога папок/файлов будущего проекта

gulp.task('/deploy', async function() {
        for (let i = 0; i < folder.length; i++) {
          gulp.src('*.*', {read: false})
            .pipe(gulp.dest(folder[i]))
        };
  gulp.src('./victory/*.css')
  .pipe(gulp.dest('./src/css'))
  gulp.src('./victory/index.js')
  .pipe(gulp.dest('./src/js'))
  gulp.src('./victory/*.html')
  .pipe(gulp.dest('./src'))
  gulp.src('./victory/csscomb.json')
  .pipe(gulp.dest('./node_modules/gulp-csscomb/node_modules/csscomb/config'))
  gulp.src('./victory/csscomb.json')
  .pipe(gulp.dest('./node_modules/csscomb/config'))
  gulp.src('./victory/postcss.config.js')
  .pipe(gulp.dest('./'));

  setTimeout(function() {return clear.sync('victory/')}, 200)
});

// -= ******************************************************** =- \\


// DEL /////////////////////////////////////////////////////////////


gulp.task('/del', function() {
  return clear(['bundles/**/*.*']);
});

gulp.task('/delhtml', function() {
  return clear(['bundles/**/*.html']);
});

gulp.task('/delcss', function() {
  return clear(['bundles/css/**/*.*']);
});

gulp.task('/deljs', function() {
  return clear(['bundles/js/**/*.*']);
});

gulp.task('/delimg', function() {
  return clear(['bundles/img/**/*.*']);
});

gulp.task('/delfonts', function() {
  return clear(['bundles/fonts/**/*.*']);
});

gulp.task('/deltest', function() {
  return clear(['bundles/test/**/*.*']);
});




// HTML ////////////////////////////////////////////////////////////

gulp.task('/indexHtml', ['/delhtml'], async function() {
return gulp.src(path.src.indexHtml)
  // .pipe(htmlmin({ collapseWhitespace: false }))
  // .pipe(htmlmin({ removeComments: false }))
  .pipe(concat('index.html'))
  .pipe(gulp.dest(path.bundles.html));
});

gulp.task('/aboutHtml', ['/delhtml'], async function() {
return gulp.src(path.src.aboutHtml)
  // .pipe(htmlmin({ collapseWhitespace: false }))
  // .pipe(htmlmin({ removeComments: false }))
  .pipe(concat('about.html'))
  .pipe(gulp.dest(path.bundles.html));
});

// -= ******************************************************** =- \\



// CSS /////////////////////////////////////////////////////////////

gulp.task('/baseCss', ['/delcss'], function() {
    var processors = [
    cssnano(),
  ];
  return gulp.src(path.src.baseCss)
    .pipe(concat('style.css'))
    .pipe(shorthand())
    .pipe(prefixer())
    .pipe(csscomb())
    .pipe(gcmq())
    // .pipe(postcss(processors))
    .pipe(gulp.dest(path.bundles.css));
});

gulp.task('/indexCss', function() {
    var processors = [
    cssnano(),
  ];
  return gulp.src(path.src.indexCss)
    .pipe(concat('index.css'))
    .pipe(shorthand())
    .pipe(prefixer())
    .pipe(csscomb())
    .pipe(gcmq())
    // .pipe(postcss(processors))
    .pipe(gulp.dest(path.bundles.css));
});


gulp.task('/aboutCss', function() {
    var processors = [
    cssnano(),
  ];
  return gulp.src(path.src.indexCss)
    .pipe(concat('about.css'))
    .pipe(shorthand())
    .pipe(prefixer())
    .pipe(csscomb())
    .pipe(gcmq())
    // .pipe(postcss(processors))
    .pipe(gulp.dest(path.bundles.css));
});


// -= ******************************************************** =- \\



// JS //////////////////////////////////////////////////////////////

// gulp.task('/js', async function() {
//     return gulp.src(path.src.js)
//     .pipe(order([
//     "**/*jquery*.js",
//     "**/*lib*.js",
//     "**/*module*.js",
//     "**/*.js"
//   ], { base: './' }))
//     .pipe(concat('index.js'))
//     .pipe(gcc({
//           compilation_level: 'ADVANCED',
//           warning_level: 'VERBOSE',
//           language_in: 'ECMASCRIPT6_STRICT',
//           language_out: 'ECMASCRIPT5_STRICT',
//           output_wrapper: '(function(){\n%output%\n}).call(this)',
//           js_output_file: 'index.min.js'
//         }, {
//           platform: ['native', 'java', 'javascript']
//         }))
//     .pipe(gulp.dest(path.bundles.js));
// });


gulp.task('/js', ['/deljs'], function() {
    return gulp.src(path.src.js)
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(path.bundles.js));
});


// -= ******************************************************** =- \\



// FONT ////////////////////////////////////////////////////////////

gulp.task('/fonts', async function() {
    return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.bundles.fonts));
});

gulp.task('/sound', async function() {
    return gulp.src(path.src.sound)
    .pipe(gulp.dest(path.bundles.sound));
});

// -= ******************************************************** =- \\
gulp.task('/manifest', async function() {
    return gulp.src(['src/**/victory.webmanifest', 'src/**/browserconfig.xml', 'src/**/favicon.ico'])
    .pipe(gulp.dest(path.bundles.html));
});


// IMAGE ///////////////////////////////////////////////////////////

gulp.task('/imgCopy', async function() {
    return gulp.src(path.src.img)
    .pipe(gulp.dest(path.bundles.img));
});

gulp.task('/img', ['/delimg'], async function() {
    return gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.bundles.img));
});

gulp.task('/webp', async function() {
    return gulp.src(path.src.img)
    .pipe(imagemin([
      imageminWebp({
        quality: 90
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(path.bundles.img));
});


// -= ******************************************************** =- \\


gulp.task('/imgJpg', ['/delimg'], async function() {
    return gulp.src(path.src.imgJpgIn)
    .pipe(imagemin())
    .pipe(gulp.dest(path.bundles.img));
});

gulp.task('/imgPng', async function() {
    return gulp.src(path.src.imgPngIn)
    .pipe(tinypng({
      key: '8YhnmY39SNgbQ1W2J9DMQswsbBP4K9hy',
    }))
    .pipe(gulp.dest(path.bundles.img));
});

gulp.task('/imgWebp', async function() {
    return gulp.src(path.src.imgWebpIn)
    .pipe(imagemin([
      imageminWebp({
        quality: 70
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(path.bundles.img));
});

gulp.task('/imgSvg', async function() {
    return gulp.src(path.src.imgSvgIn)
    .pipe(imagemin([
      imageminSvgo({
        removeViewBox: false
      })
    ]))
    .pipe(gulp.dest(path.bundles.img));
});


gulp.task('/imgProduction', ['/imgJpg', '/imgPng', '/imgWebp', '/imgSvg']);

////////////////////////////////////////////
///
///
///////////////////////////////////////////
gulp.task('/browser-sync', async function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'bundles/' // Директория для сервера - app
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        browser: "google chrome",
       notify: false // Отключаем уведомления
    });
});

gulp.task('/run', ['/browser-sync'], function() {
    gulp.watch(path.watch.html, ['/html'])
    gulp.watch(path.watch.html, browserSync.reload);
    gulp.watch(path.watch.css, ['/css'])
    gulp.watch(path.watch.css, browserSync.reload);
    gulp.watch(path.watch.js, ['/js'])
    gulp.watch(path.watch.js, browserSync.reload);
    gulp.watch(path.watch.fonts, ['/fonts'])
    gulp.watch(path.watch.fonts, browserSync.reload);
    gulp.watch(path.watch.img, ['/imgCopy'])
    gulp.watch(path.watch.img, browserSync.reload);
    gulp.watch(path.watch.img, ['/manifest'])
    gulp.watch(path.watch.img, browserSync.reload);
});

gulp.task('/runIndex', ['/browser-sync'], function() {
    gulp.watch(path.watch.html, ['/indexHtml'])
    gulp.watch(path.watch.html, browserSync.reload);
    gulp.watch(path.watch.css, ['/baseCss', '/indexCss'])
    gulp.watch(path.watch.css, browserSync.reload);
    gulp.watch(path.watch.js, ['/js'])
    gulp.watch(path.watch.js, browserSync.reload);
    gulp.watch(path.watch.fonts, ['/fonts'])
    gulp.watch(path.watch.fonts, browserSync.reload);
    gulp.watch(path.watch.img, ['/imgCopy'])
    gulp.watch(path.watch.img, browserSync.reload);
    gulp.watch(path.watch.sound, ['/sound'])
    gulp.watch(path.watch.sound, browserSync.reload);
    gulp.watch(path.watch.img, ['/manifest'])
    gulp.watch(path.watch.img, browserSync.reload);
});

gulp.task('/runAbout', ['/browser-sync'], function() {
    gulp.watch(path.watch.html, ['/aboutHtml'])
    gulp.watch(path.watch.html, browserSync.reload);
    gulp.watch(path.watch.css, ['/baseCss', '/indexCss'])
    gulp.watch(path.watch.css, browserSync.reload);
    gulp.watch(path.watch.js, ['/js'])
    gulp.watch(path.watch.js, browserSync.reload);
    gulp.watch(path.watch.fonts, ['/fonts'])
    gulp.watch(path.watch.fonts, browserSync.reload);
    gulp.watch(path.watch.img, ['/imgCopy'])
    gulp.watch(path.watch.img, browserSync.reload);
    gulp.watch(path.watch.sound, ['/sound'])
    gulp.watch(path.watch.sound, browserSync.reload);
    gulp.watch(path.watch.img, ['/manifest'])
    gulp.watch(path.watch.img, browserSync.reload);
});

// -= ******************************************************** =- \\


gulp.task('/compile', ['/css', '/js', '/html', '/img', '/fonts']);
gulp.task('/interpret', ['/css', '/js', '/html', '/img', '/fonts', '/run']);

gulp.task('/index', ['/runIndex', '/indexHtml', '/js', '/baseCss', '/indexCss', '/fonts', '/sound', '/about', '/manifest']);

gulp.task('/about', ['/runAbout', '/aboutHtml', '/js', '/baseCss', '/aboutCss', '/imgCopy', '/fonts']);


// HELP ///////////////////////////////////////////////////////////

gulp.task('/help', function(){
  console.log('\n/deploy - создание файлов и папок проекта (src для хранения исходников, bundles для загрузки на сервер).\n/html - копирует все файлы html из каталога src => bundles(за исключением тех, у которых в названии присутствует "_").\n/css - конкатенирует, расставляет префиксы, форматирует, оптимизирует и минифицирует файл.\n/js - конкатенирует и оптимизирует все js файлы при помощи google closure compiler.\n/fonts - переносит содержимое папки src/fonts в bundles.\n/img - переносит содержимое папки src/img в bundles.\n/compile - выполняет команды /css, /js, /html, /img, /fonts.\n/interpret - выполняет команды на лету/css, /js, /html, /img, /fonts и отображает в браузере (live reload при изменении любого файла из папки src)');
});

// -= ******************************************************** =- \\
