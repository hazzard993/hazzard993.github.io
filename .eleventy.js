import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary(
    "md",
    markdownIt().use(markdownItAnchor).use(markdownItAttrs)
  );

  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
    },
  };
};
