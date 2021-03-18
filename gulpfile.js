const { series } = require('gulp');

function defaultTask(cb) {
    // place code for your default task here    
    cb();
  }
  
  exports.default = defaultTask
  
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
