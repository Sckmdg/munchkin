import config from '../../config';

export let loaders = [
  {
    test: /\.(js|jsx)$/,
    include: config.path_client,
    use: [
      'babel-loader'
    ],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.(png|jpg|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 15000,
        name: '[name].[ext]'
      }
    }
  },
  {
    test: /\.(woff|woff2|eot|ttf)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000
      }
    }
  }
];
