import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../../config';

const isProduction = config.env === 'production';

let htmlWebpackOptions = {
  app: config.path_client
};

export let plugins = [
  new HtmlWebpackPlugin(htmlWebpackOptions),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.env)
    }
  })
];

if (!isProduction) {
  plugins = plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]);
}
