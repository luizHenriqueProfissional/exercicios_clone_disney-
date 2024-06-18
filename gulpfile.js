const gulp = require('gulp');// solicitação do gulp
const sass = require('gulp-sass')(require('sass')); // Solicitação correta do gulp-sass


function styles () {
  return gulp.src('./src/styles/*.scss')
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(gulp.dest('./dist/css'));
}

function watchFiles () {
gulp.watch('./src/styles/*.scss',styles);
}


//function minifyImages() {
  //return gulp.src('./src/images/**/')
    //.pipe(imagemin())
    //.pipe(gulp.dest('dist/images'));
//}





exports.build = gulp.parallel(styles , watchFiles, );