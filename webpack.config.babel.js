// TODO resolve enviorment
import config from './config';
import { entry, output, devServer } from './webpack/options/_common';
import { plugins } from './webpack/options/_plugins';
import { loaders } from './webpack/options/_loaders';

let webpackConfig = {
  devtool: config.compiler_devtool,
  entry,
  output,
  devServer,
  plugins,
  module: {
    rules: loaders
  }
};

export default webpackConfig;
