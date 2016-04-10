var gulp = require('gulp')

var stylus = require('gulp-stylus')
var concat = require('gulp-concat-css')
var nib = require('nib')
var minify = require('gulp-minify-css')

var browserify = require('browserify')
var ejsTransform = require('ejs-browserify-transformer')

var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

process.env.NODE_PATH = '.'

gulp.task('build-styl', function () {
  return gulp
    .src('./src/index.styl')
    .pipe(stylus({ 
      use: nib(), 
      'include css': true 
    }))
    .pipe(concat('build.css'))
    //.pipe(minify())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('copy-font-dir', function() {
  return gulp
    .src(['./src/assets/font-awesome-4.5.0/fonts/*'])
    .pipe(gulp.dest('./public/fonts'));
})

gulp.task('build-js', function () {
  return browserify({
      entries: './src/index.js',
    })
    .transform(ejsTransform.create())
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', ['build'], function () {
  
  gulp.watch(
    ['src/*.js', 'src/lib/**/*.js', 'src/lib/**/*.ejs'], 
    ['build-js']
  )
  
  gulp.watch(
    ['src/*.styl', 'src/lib/**/*.styl'], 
    ['build-styl']
  )
})

gulp.task('build', ['copy-font-dir', 'build-styl', 'build-js'])