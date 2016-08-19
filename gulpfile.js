'use strict';

var gulp = require('gulp'),
	path = require('path'),
	webpack = require('webpack'),
	gulpPlugin = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	webpackDevServer = require('webpack-dev-server'),
	htmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
		entry: { // 엔트리 파일 목록
			app: ['./src/app.js'] 
		},
		output: {
			path: path.join(__dirname, "dist/"),
			publicPath: './',
			filename: 'bundle.js',
			watch: true
		},
		plugins: [
			new htmlWebpackPlugin({
				// title: 'the creative art works',
				filename: 'index.html',
				template: './src/index.html'
			})
		]
	};


/* **
***** sequnce task *****
** */
gulp.task('server-sequence', function(cb) {
	runSequence('webpack-dev-server', cb);
});

gulp.task('build-sequnce', function(cb) {
	runSequence('clean','webpack-build', cb);
});



/* **
***** run task *****
** */
gulp.task('clean', function() {
	return gulp.src('./dist/')
		.pipe(gulpPlugin.clean());
});


/* start webpack build */
gulp.task('webpack-build', function(callback) {

	webpack(
		webpackConfig
		, function(err, stats) {
		if(err) throw new gulpPlugin.util.PluginError("webpack-build", err);
		gulpPlugin.util.log("[webpack-build]", stats.toString({
			// output options
		}));
		callback();
	});
});


/* start webpack dev server */
gulp.task("webpack-dev-server", function(callback) {
	var compiler,
		devServer;

	compiler = webpack(webpackConfig);

	devServer = new webpackDevServer(compiler, {
		// server and middleware options
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gulpPlugin.util.PluginError("webpack-dev-server", err);

		// Server listening
		gulpPlugin.util.log("[webpack-dev-server]", "http://localhost:8080/index.html");
		// keep the server alive or continue?
		// callback();
	});
});


/* default task */
gulp.task('default', ['server-sequence'] ,function() {
	// console.log('default');
});









