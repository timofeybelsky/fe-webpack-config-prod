const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

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
            options: {},
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

