const concat = require('gulp-concat');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');

const server = browserSync.create();

const paths = {
  scripts: {
    src: 'src/scripts/*.js',
    dest: 'dist/scripts/'
  },
  app: 'app',
  scss: {
    src: 'app/scss/**/*.scss',
    dest: 'dist/css'
  }
};

function style() {
  return gulp.src('app/scss/**/*.scss')
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
    .pipe(gulp.dest('app/css'))
}

function nunjucks() {
  return gulp.src('app/pages/**/*.+(html|njk)')
  .pipe(nunjucksRender({path: ['app/templates']}))
  .pipe(gulp.dest('app'))
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: 'app'
    }
  });
  done();
}

function watchFiles() {
  gulp.watch('app/scss/**/*.scss', style);
  gulp.watch('app/pages/**/*.+(html|njk)', gulp.series(nunjucks));
  gulp.watch(
    [
      'app/templates',
      'app/pages'
    ],
    gulp.series(reload)
  );
  // gulp.watch("./assets/img/**/*", images);
}

// const watch = () => gulp.watch(paths.scripts.src, gulp.series(style, nunjucks, scripts, reload));

const dev = gulp.series(style, serve, nunjucks, watchFiles);
exports.default = dev;
exports.watch = watchFiles;