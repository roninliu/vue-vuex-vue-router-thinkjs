/*
 * @Author: ronin
 * @Date:   2016-11-08 16:27:12
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-23 17:57:52
 */

'use strict';

import fs from "fs";
import path from "path";
import glob from "glob";
import gulp from 'gulp';
import rename from "gulp-rename";
import browserify from "browserify";
import vueify from 'vueify';
import babelify from "babelify";
import sourcemaps from "gulp-sourcemaps";
import buffer from "vinyl-buffer";
import source from 'vinyl-source-stream';
import notify from "gulp-notify";
import uglify from 'gulp-uglify'; //js压缩混淆
import watchify from 'watchify';



function compile(watch) {
	glob("./www/src/*.js", (err, entries) => {
		if (err) {
			throw err;
		} else {
			let tasks = entries.map((entry) => {
				let bundler = watchify(browserify(entry, {
						debug: true
					})
					.transform(babelify, {
						presets: ['es2015', 'stage-3'],
						plugins: ["transform-runtime"]
					})
					.transform(vueify));

				function rebundle() {
					bundler.bundle()
						.on('error', function(err) {
							console.error(err);
							this.emit('end');
						})
						.pipe(source(path.basename(entry)))
						.pipe(rename({
							extname: ".bundle.min.js"
						}))
						.pipe(buffer())
						.pipe(sourcemaps.init({
							loadMaps: true
						}))
						.pipe(uglify())
						.pipe(sourcemaps.write('./'))
						.pipe(gulp.dest("./www/static/"))
						.pipe(notify(entry + ' build completed'));
				}
				if (watch) {
					bundler.on('update', function() {
						console.log("[INFO]:", 'Task bundling, Please waiting...');
						rebundle();
					})
				}
				rebundle();
			})
		}
	})
}


function watch() {
	return compile(true);
}

//编译任务
gulp.task('build', () => {
	return compile();
});
//监听改动任务
gulp.task('watch', () => {
	return watch();
});

//默认任务
gulp.task("default", ['watch']);