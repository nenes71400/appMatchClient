module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [ 'module-resolver', {
        root: ['./src'],
        alias: {
          '~': './src',
          assets: './assets',
          components: './src/components',
          modules: './src/modules',
          /*
          lib: './src/lib',
          types: './src/types',
          constants: './src/constants',
          */
        },
      },],
    ],
  };
};
/*
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Add following to babel.config.js file
    //module.exports = {
      //presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        ['module-resolver', {
          root: ['./src'],
          alias: { '~': './src',
          },
        },],
      ],
    //};
  };
};
*/
