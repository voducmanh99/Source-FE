var gulp = require("gulp");
var gutil = require("gulp-util");
var ftp = require("vinyl-ftp");

const HOST = "duytan.com";
const USER = "canhcamftp2023";
const PASSWORD = "Mrf^0d058";

export const deployCSS = () => {
    var conn = ftp.create({
        host: HOST,
        user: USER,
        password: PASSWORD,
        parallel: 10,
        log: gutil.log,
    });

    var globs = ["dist/css/*.css"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp
        .src(globs, { base: "./dist/css", buffer: false })
        .pipe(conn.newerOrDifferentSize("/Data/Sites/1/skins/default/css")) // only upload newer files
        .pipe(conn.dest("/Data/Sites/1/skins/default/css"));
};

export const deployJS = () => {
    var conn = ftp.create({
        host: HOST,
        user: USER,
        password: PASSWORD,
        parallel: 10,
        log: gutil.log,
    });

    var globs = ["dist/js/*.js"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp
        .src(globs, { base: "./dist/js", buffer: false })
        .pipe(conn.newerOrDifferentSize("/Data/Sites/1/skins/default/js")) // only upload newer files
        .pipe(conn.dest("/Data/Sites/1/skins/default/js"));
};

export const deployXSLT = () => {
    var conn = ftp.create({
        host: HOST,
        user: USER,
        password: PASSWORD,
        parallel: 10,
        log: gutil.log,
    });

    var globs = ["rap/xslt/**/*.xslt", "rap/xslt/**/Settings.config"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp
        .src(globs, { base: "./rap/xslt/", buffer: false })
        .pipe(conn.differentSize("/Data/Xslt")) // only upload newer files
        .pipe(conn.dest("/Data/Xslt"));
};

module.exports = { deployCSS, deployJS, deployXSLT };
