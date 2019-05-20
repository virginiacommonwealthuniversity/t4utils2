const datestamp = require('../modules/datestamp'),
    gulp        = require('gulp'),
    header      = require('../modules/header'),
    include     = require('gulp-include'),
    pkg         = require('../../package.json'),
    rename      = require('../modules/rename'),
    replace     = require('gulp-replace');

function build(style) {
    if (!style) return gulp.series(build('exp'), build('min'));

    function method() {
        return gulp.src('src/*.js')
            .pipe(include())
            .pipe(replace(/\{\{version\}\}/g, pkg.version))
            .pipe(replace(/\{\{datestamp\}\}/g, datestamp()))
            .pipe(header(style))
            .pipe(rename(style))
            .pipe(gulp.dest('dist'));
    }

    method.displayName = 'build:' + style;

    return method;
}

module.exports = {
    all: build(),
    exp: build('exp'),
    min: build('min'),
    ref: build
};