import config from '../../config';

const isProduction = config.env === 'production';

export let entry = {
  app: [
    config.path_client
  ]
};

if (!isProduction) {
  entry.app.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.server_host}:${config.server_port}`,
    'webpack/hot/only-dev-server'
  );
}

export let output = {
  filename: '[name].js',
  path: config.path_dist
};

if (!isProduction) {
  output.devtoolModuleFilenameTemplate = 'webpack';
}

export const devServer = {
  historyApiFallback: true,
  stats: 'errors-only',
  host: config.server_host,
  port: config.server_port
};
