const build = require('./build'),
    gulp    = require('gulp');

function watch() {
    gulp.watch('src/**/*.js', build.all);
}

module.exports = watch;