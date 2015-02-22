(function() {
  'use strict';

  var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    webserver = require('gulp-webserver');

  var paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    index: 'app/index.html'
  };

  gulp.task('default', ['tempSetup', 'scripts', 'serve']);

  gulp.task('scripts', function() {
    gulp.src(mainBowerFiles())
      .pipe(gulp.dest(paths.tempVendor));
  });

  gulp.task('serve', function() {
    gulp.src(paths.temp)
      .pipe(webserver({
        open: true
      }));
  });

  gulp.task('tempSetup', function() {
    gulp.src(paths.index)
      .pipe(gulp.dest(paths.temp));
  });
}());
