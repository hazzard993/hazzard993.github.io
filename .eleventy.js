export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "pages",
      output: "_site",
      includes: "../_includes",
    },
  };
};
