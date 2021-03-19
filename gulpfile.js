const { series } = require('gulp');

function defaultTask(cb) {
    // place code for your default task here    
    cb();
  }
  
  exports.default = defaultTask
  

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('htmlmin', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
 
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src(['js/*.js', 'js/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
});