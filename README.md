# laravel-elixir-twig

Sometimes you need to compile twig template for prototype, this extension can do it for you.

## Install

```sh
$ npm install laravel-elixir-twig --save-dev
```

## Usage

Compile `resources/views/**/*.twig` by default:

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-twig');

elixir(function (mix) {
    mix.twig();
});
```

Or compile custom path of twig template:

```js
elixir(function (mix) {
    mix.twig({
        src: '/path/to/**/*.twig'
    });
});
```

Then run:

```bash
gulp
```

Or run twig task only:

```bash
gulp twig
```

## Options

See: [gulp-twig](https://github.com/zimmen/gulp-twig)

## License

MIT
