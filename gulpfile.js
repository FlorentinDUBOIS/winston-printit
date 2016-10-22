let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['babel']);
});

gulp.task('babel', function() {
  return gulp
    .src(['src/**/*.js'])
    .pipe(plugins.plumber())
    .pipe(plugins.babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  return gulp
    .src(['src/**/*.js'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});
