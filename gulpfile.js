"use strict";

const gulp = require("gulp");

const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

const sass = require("gulp-sass");

function watch() {
  gulp.watch("./templates/**/*.ejs", buildTemplates);
  gulp.watch("./css/scss/**/*.scss", buildCSS);
}

function buildTemplates() {
  return gulp
    .src("./templates/*.ejs")
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("."));
}

function buildCSS() {
  return gulp
    .src("./css/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

module.exports.watch = watch;
module.exports.buildTemplates = buildTemplates;
module.exports.buildCSS = buildCSS;