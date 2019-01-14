const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const scss = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');

//压缩html文件
gulp.task('htmlmin', function() {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/src/html'))
});

//编译scss文件
gulp.task('scss', function() {
    return gulp.src('src/css/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('dist/src/css'))
});

// 压缩css
gulp.task('cssmin', function() {
    return gulp.src(['dist/src/css/*.css', '!dist/src/css/*.min.css'])
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('dist/src/css'))
});


//压缩js文件 
gulp.task('uglify', function() {
    return gulp.src('src/script/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/src/script/js'))
});

//压缩图片
gulp.task('imgmin', function() {
    return gulp.src('src/img/*')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/src/img'))
});