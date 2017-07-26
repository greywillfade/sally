var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer")

    // Compile SCSS files to CSS
    gulp.task("scss", function () {
        gulp.src("themes/201706-sj/src/**/*.scss")
            .pipe(sass({
                outputStyle : "compressed"
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3', 'ios >= 6']
            }))
            .pipe(gulp.dest("themes/201706-sj/static/css"))
    })

    // Watch asset folder for changes
    gulp.task("watch", ["scss"], function () {
        gulp.watch("themes/201706-sj/src/**/*", ["scss"])
    })

    // Set watch as default task
    gulp.task("default", ["watch"])
