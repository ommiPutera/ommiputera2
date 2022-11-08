const path = require('path')

module.exports = {
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    hashAlgorithm: 'md4',
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
          reuseExistingChunk: true,
        },
      },
    },
  },
}
