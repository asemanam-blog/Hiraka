const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
  

gulp.task('compass', function() {
  return gulp.src('src/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function() {
  gulp.watch('src/css/**/*.scss', gulp.series('compass'));
});
