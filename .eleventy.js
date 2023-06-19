const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const downloader = require('11ty-external-file-downloader');
const pkg = require('./package.json');

async function imageShortcode(src, alt, sizes, lazyLoad = false) {
  let metadata = await Image("./src/images/" + src, {
    formats: ["webp", "jpeg", "svg"],
    widths: [150, 300, 600, "auto"],
    urlPath: "/images",
    outputDir: "public/images"
  });
  let imageAttributes = {
    alt,
    sizes,
    loading: lazyLoad ? "lazy" : "eager",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(downloader, {
    urls: [
      'https://analytics.zacharyc.site/tracker.js'
    ],
    directory: 'public'
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  // layouts
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('collection', 'layouts/collection.njk');
  eleventyConfig.addLayoutAlias('photo', 'layouts/photo.njk');

  // format dates
  eleventyConfig.addFilter("shortString", (dateObj) => {
    const year = dateObj.getUTCFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });
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

  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "public"
    },
    templateFormats: [
			"md",
			"njk",
		],
  };
}
