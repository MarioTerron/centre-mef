'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './src',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp
		.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp
		.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'connect', 'watch']);
