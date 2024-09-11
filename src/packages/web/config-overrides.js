const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );

  config.resolve.modules = [
    path.resolve(__dirname, "./src"),
    path.resolve(__dirname, "../blocks/home/src"),
    path.resolve(__dirname, "../blocks/details/src"),
    "node_modules",
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: ["react-refresh/babel"],
      },
    },
  });

  return config;
};
