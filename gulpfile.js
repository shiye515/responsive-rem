var gulp = require('gulp');
var eslint = require('gulp-eslint');
var minify = require('gulp-minify');


gulp.task('lint', () => {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
    return gulp.src('src/responsive-rem.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js'], ['default']);
});
