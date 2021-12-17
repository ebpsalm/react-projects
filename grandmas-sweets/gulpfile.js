const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
gulp.task('css', () => {
  return gulp
    .src('./src/index.css')
    .pipe(
      prefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('./src/dist/css'));
});
