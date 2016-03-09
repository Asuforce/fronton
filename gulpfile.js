var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('app/product/css'))
      .pipe(browserSync.stream());
});

gulp.task('html', function(){
    gulp.src('app/src/**/*.html')
      .pipe(htmlhint())
      .pipe(htmlhint.reporter())
      .pipe(gulp.dest('app/product/'))
      .pipe(browserSync.stream());
});

gulp.task('fail', function(){
    gulp.src('app/src/**/*.html')
      .pipe(htmlhint())
      .pipe(htmlhint.failReporter())
      .pipe(gulp.dest('app/product/'));
});

gulp.task('create', function() {
    // TODO:productディレクトリ内を削除して再ビルドするタスク
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./app/product/"
        }
    });

    gulp.watch('app/src/sass/*.scss', ['sass']);
    gulp.watch('app/src/**/*.html', ['html']);
});
