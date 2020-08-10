const mix = require('laravel-mix');

mix.js('src/js/index.js', 'docs/js')
    .sass('src/css/style.scss', 'docs/css');