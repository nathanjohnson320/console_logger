const path = require('path');

module.exports = {
  entry: './js/console_logger.js',
  output: {
    filename: 'console_logger.js',
    path: path.resolve(__dirname, '../priv/static'),
    library: 'ConsoleLogger',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: path.resolve(__dirname, './js/console_logger.js'),
        use: [
          {
            loader: 'expose-loader',
            options: 'ConsoleLogger',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [],
};
