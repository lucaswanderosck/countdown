const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

// Função para compilar o SASS
function compilaSass() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/styles"));
}

//Função para comprimir o JavaScript
function comprimeJs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
}

// Função para comprimir as imagens
function comprimeImg() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

// Exportação
exports.default = gulp.parallel(compilaSass, comprimeImg, comprimeJs);

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(compilaSass));
  gulp.watch("./src/scripts/*.js", gulp.parallel(comprimeJs));
};
