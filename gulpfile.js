const {
  dest, task, series, src,
} = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

sass.compiler = require('sass');

task('clean:build', () => del([
  './dist',
]));

task('sass', () => src('./assets/govuk/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./dist/govuk/')));

task('js', () => src('./node_modules/govuk-frontend/govuk/all.js')
  .pipe(dest('./dist/govuk/')));

task('govuk-assets', () => src('./node_modules/govuk-frontend/govuk/assets/**/*')
  .pipe(dest('./dist/govuk/')));

task('build', series(['clean:build', 'sass', 'js', 'govuk-assets']));
task('default', series(['build']));
