const gulp      = require('gulp');
const babel     = require('babel-core/register');
const eslint    = require('gulp-eslint');
const jasmine   = require('gulp-jasmine');
const jshint    = require('gulp-jshint');

gulp.task('jshint', () => {
  gulp.src(['./spec/**/*.js', './src/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
});

gulp.task('eslint', () => {
  gulp.src(['./spec/**/*.js', './src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
  gulp.src('./spec/**/*.js')
  .pipe(jasmine());
});

gulp.task('lint', ['jshint', 'eslint']);

gulp.task('default', ['lint', 'test']);
