var gulp = require('gulp'),
    zip = require('gulp-zip'),
    clean = require('gulp-clean')
    imagemin = require('gulp-imagemin'),
    merge = require('merge-stream'),
    pack = require('./package.json');

var publicFolderName = "./.public";
var zipName = "./" + pack.name + ".zip";

gulp.task('process_icons', function() {
  var resImages = gulp.src(['./src/icons/**/*'])
    .pipe(imagemin())
    .pipe(gulp.dest(publicFolderName + '/icons'));
  return merge(resImages);
});

gulp.task('process_splashes', function() {
  var resImages = gulp.src(['./src/splashes/**/*'])
    .pipe(imagemin())
    .pipe(gulp.dest(publicFolderName + '/splashes'));
  return merge(resImages);
});

gulp.task('copy_static', function() {
  var files = gulp.src(['./src/config.xml', './src/icon.png', './src/index.html'])
    .pipe(gulp.dest(publicFolderName));
  return merge(files);
});

gulp.task('clean', function() {
  return gulp.src([publicFolderName])
    .pipe(clean());
});

gulp.task('compress_build', ['process_icons', 'process_splashes', 'copy_static'], function() {
  return gulp.src(publicFolderName + '/**/*')
    .pipe(zip(zipName))
    .pipe(gulp.dest('./'));
});

gulp.task('clean_zip', ['compress_build'], function() {
  return gulp.src([publicFolderName])
    .pipe(clean());
});

gulp.task('zip', ['clean_zip']);
gulp.task('clean', ['clean']);
gulp.task('static', ['process_icons', 'process_splashes', 'copy_static']);
gulp.task('default', ['zip']);
