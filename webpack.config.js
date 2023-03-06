const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheCompression: false,
          cacheDirectory: true,
        },
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {}
          }
        ]
      }
    ],
  },
}
