const eleventyVue = require("@11ty/eleventy-plugin-vue");
const htmlmin = require('html-minifier')
const now = String(Date.now())


module.exports = function(eleventyConfig){
   eleventyConfig.setUseGitIgnore(false)
   eleventyConfig.addWatchTarget('./_tmp/style.css')

   eleventyConfig.addPlugin(eleventyVue);

   eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
   eleventyConfig.addPassthroughCopy('images')
   eleventyConfig.addPassthroughCopy('admin') 

   eleventyConfig.addShortcode('version', function () {
      return now
    })

    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (
        process.env.ELEVENTY_PRODUCTION &&
        outputPath &&
        outputPath.endsWith('.html')
      ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified
      }
      return content
  })
};