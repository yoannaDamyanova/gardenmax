/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Webpack main configuration file
 */

const path = require('path');
const glob = require('glob');
const globAll = require('glob-all');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer-plus');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StylelintPlugin = require('stylelint-webpack-plugin');
const environment = require('./configuration/environment');
const files = glob.sync(environment.paths.source+`/{js,scss}/**/!(_)*.+(ts|js|scss|sass)`);


const entries = files.map((file) => ({
  name: path.parse(file).name,
  path: file, // MacOS
  // path: './'+ file, // Windows
})).reduce((red, file) => {
  if (red[file.name] !== undefined) {
    red[file.name].push(file.path);
  } else {
    // eslint-disable-next-line no-param-reassign
    red[file.name] = [file.path];
  }
  return red;
}, {});

module.exports = {
  entry: entries,
  output: {
    filename: 'js/'+ environment.prefix +'[name].js',
    path: environment.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: MediaQueryPlugin.loader
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                importer: globImporter()
              }
            }
          }
        ],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              publicPath: '../',
              limit: environment.limits.images,
              useRelativePath: true
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/'+ environment.prefix + '[name].[ext]',
              publicPath: '../',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  externals: {
    jQuery: 'jQuery',
    $     : 'jQuery',
    wp    : 'wp',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // new StylelintPlugin({
    //   context: 'stylelint',
    //   exclude: 'style.css',
    //   extensions: 'scss'
    // }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/'+ environment.prefix +'[name].css'
    }),
    // new PurgeCSSPlugin({
    //   paths: globAll.sync([
    //     path.join(__dirname, '/*.php'),
    //     path.join(__dirname, '/*.html'),
    //     path.join(__dirname, '/**/*.php'),
    //     path.join(__dirname, '/views/*.php'),
    //     path.join(__dirname, '/views/**/*.php'),
    //     path.join(__dirname, '/assets/js/**/*.*'),
    //   ]),
    //   safelist: {
    //     standard: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ins', 'blockquote', 'figure', 'noscript', 'img', 'ol', 'ul', 'li', 'dl', 'dt', 'dd', 'table', 'tbody', 'thead', 'tfoot', 'tr', 'td', 'th', 'fieldset', 'input', 'textarea', 'field', 'sub-menu', 'menu-item-has-children', 'current-menu-item', 'open', 'active', 'aligncenter', 'alignleft', 'alignright', 'alignnone', 'menu-open', 'page-numbers', 'next', 'prev', 'current', '[style="background-color"]', 'editor-styles-wrapper', 'lazyload', 'block-editor-block-inspector__advanced', 'link', 'wp-full-overlay', 'wp-full-overlay-sidebar', 'wpadminbar', 'pagination', 'screen-reader-text', 'nav-links', 'single-room', 'post-type-room', 'home', 'admin-bar', 'w-100', 'dayContainer', 'today', 'reserved', 'components-popover__content', 'wp-full-overlay', 'expanded', 'customize-controls.wp-full-overlay-sidebar', 'tinymce-control', 'block-library-block__reusable-block-container', 'loader', 'variation', 'mini_cart_item', 'added_to_cart', 'added', 'header-top', 'header-sticky', 'header-before-sticky', 'type-post', 'columns-4', 'products', 'product', 'return-to-shop', 'shop_table', 'blockMsg', 'cart-open', 'col2-set', 'col-1', 'col-2', 'summary', 'entry-content', 'has_invoice', 'invoice', '@media', 'fic-u-md-3', 'fic-o-sm-4', 'fic-o-xs-6', 'fic-u-md-9', 'fic-o-sm-12', 'fic-o-xs-12', 'onsale', 'empty'],
    //     deep: [
    //       /^dashicons-/,
    //       /^pt-u-md-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^pb-u-md-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^pt-d-sm-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^pb-d-sm-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^mt-u-md-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^mb-u-md-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^mt-d-sm-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^mb-d-sm-(0|10|20|30|40|50|60|70|80|90|100)/,
    //       /^bc-/,
    //       /^bg-(c*|w|b|i)/,
    //       /^b-(c*|w|b|i)/,
    //       /^tc-(c*|w|b|i)/,
    //       /^ta-u-md-/,
    //       /^ta-d-sm-/,
    //       /^button/,
    //       /^wpforms/,
    //       /^swiper/,
    //       /^flatpickr/,
    //       /^acf/,
    //       /^woocommerce/,
    //       /^wc/,
    //       /^speedy/,
    //       /^cart/,
    //       /^subscription/,
    //       /^order/,
    //       /^speedy/,
    //       /^econt/,
    //       /^select2/,
    //       /^wp/,
    //       /^block/,
    //       /^modal/,
    //     ],
    //   }
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, 'images'),
          to: path.resolve(environment.paths.output, 'images'),
          noErrorOnMissing: true,
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
        {
          from: path.resolve(environment.paths.source, 'fonts'),
          to: path.resolve(environment.paths.output, 'fonts'),
          noErrorOnMissing: true,
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
      ],
    }),
    new CleanWebpackPlugin({
      verbose: false,
    }),
  ],
  target: 'web',
};
