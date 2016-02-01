var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	path = require('path'),
	fs = require('fs'),
	data = require('gulp-data'),
	plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
	jsonFiles	: './src/pages/**/*.json',
	pages		: './src/pages/**/*.hbs',
	partials 	: './src/partials',
    sass        : './src/scss/**/*.scss',
	contextJson : 'context.json',
	dist		: 'dist'
};


gulp.task('hbs', function () {
    var options = {
        ignorePartials: true,
        batch : [paths.partials]        
    };
    
    return gulp.src(paths.pages)
    	.pipe(plumber())
    	.pipe(data(function(file) {    		
    		var contextPath = path.dirname(file.path) + '/' + paths.contextJson;    		    		
    		var content = JSON.parse(fs.readFileSync(contextPath)); 
    		return content;		
    	}))    	
    	.pipe(handlebars(data, options))        
        .pipe(rename(function(obj) {
        	obj.extname = '.html';
        	obj.dirname = '';
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(rename({
            dirname: 'css',
            extname: '.css'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	var tasks = ['hbs'];

	gulp.watch(paths.pages, tasks);
	gulp.watch(paths.partials + '/*.hbs', tasks);
	gulp.watch(paths.partials + '/**/*.hbs', tasks);
	gulp.watch(paths.jsonFiles, tasks);
    gulp.watch(paths.sass, ['sass']);

});

gulp.task('default', ['hbs','sass','watch']);