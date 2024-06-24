const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');

const browsersync = require('browser-sync').create();


// Sass Task
function scssTask() {
    return src('scss/styles.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }))
        .pipe(browsersync.stream());
}

// JavaScript Task
function jsTask() {
    return src('js/script.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }))
}

//Browser Sync Task
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    // watch changes html
    watch('*.html', browserSyncReload);

    //watch changes in scss and js
    watch(['scss/**/*.scss', 'js/**/*.js'], series(scssTask, jsTask, browserSyncReload))
}

// Default gulp task
exports.default = series(
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
)