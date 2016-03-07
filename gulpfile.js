var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/product/css'));
});

gulp.task('default', function() {
    gulp.watch("app/src/sass/*.scss", ["sass"]);
});
