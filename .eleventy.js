const pkg = require('./package.json');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const Image = require("@11ty/eleventy-img");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");

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
  eleventyConfig.addPlugin(pluginWebc, {
    components: [
			"./src/_components/**/*.webc",
			"npm:@11ty/eleventy-plugin-syntaxhighlight/*.webc",
			"npm:@11ty/eleventy-img/*.webc",
		]
  });
  eleventyConfig.addPlugin(eleventyImagePlugin, {
		// Set global default options
		formats: ["webp", "jpeg", "svg"],
    widths: [150, 300, 600, "auto"],
		urlPath: "/images/",
    outputDir: "public/images/",

		defaultAttributes: {
			loading: "eager",
			decoding: "async"
		}
	});
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/analytics.js');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  // layouts
  eleventyConfig.addLayoutAlias('base', 'base.webc');
  eleventyConfig.addLayoutAlias('default', 'default.webc');
  eleventyConfig.addLayoutAlias('collection', 'collection.njk');
  eleventyConfig.addLayoutAlias('photo', 'photo.webc');
  eleventyConfig.addLayoutAlias('blog', 'blog.njk');

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

  // filter out tags used for collections
  const collectionTags = ["film", "photo", "collection", "post", "code", "table", "wallpaper"];
	eleventyConfig.addFilter("filterTags", function filterTags(tags) {
		return (tags || []).filter(tag => collectionTags.indexOf(tag) === -1);
	});

  // sort list by a frontmatter value
  eleventyConfig.addFilter("sort", function (list, property) {
    return list.sort((a, b) => {
      const orderA = a.data[property] || 0;
      const orderB = b.data[property] || 0;
      return orderA - orderB;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public"
    },
    templateFormats: [
			"njk",
			"webc",
			"md",
		],
  };
}
