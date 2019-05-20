const datestamp = require('./datestamp.js'),
    header      = require('gulp-header'),
    pkg         = require('../../package.json');


module.exports = format => {
    const info = {
        date: datestamp()
    };

    let banner;

    switch (format) {
    case 'exp':
        banner =
`/**
 * T4Utils 2
 * @author <%= pkg.author %>
 * @version <%= pkg.version %>_<%= info.date %>
 * @license <%= pkg.license %>
 */

`;
        break;
    case 'min':
        banner =
`/* T4Utils2 <%= pkg.version %>_<%= info.date %> | <%= pkg.license %> | <%= pkg.author %> */

`;
        break;
    }
    return header(banner, { pkg, info });
};
