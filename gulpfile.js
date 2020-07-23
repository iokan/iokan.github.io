'use strict';

const gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch');


// Clean css
gulp.task('cleancss', function () {
    return gulp.src('css/', {read: false})
        .pipe(clean())
});

// Compilation css
gulp.task('sass', function (){
    return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({
            overrideBrowserslist: ['last 5 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
});

// Watch
gulp.task('watch', function (){
    gulp.watch('sass/*.scss', gulp.series('sass'));
});
