
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concatCss = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    uglifycss = require('gulp-uglifycss'),
    babel = require('gulp-babel'),
	jasmine = require('gulp-jasmine');


gulp.task('js', function () {
    gulp.src('js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
	    .pipe(babel({
		    presets: ['es2015']
	    }))
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(concat("main.min.js"))//
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest('js/dist'));

});
gulp.task('css', function () {
    return gulp.src('css/src/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("main.min.css"))
        .pipe(gulp.dest('css/dist'));
});
// gulp.task('testJasmine', () =>
// 	gulp.src('spec/test.js')
// 	// gulp-jasmine works on filepaths so you can't have any plugins before it
// 		.pipe(jasmine())
// );


gulp.task('default',['js','css']);
gulp.task('watch', function() {
    gulp.watch('css/src/*.css', ['css']);
    gulp.watch('js/src/*.js', ['js']);
});