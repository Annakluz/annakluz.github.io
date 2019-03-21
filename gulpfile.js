'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');


let rutas = {
    rutaJS: "js/*.js",
    rutaSCSS: "scss/styles.scss",
    rutaHTML:"*.html",
}

//Prepare CSS document

gulp.task('sass', function () {
    return gulp.src(rutas.rutaSCSS)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
  });


//Watch documents

gulp.task('serve', ['sass'], function() {
    
        browserSync.init({
            server: "*/"
        });
    
        gulp.watch("**/*.scss", ['sass']);
        gulp.watch("*.html").on('change', browserSync.reload);
    });

gulp.task('default', ['serve']);