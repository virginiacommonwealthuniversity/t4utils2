const gulp = require('gulp'),
    jsdoc  = require('gulp-jsdoc3');

function docs(doc) {
    return gulp.src('dist/T4Utils.js', { read: false })
        .pipe(jsdoc(doc));
}

module.exports = docs;