//babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel'],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@constants': './src/libs/constants',
            '@apis': './src/libs/apis',
            '@utils': './src/libs/utils',
            '@stackNav': './src/nav/stackNav',
            '@tabNav': './src/nav/tabNav',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  }
}
