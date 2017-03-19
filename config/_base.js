import path from 'path';

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProd = env === 'production';

let pathBase = path.resolve(__dirname, '../');

let config = {
  env: env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: pathBase,
  path_dist: pathBase + '/dist',
  path_client: pathBase + '/app',
  path_server: pathBase + '/server',
  path_endpoint: pathBase + '/app/index.html',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost',
  server_port: process.env.PORT || 5085,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool: !isProd ? 'cheap-module-eval-source-map' : 'source-map'
};

export default config;
