import manifest from '../src/manifest';

const src = 'src';

export const paths = {
    src,
    build: 'build',
    release: 'release',
    masterIcon: 'branding/master-icon.png',
    manifest: `${src}/manifest.json`
};

const srcGlob = (ext = '*') => `${paths.src}/**/${ext}`;

export const globs = {
    json: [srcGlob('*.json')],
    js: [srcGlob('*.js')],
    gulp: ['gulpfile.babel.js', 'tasks/**/*'],
    build: [`${paths.build}/**/*`]
};

export const watchOptions = {
    ignoreInitial: false
};

export const browserlistOptions = {
    browsers: [`Chrome >= ${manifest.minimum_chrome_version}`]
};
