const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const downloader = require('11ty-external-file-downloader');
const CleanCSS = require("clean-css");
const ExifReader = require('exifreader');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(filesMinifier);

  // Pass through static files
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images/icons');
  eleventyConfig.addPassthroughCopy('./src/images/static');
  eleventyConfig.addPassthroughCopy('./src/videos');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/sites.json');

  // Download analytics.js to public folder 
  eleventyConfig.addPlugin(downloader, {
    urls: [
      'https://analytics.zacharyc.site/analytics.js'
    ],
    directory: 'public'
  });

  // 11ty Image Optimization
  eleventyConfig.addShortcode("image", async function (src, alt, widths, sizes = "100vw", loading = "eager", photography = false) {
    widths = (widths == "small" ? [400, 600, 800] : [800, 1200, ...(photography ? [1600] : [])]);

		let metadata = await Image(`src/images/${src}`, {
      widths,
      formats: ["avif", "webp", "svg", "jpeg"],
      urlPath: "/images",
      outputDir: "public/images",
		});

		let imageAttributes = {
			alt,
      sizes,
			loading,
      decoding: "async",
		};
		return Image.generateHTML(metadata, imageAttributes);
	});

  // 11ty Image for share images
  eleventyConfig.addFilter("shareImageFilter", async function (src) {
    const alt = ''
		let metadata = await Image(`src/images/${src}`, {
      widths: [1200],
      formats: ["jpg"],
      urlPath: "https://zacharyc.site/images/",
      outputDir: "public/images",
    });
		let imageAttributes = {
			alt
		};

    // Export url
    const imageObject = (Image.generateObject(metadata, imageAttributes))
		return imageObject.img.src;
	});

  // Format dates
  eleventyConfig.addFilter("fullString", (dateObj) => {
    const year = dateObj.getUTCFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });

  // Sort list by frontmatter value
  eleventyConfig.addFilter("sort", function (list, property) {
    return list.sort((a, b) => {
      const orderA = parseInt(a.data[property]) || 9999;
      const orderB = parseInt(b.data[property]) || 9999;
      return orderA - orderB;
    });
  });

  // Filter out tags used for collections
  const collectionTags = ["film", "featuredFilm", "photo", "featuredPhoto", "collection", "code", "featuredCode", "table", "wallpaper", "timer"];
	eleventyConfig.addFilter("filterTags", function filterTags(tags) {
		return (tags || []).filter(tag => collectionTags.indexOf(tag) === -1);
	});

  // Limit number of items in a collection
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // CSS minify filter
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Load Exif data for display on photo pages
  eleventyConfig.addFilter("getExif", async function getExif(src) {
    const data = await ExifReader.load(`./src/images/${src}`);
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

  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
}
