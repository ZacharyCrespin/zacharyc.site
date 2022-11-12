const rss = require("@11ty/eleventy-plugin-rss");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");
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
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/app.webmanifest');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/main.css');
  eleventyConfig.addPassthroughCopy('./src/main.js');
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
  eleventyConfig.addShortcode("version", () => "5.2.1");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}