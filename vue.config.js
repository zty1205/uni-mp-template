const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

function pluginsCreator() {
  const plugins = [];
  return plugins;
}

const VUE_CONFIG = {
  chainWebpack: (config) => {
    process.env.ANALYZER && config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  },
  configureWebpack: () => {
    return {
      plugins: pluginsCreator(),
      resolve: {
        alias: {
          '@components': resolve('src/components')
        }
      }
    };
  }
};

module.exports = VUE_CONFIG;
