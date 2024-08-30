const pkg = require('./package.json');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const downloader = require('11ty-external-file-downloader');
const CleanCSS = require("clean-css");
const ExifReader = require('exifreader');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addPlugin(downloader, {
    urls: [
      'https://analytics.zacharyc.site/analytics.js'
    ],
    directory: 'public'
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy('./src/**/*.html');
  eleventyConfig.addPassthroughCopy('./src/**/*.css');
  eleventyConfig.addPassthroughCopy('./src/**/*.js');

  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/quotes.json');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/sites.json');

  // format dates
  eleventyConfig.addFilter("fullString", (dateObj) => {
    const year = dateObj.getUTCFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });

  // limit number of idems in a collection
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // version
  eleventyConfig.addShortcode("version", () => pkg.version);

  // filter out tags used for collections
  const collectionTags = ["film", "photo", "collection", "code", "table", "wallpaper"];
	eleventyConfig.addFilter("filterTags", function filterTags(tags) {
		return (tags || []).filter(tag => collectionTags.indexOf(tag) === -1);
	});

  // sort list by a frontmatter value
  eleventyConfig.addFilter("sort", function (list, property) {
    return list.sort((a, b) => {
      const orderA = parseInt(a.data[property]) || 9999;
      const orderB = parseInt(b.data[property]) || 9999;
      return orderA - orderB;
    });
  });

  eleventyConfig.addFilter("loadExif", async function loadExif(src) {
    let file = "./src/images/" + src;
    const data = await ExifReader.load(file);
    const keyValues = {
      camera: `${data["Make"].description} ${data["Model"].description}`,
      lens: data["LensModel"] ? data["LensModel"].description :  '',
      iso: data["ISOSpeedRatings"].description,
      focalLength: data["FocalLength"].description,
      aperture: data["FNumber"].description,
      exposureTime: data["ExposureTime"].description,
    }
		return keyValues;
	});

  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
}
