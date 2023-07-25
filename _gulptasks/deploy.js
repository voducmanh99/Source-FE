import { watch, series, parallel } from "gulp";
import bSync from "browser-sync";

import jsCore from "./core-js";
import jsTask from "./script";
import pugTask from "./html";
import cssCore from "./core-css";
import sassTask from "./css";
import { copyImage } from "./copy";
import { cleanImage } from "./clean";
import { deployCSS, deployJS, deployXSLT } from "./ftp";

export const deploy = () => {
    bSync.init({
        notify: true,
        server: {
            baseDir: "dist",
        },
        port: 8000,
    });

    watch(["src/js/**/*.js"], series(jsTask, deployJS));

    watch(["src/**/**.pug"], series(pugTask));

    watch(
        ["src/components/**/**.sass", "src/components/_core/**/**.sass"],
        series(sassTask, deployCSS)
    );

    watch(
        ["src/img/**/**.{svg,png,jpg,speg,gif}"],
        series(cleanImage, copyImage)
    );

    watch(
        ["src/_plugins/**/**.css", "src/_plugins/**/**.js", "config.json"],
        parallel(jsCore, cssCore)
    );

    watch(
        ["rap/xslt/**/**.xslt", "rap/xslt/**/Settings.config"],
        series(deployXSLT)
    );

    watch(["dist"]).on("change", bSync.reload);
};

module.exports = deploy;
