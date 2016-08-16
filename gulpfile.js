'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	sprity = require('sprity'),
	runSequence = require('run-sequence'),
	browserSync = require('browser-sync').create();

var	watchOpt = {
		interval: 500
	};

/* todo

    "gulp": "^3.9.1",

    "browser-sync": "^2.14.0",
    "gulp-imagemin": "^3.0.3",
    "gulp-lb-include": "^0.3.1",
    "gulp-less": "^3.1.0",
    "gulp-load-plugins": "^1.2.4",
    "gulp-run-sequence": "^0.3.2",
    "gulp-webpack": "^1.5.0",
    "sprity": "^1.0.8"
*/

/* webpack */
gulp.task('webpack', function() {
	return gulp.src('src/js/index.js')
		.pipe(webpack())
		.pipe(gulp.dest('build/'));
});



// Static Server + watching scss/html files
gulp.task('browserSync', function() {
	console.log('browserSync');
	browserSync.init({
	    server: "./build"
	});

});


/* clean */
gulp.task('clean', function() {
	console.log('clean');
	return gulp.src('./build/')
        .pipe(plugins.clean());

});

/* watch */
gulp.task('watch', function() {
	console.log('watch');
	gulp.watch("src/html/*.html", watchOpt, browserSync.reload);
	gulp.watch("src/js/*.js", watchOpt, browserSync.reload);

});




/* run sequence build */
gulp.task('startSequence', function(cb) {
	console.log('startSequence');
	runSequence('clean',['browserSync', 'watch'], cb);
});


/* start */
/*gulp.task('start', ['browserSync', 'watch'], function() {

});*/


/* default task */
gulp.task('default', ['startSequence'] ,function() {
	console.log('default');
});















