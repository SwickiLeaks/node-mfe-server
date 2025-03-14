const path = require('path');

module.exports = {
  entry: ['./client-side/sp-main.ts'],
  devtool: 'inline-source-map',
  output: {
    filename: 'sp-main.js',
    library: {
      type: 'umd',
    },
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', options: { configFile: 'tsconfig.client.json' }, exclude: /node_modules/ },
    ],
  },
  target: ['web', 'es5'],
};
