module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/code');
    eleventyConfig.addPassthroughCopy('./src/files');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/imgs');
    eleventyConfig.addPassthroughCopy('./src/photography/gallery.css');
    eleventyConfig.addPassthroughCopy('./src/photography/gallery.min.js');
    eleventyConfig.addPassthroughCopy('./src/404.html');
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');
    eleventyConfig.addPassthroughCopy('./src/offline.html');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/service-worker.js');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}