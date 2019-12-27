const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const developmentConfig = merge( commonConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.join( __dirname, '../build' ),
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      /*
      * STYLES RULE
      * */
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader',
        ]
      }
    ]
  }
} );

module.exports = developmentConfig;
