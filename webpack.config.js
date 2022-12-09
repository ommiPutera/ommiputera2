const path = require('path')
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    hashAlgorithm: 'md4',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    moduleIds: 'deterministic',
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
}
