'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var del = require('del');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


var paths = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/**/*.scss',
    fonts: 'src/fonts/**/*.*',
    img: 'src/img/**/*.+(png|jpg|gif|svg)'
  },
  dist: {
    html: 'dist',
    css: 'dist/css',
    fonts: 'dist/fonts',
    img: 'dist/img',
  },
  watch: {
    html: 'src/**/*.html'
  },
  clean: './dist'
};


var serverConfig = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 9000,
  logPrefix: 'NASA',
  notify: false
};


gulp.task('bundleHtml', function() {
  return gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('bundleCss', function() {
  return gulp.src(paths.src.css)
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



gulp.task('bundleFonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dist.fonts));
});


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


gulp.task('webServer', function() {
  browserSync(serverConfig);
});


gulp.task('watch', function() {
  gulp.watch(paths.src.css, ['bundleCss']);
  gulp.watch(paths.watch.html, ['bundleHtml']);
  gulp.watch(paths.src.js, ['bundleJs']);
  gulp.watch(paths.src.fonts, ['bundleFonts']);
  gulp.watch(paths.src.img, ['bundleImg']);
});


gulp.task('clean:dist', function() {
  return del.sync(paths.clean);
});



gulp.task('start', ['clean:dist', 'bundleHtml', 'bundleCss', 'bundleFonts', 'bundleImg', 'webServer', 'watch']);
