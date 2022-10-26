import {globs, paths} from './config';

import gulp from 'gulp';
import jsonminify from 'gulp-jsonminify';
import {production} from 'gulp-environments';

const buildJson = () => gulp.src(globs.json)
    .pipe(production(jsonminify()))
    .pipe(gulp.dest(paths.build));

const watchJson = (watchOptions) =>
    gulp.watch(globs.json, watchOptions, buildJson);

export {buildJson, watchJson};
