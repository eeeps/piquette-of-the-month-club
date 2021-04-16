module.exports = function(eleventyConfig) {
	// Output directory: _site

	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("icon.svg");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
	eleventyConfig.addPassthroughCopy("_headers");
};
