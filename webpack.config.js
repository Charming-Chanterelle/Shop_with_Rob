module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/public`,
  },
  module: {
    rules: [
    //   {
    //     test: /(\.css)$/,
    //     loaders: ['raw-loader', 'css-loader'],
    //   },
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
