const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};
