import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
    },
  };
};
