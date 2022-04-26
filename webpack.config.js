/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Webpack main configuration file
 */

const path = require('path');
const glob = require('glob');
const globAll = require('glob-all');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const globImporter = require('node-sass-glob-importer-plus');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const environment = require('./configuration/environment');
const files = glob.sync(`${environment.paths.source}/{scripts,styles}/**/!(_)*.+(ts|js|scss|sass)`);

const entries = files.map((file) => ({
  name: path.parse(file).name,
  path: file,
})).reduce((red, file) => {
  if (red[file.name] !== undefined) {
    red[file.name].push(file.path);
  } else {
    red[file.name] = [file.path];
  }
  return red;
}, {});

module.exports = {
  entry: entries,
  output: {
    filename: 'scripts/[name].js',
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
        use: ['awesome-typescript-loader'],
        exclude: [/node_modules/],
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
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '../',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new PurgeCSSPlugin({
      paths: globAll.sync([
        path.join(__dirname, '/resources/assets/scripts/**/*.*'),
      ]),
      safelist: {
        standard: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'figure', 'noscript', 'img', 'ol', 'ul', 'li', 'table', 'tbody', 'thead', 'tfoot', 'tr', 'td', 'th', 'input', 'textarea'],
        deep: []
      }
    }),
    new ImageMinPlugin({
      test: /\.(jpg|jpeg|png|gif)$/i,
      optipng: { optimizationLevel: 3 },
      jpegtran: { progressive: true },
    }),
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
      ],
    }),
    new CleanWebpackPlugin({
      verbose: false,
    }),
    new CheckerPlugin(),
  ],
  target: 'web',
};
