const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'source-map-loader'
  },
   {
        test: /\.wasm$/,
        type: 'asset/resource',
      },
];



const resolve = {
  fallback: {
    fs: false,
    child_process: false,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer/'),
    process: require.resolve('process/browser'),
    assert: require.resolve('assert/'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    url: require.resolve('url/'),
  },
  extensions: ['.js']
};

module.exports = [
  {
    entry: './src/index.js',
    experiments: {
      asyncWebAssembly: true,
    },
    cache: false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      publicPath: '/',
    },
    devServer: {
      static: [path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules/@emscripten-forge/mambajs/lib')],
      compress: true,
      port: 9000,
      hot: false,
      liveReload: true,
    },
 
    module: {
      rules
    },
    resolve,
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  }
];