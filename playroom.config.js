module.exports = {
  components: 'playroom-components.ts',
  frameComponent: 'playroom-entry.tsx',
  outputPath: './dist',
  port: 9999,
  widths: [320, 375, 576, 768, 992, 1200],
  exampleCode: `<div>Hello World!</div>`,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['./node_modules/easy-scripts/dist/config/babelrc.js'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
}
