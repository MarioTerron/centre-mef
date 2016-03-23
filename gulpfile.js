'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./**/*.*'], ['reload']);
});

gulp.task('default', ['sass', 'connect', 'watch']);
