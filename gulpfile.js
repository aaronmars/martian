/**
 * Martian - Core JavaScript API for MindTouch
 *
 * Copyright (c) 2015 MindTouch Inc.
 * www.mindtouch.com  oss@mindtouch.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*eslint-env node*/
'use strict';

var gulp = require('gulp');
var cached = require('gulp-cached');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var KarmaServer = require('karma').Server;
var jsSources = [
    './*.js',
    '*(errors|lib|models)/**/*.js'
];
var inspectSources = jsSources.concat('test/**/*.js');
var buildSources = jsSources.concat('!karma.conf.js', '!gulpfile.js', '!config.js');

/*** js tests ***/
gulp.task('test', function() {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

/*** sub tasks ***/
gulp.task('inspect:lint', function() {
    var lint = require('gulp-eslint');
    return gulp.src(inspectSources)
        .pipe(cached('inspect:lint'))
        .pipe(lint({ configFile: '.eslintrc' }))
        .pipe(lint.format('stylish'));
});
gulp.task('build', function() {
    return gulp.src(buildSources)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ 'es2015' ],
            sourceMaps: 'inline'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

/*** main tasks ***/
gulp.task('inspect', [ 'inspect:lint' ]);
gulp.task('default', [ 'inspect', 'test' ]);
gulp.task('watch', function() {
    gulp.watch(inspectSources, [ 'default' ]);
});
