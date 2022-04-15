const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rulesForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic', // clasic
        },
      ],
    ],
  },
};

module.exports = {
  //entry:
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  module: {
    rules: [rulesForJavaScript],
  },
  devServer: {
    open: true, //abre el navegador
    port: 3000,
    // overlay: true, //abrir un overlay con los errores
  },
  devtool: 'source-map',
};
