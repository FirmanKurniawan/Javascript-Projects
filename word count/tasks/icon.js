import chromeManifestIconify from 'gulp-chrome-manifest-iconify';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import {paths} from './config';
import {production} from 'gulp-environments';

const iconify = () => gulp.src(paths.masterIcon)
    .pipe(chromeManifestIconify({
        manifest: paths.manifest,
        resizeMode: chromeManifestIconify.ResizeMode.HERMITE
    }))
    .pipe(production(imagemin()))
    .pipe(gulp.dest(paths.build));

const watchIcon = (watchOptions) =>
    gulp.watch([paths.manifest, paths.masterIcon], watchOptions, iconify);

export {iconify, watchIcon};
