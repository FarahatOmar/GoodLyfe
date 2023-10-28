const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('minify-css', () => {
    return gulp.src(['assets/Stylesheet/style.css', 'assets/Stylesheet/header.css', 'assets/Stylesheet/footer.css' , 'assets/Stylesheet/classes.css' , 'assets/Stylesheet/membership.css', 'assets/Stylesheet/trainers.css' , 'assets/Stylesheet/user.css' , 'assets/Stylesheet/resposnive.css']) // Source of your CSS files
        .pipe(concat('styles.min.css')) // Concatenate all CSS files into a single file
        .pipe(cleanCSS({compatibility: 'ie8'})) // Minify the concatenated CSS file
        .pipe(gulp.dest('assets/Stylesheet')); // Destination folder for the minified CSS file
});
