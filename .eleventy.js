const rss = require("@11ty/eleventy-plugin-rss");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/app.webmanifest');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

  // format dates
  eleventyConfig.addFilter("shortString", (dateObj) => {
    let year = dateObj.getUTCFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[dateObj.getUTCMonth()];
    let day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });
  eleventyConfig.addFilter("fullString", (dateObj) => {
    let year = dateObj.getUTCFullYear();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[dateObj.getUTCMonth()];
    let day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });

  // limit number of idems in a collection
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // version
  eleventyConfig.addShortcode("version", () => "5.1.1");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}