const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, '../build' )
  },
  plugins: [

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

            options: {
              name: '[name].[ext]',
              outputPath: 'static/images/',
              publicPath: 'static/images/',
            }
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
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts/',
              publicPath: 'static/fonts/',
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
