var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    nodemon = require('gulp-nodemon'),
    source = require('vinyl-source-stream');

gulp.task('transpile', function() {
  return browserify({
    debug: true
  })
  .transform(babelify.configure({
    optional: ['runtime', 'es7.asyncFunctions']
  }))
  .require('./src/client/main.jsx', {entry: true})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/client/**/*'], ['transpile']);
});

gulp.task('development', ['transpile', 'watch'], function() {
  return nodemon({
    script: './src/server/server.js',
    env: {
      NODE_ENV: 'development'
    }
  });
});

gulp.task('default', ['development']);
