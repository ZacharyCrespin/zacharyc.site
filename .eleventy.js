module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/code');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/files');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/_redirects');
    eleventyConfig.addPassthroughCopy('./src/404.html');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');
    eleventyConfig.addPassthroughCopy('./src/offline.html');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}