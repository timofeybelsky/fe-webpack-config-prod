const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, '../build' )
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({

                             }),
    new HtmlWebpackPlugin( {
                             template: './src/index.html',
                             meta: {
                               viewport: 'width=device-width, initial-scale=1',
                             }
                           } )
  ],
  module: {
    rules: [
      /*
       * IMAGES RULE
       * */
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      /*
       * FONTS RULE
       * */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  }
};

module.exports = config;
