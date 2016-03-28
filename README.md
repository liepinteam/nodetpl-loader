# nodetpl-loader

nodetpl-plus loader for webpack


## About Nodetpl

See <https://github.com/pillys/nodetpl-plus>


## Usage

```
npm install nodetpl-loader --save
```

## Configration

```
loaders: [{
  test: /\.(jsx?|tpl)$/,
  loader: 'babel',
  ...
```

```
preLoaders: [{
  test: /\.tpl?$/,
  include: 'some dir',
  loader: 'nodetpl'
}
```

## Questions?

If you have any questions, please feel free to ask through [New Issue](https://github.com/pillys/nodetpl-loader/issues/new).

### License

  nodetpl-loader is available under the terms of the [MIT](LICENSE) License.
