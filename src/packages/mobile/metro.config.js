const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  path.resolve(__dirname, "../blocks/core"),
  path.resolve(__dirname, "../blocks/details/src"),
  path.resolve(__dirname, "../blocks/home/src"),
  path.resolve("node_modules"),
];

module.exports = config;
