var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/product/css'));
});

gulp.task('html', function(){
    gulp.src('app/src/**/*.html')
      .pipe(htmlhint())
      .pipe(htmlhint.reporter())
      .pipe(gulp.dest('app/product/'));
});

gulp.task('fail', function(){
    gulp.src('app/src/**/*.html')
      .pipe(htmlhint())
      .pipe(htmlhint.failReporter())
      .pipe(gulp.dest('app/product/'));
});

gulp.task('default', function() {
    gulp.watch('app/src/sass/*.scss', ['sass']);
    gulp.watch('app/src/**/*.html', ['html']);
});
