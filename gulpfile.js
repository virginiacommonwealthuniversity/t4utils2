const build = require('./gulp/tasks/build'),
    docs    = require('./gulp/tasks/docs'),
    gulp    = require('gulp'),
    watch   = require('./gulp/tasks/watch');

// Build -------------------------
gulp.task('build',     build.all);
gulp.task('build:exp', build.exp);
gulp.task('build:min', build.min);
// Default -----------------------
gulp.task('default',       watch);
// Docs --------------------------
gulp.task('docs',           docs);
// Watch -------------------------
gulp.task('watch',         watch);