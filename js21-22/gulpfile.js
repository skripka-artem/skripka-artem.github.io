'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync');
var del = require('del');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var eslint = require('eslint');
var jasmine = require('jasmine');
// обьект путей нашего проекта
var paths = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    fonts: 'src/fonts/**/*.*',
    img: 'src/img/**/*.+(png|jpg|gif|svg)'
  },
  dist: {
    html: 'dist',
    css: 'dist/css',
    js: 'dist/js',
    fonts: 'dist/fonts',
    img: 'dist/img',
  },
  watch: {
    html: 'src/**/*.html'
  },
  clean: './dist'
};

// конфигурация сервера
var serverConfig = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 9000,
  logPrefix: 'NASA',
  notify: false
};

// собираем html используя rigger
gulp.task('bundleHtml', function() {
  return gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// собираем sass
gulp.task('bundleCss', function() {
  return gulp.src(paths.src.css)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// собирем js
gulp.task('bundleJs', function() {
  return gulp.src(paths.src.js)
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['env']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// копируем файлы фонтов в dist
gulp.task('bundleFonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dist.fonts));
});

// собираем картинки
gulp.task('bundleImg', function() {
  return gulp.src(paths.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// поднимаем browser-sync веб сервер
gulp.task('webServer', function() {
  browserSync(serverConfig);
});

// смотрим за изменениями в файлах
gulp.task('watch', function() {
  gulp.watch(paths.src.css, ['bundleCss']);
  gulp.watch(paths.watch.html, ['bundleHtml']);
  gulp.watch(paths.src.js, ['bundleJs']);
  gulp.watch(paths.src.fonts, ['bundleFonts']);
  gulp.watch(paths.src.img, ['bundleImg']);
});

// Cleaning build dir
gulp.task('clean:dist', function() {
  return del.sync(paths.clean);
});


// таск который запускается по npm run start из package.json, включает в себя все таски в определенном порядке
gulp.task('start', ['clean:dist', 'bundleHtml', 'bundleCss', 'bundleJs', 'bundleFonts', 'bundleImg', 'webServer', 'watch']);
