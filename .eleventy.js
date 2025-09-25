export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
    },
  };
};
