const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  /* need to change this file below*/
  return src('styles/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  /**need to change this file below */
  watch(['styles/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)