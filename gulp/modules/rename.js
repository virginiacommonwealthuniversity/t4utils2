const empty = require('gulp-empty'),
    rename  = require('gulp-rename');

module.exports = style => style === 'min' ? rename({ suffix: '.min' }) : empty();