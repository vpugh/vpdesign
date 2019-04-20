const concat = require('gulp-concat');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');

const server = browserSync.create();

const paths = {
  scripts: {
    src: 'app/js/**/*.js',
    watchDest: 'app/js',
    dest: 'dist/js'
  },
  app: 'app',
  scss: {
    src: 'app/scss/**/*.scss',
    watchDest: 'app/css',
    dest: 'dist/css'
  },
  nunjucks: {
    templates: 'app/templates',
    pages: 'app/pages',
    njk: 'app/pages/**/*.+(html|njk)'
  }
};

const onError = function (err) {
  console.log(err);
  this.emit('end');
}

function style() {
  return gulp.src(paths.scss.src)
    .pipe(plumber({
      errorHandler: function(err) {
          notify.onError({
              title: "Sass Compile Error",
              message: "<%= error.message %>",
              sound: "beep"
          })(err);
          this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        'app/scss/base',
        'app/scss/components',
        'app/scss/helpers',
        'app/scss/layout',
        'app/scss/modules',
        'app/scss/variables'
      ]
    }))
    .pipe(gulp.dest(paths.scss.watchDest))
}

function nunjucks() {
  return gulp.src(paths.nunjucks.njk)
  .pipe(plumber({
    errorHandler: function(err) {
          notify.onError({
              title: "Nunjucks Compile Error",
    message: "<%= error.message %>",
    sound: "beep"
          })(err);
          this.emit('end');
      }
  }))
  .pipe(nunjucksRender({path: [paths.nunjucks.templates]}))
  .pipe(gulp.dest(paths.app))
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.watchDest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: paths.app
    }
  });
  done();
}

function watchFiles() {
  gulp.watch(paths.scss.src, style);
  gulp.watch(paths.nunjucks.njk, gulp.series(nunjucks));
  gulp.watch(
    [paths.nunjucks.templates, paths.nunjucks.pages],
    gulp.series(reload)
  );
  gulp.watch(paths.scripts.src, gulp.series(scripts));
  // gulp.watch("./assets/img/**/*", images);
}

// const watch = () => gulp.watch(paths.scripts.src, gulp.series(style, nunjucks, scripts, reload));

const dev = gulp.series(style, serve, nunjucks, scripts, watchFiles);
exports.default = dev;
exports.watch = dev;