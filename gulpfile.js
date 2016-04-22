const gulp = require('gulp');
const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');

const rimraf = require('gulp-rimraf');
const ignore = require('gulp-ignore');

const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

const paths = {
  srcJs: 'client/**/*.js',
  srcJsx: 'client/main.js',
  srcCss: 'source/scss/*',

  dist: 'public/',
  distJs: 'public/js',
  distCss: 'public/css',
};

gulp.task('browserify', () => {
  const bundler = browserify({
    entries: [paths.srcJsx],
    transform: [babelify],
    debug: process.env.NODE_ENV !== 'production',
    cache: {}, packageCache: {}, fullPaths: true,
  });

  return bundler
    .bundle()
    .pipe(source(paths.srcJsx))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(paths.distJs));
});

gulp.task('clean', () => (
  gulp.src('./public/*', { read: false })
    .pipe(ignore('index.html'))
    .pipe(rimraf())
));

gulp.task('start', () => {
  nodemon({
    script: 'server.js',
    ignore: ['./client', './public', 'gulpfile.js'],
    ext: 'js html',
    nodeArgs: ['--use-strict'],
  });
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcCss, ['sass']);
  gulp.watch(paths.srcJs, ['browserify']);
});

gulp.task('sass', () => (
  gulp
    .src(paths.srcCss)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(rename((path) => {
      const newPath = path;
      newPath.dirname = 'css';

      return newPath;
    }))
    .pipe(gulp.dest(paths.dist))
));

gulp.task('watch', cb => {
  runSequence('clean', ['browserify', 'sass'], ['watchTask', 'start'], cb);
});

