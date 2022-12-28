const rss = require("@11ty/eleventy-plugin-rss");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const CleanCSS = require("clean-css");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
  let metadata = await Image(src, {
    formats: ["webp", "jpeg"],
    urlPath: "/images/",
    outputDir: "./public/images/"
  });
  let imageAttributes = {
    alt
  };
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(rss);
  // minify HTML
  eleventyConfig.addPlugin(filesMinifier);
  // minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy('./src/consent.js');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
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
  eleventyConfig.addShortcode("version", () => "6.0.5");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}