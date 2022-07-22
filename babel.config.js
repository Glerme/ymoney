module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          cwd: "babelrc",
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        },
      ],
    ],
  };
};
