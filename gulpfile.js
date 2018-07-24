var gulp = require('gulp');
var sass  = require('gulp-sass');
var browserSync  = require('browser-sync');
var useref  = require('gulp-useref');
var uglify  = require('gulp-uglify');
var plumber  = require('gulp-plumber');
var sourcemaps  = require('gulp-sourcemaps');
var NunjucksRender  = require('gulp-nunjucks-render');
var notify  = require('gulp-notify');
// var  = require();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
           baseDir: 'app' 
        }
    })
});

// Catch Errors
var onError = function (err) {
    console.log(err);
    this.emit('end');
};

// Turn scss into css
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
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
            includePaths: ['app/scss/base', 'app/scss/components', 'app/scss/helpers', 'app/scss/layout', 'app/scss/modules', 'app/scss/variables']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('nunjucks', function() {
    return gulp.src('app/pages/**/*.+(html|njk)')
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
        .pipe(NunjucksRender({path: ['app/templates']}))
        .pipe(gulp.dest('app'))
});

gulp.task('watch', ['nunjucks', 'browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass'], browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch(['app/templates/**/*.njk', 'app/pages/**/*.njk'], ['nunjucks'], browserSync.reload);
})