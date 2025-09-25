export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src/pages",
      output: "_jekyll",
      includes: "../includes",
    },
  };
};
