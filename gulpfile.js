'use strict';

var gulp = require('gulp'),
	webpack = require('webpack'),
	gulpPlugin = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	WebpackDevServer = require('webpack-dev-server'),
	webpackConfig = require('./webpack.config.js');




gulp.task('clean', function() {
	return gulp.src('./dist/')
		.pipe(gulpPlugin.clean());
});


gulp.task('sequence', function(cb) {
	runSequence(/*'clean',*/'webpack-dev-server', cb);
});


/*gulp.task('webpack', function(callback) {

	// run webpack
	webpack({
		// configuration
	}, function(err, stats) {
		if(err) throw new gulpPlugin.util.PluginError("webpack", err);
		gulpPlugin.util.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
	});
});

*/
gulp.task("webpack-dev-server", function(callback) {
	var compiler,
		devServer;
    // Start a webpack-dev-server
    compiler = webpack(webpackConfig);

    devServer = new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gulpPlugin.util.PluginError("webpack-dev-server", err);
        // Server listening
        gulpPlugin.util.log("[webpack-dev-server]", "http://localhost:8080/src/index.html");

        // keep the server alive or continue?
        // callback();
    });
});



/* default task */
gulp.task('default', ['sequence'] ,function() {
	// console.log('default');
});









