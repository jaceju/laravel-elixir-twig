'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var twig = require('gulp-twig');

elixir.extend('twig', function (options) {

    var src, opts;

    options = _.extend({
        src: 'resources/views/**/*.twig',
        data: {}
    }, options);

    src = options.src;

    gulp.task('twig', function () {
        return gulp.src(src)
            .pipe(twig(options))
            .pipe(gulp.dest('public'));
    });

    return this.queueTask('twig');
});
