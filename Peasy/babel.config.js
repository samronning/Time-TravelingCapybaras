module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
};
