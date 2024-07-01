const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("nube-flow/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["nube-flow/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
