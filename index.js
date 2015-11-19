'use strict';

var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var _ = require('underscore');
var twig = require('gulp-twig');

Elixir.extend('twig', function(src, output, options) {
    new Elixir.Task('twig', function() {
        var paths = prepGulpPaths(src, output);

        this.log(paths.src, paths.output);

        options = _.extend({
            data: {}
        }, options);

        return (
            gulp.src(paths.src.path)
                .pipe(twig(options))
                .pipe(gulp.dest(paths.output.baseDir))
                .pipe(new Elixir.Notification('Twig Compiled!'))
        );
    })
    .watch('resources/views/**/*.twig');
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src || '*.twig', 'resources/views')
        .output(output || 'public');
};
