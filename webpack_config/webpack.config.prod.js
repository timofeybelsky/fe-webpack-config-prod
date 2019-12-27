const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const productionConfig = merge( commonConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(c|sa|sc)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(  ),
  ],
  module: {
    rules: [
      /*
       * STYLES RULE
       * */
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                require( 'autoprefixer' ),
                require( 'css-mqpacker' ),
                require( 'cssnano' ),
              ]
            }
          }
        ],
      }
    ]
  }
} );

module.exports = productionConfig;

