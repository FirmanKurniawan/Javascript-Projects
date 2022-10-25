import {buildJs, createLintJs, watchJs} from './tasks/js';
import {buildJson, watchJson} from './tasks/json';
import {globs, paths, watchOptions} from './tasks/config.js';
import {iconify, watchIcon} from './tasks/icon';

import {access} from 'fs';
import del from 'del';
import gulp from 'gulp';
import {join} from 'path';
import manifest from './src/manifest';
import {promisify} from 'util';
import zipper from 'gulp-zip';

const zipFileName = `${manifest.name} ${manifest.version}.zip`;

const clean = () => del(paths.build);

const lint = createLintJs();

const build = gulp.series(clean, lint,
    gulp.parallel(iconify, buildJs, buildJson));

const checkVersion = () => promisify(access)(join(paths.release, zipFileName))
    .then(() => {
        throw new Error(`There is already a release "${zipFileName}"`);
    },
    () => true);

const zip = () => gulp.src(globs.build)
    .pipe(zipper(zipFileName))
    .pipe(gulp.dest(paths.release));

const release = gulp.series(build, checkVersion, zip);

const watcher = () => {
    watchIcon(watchOptions);
    watchJs(watchOptions);
    watchJson(watchOptions);
};

const watch = gulp.series(clean, watcher);

export {clean, lint, build, release, watch, watch as default};
