import fs from "fs";
/* Plugins */
import { RenderPlugin } from "@11ty/eleventy";
import eleventyBladesPlugin from "@anydigital/eleventy-blades";
/* Dynamic plugins */
let eleventyNavigationPlugin;
try {
  eleventyNavigationPlugin = (await import("@11ty/eleventy-navigation")).default;
} catch (e) {
  // @11ty/eleventy-navigation not installed
}
let pluginTOC;
try {
  pluginTOC = (await import("@uncenter/eleventy-plugin-toc")).default;
} catch (e) {
  // @uncenter/eleventy-plugin-toc not installed
}
/* Libraries */
import markdownIt from "markdown-it";
/* Dynamic libraries */
let slugify;
try {
  slugify = (await import("@sindresorhus/slugify")).default;
} catch (e) {
  // @sindresorhus/slugify not installed
}
let markdownItAnchor;
try {
  markdownItAnchor = (await import("markdown-it-anchor")).default;
} catch (e) {
  // markdown-it-anchor not installed
}
let markdownItAttrs;
try {
  markdownItAttrs = (await import("markdown-it-attrs")).default;
} catch (e) {
  // markdown-it-attrs not installed
}
/* Data */
import yaml from "js-yaml";

/**
 * Eleventy Configuration
 * @param {Object} eleventyConfig - The Eleventy configuration object
 * @returns {Object} The Eleventy configuration object
 */
export default function (eleventyConfig) {
  const inputDir = eleventyConfig.directories.input;

  /* Jekyll parity */
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addGlobalData("layout", "default");
  eleventyConfig.setLiquidOptions({ dynamicPartials: true, jsTruthy: true });
  eleventyConfig.addFilter("relative_url", (content) => content);

  /* Plugins */
  eleventyConfig.addPlugin(RenderPlugin);
  if (eleventyNavigationPlugin) eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyBladesPlugin, {
    mdAutoNl2br: true,
    mdAutoRawTags: false,
    autoLinkFavicons: true,
    siteData: true,
    filters: [
      "attr_set",
      "attr_includes",
      "merge",
      "remove_tag",
      "if",
      "attr_concat",
      "fetch",
      "section",
      "strip_tag",
      "unindent",
    ],
  });
  if (pluginTOC) {
    eleventyConfig.addPlugin(pluginTOC, {
      ignoredElements: ["sub", ".header-anchor"],
      ul: true,
    });
  }

  /* Libraries */
  let md = markdownIt({
    html: true,
    linkify: true,
  });
  if (markdownItAnchor) {
    md = md.use(markdownItAnchor, {
      slugify: slugify, // @TODO: TRICKS
      permalink: markdownItAnchor.permalink.ariaHidden({
        class: null,
        renderAttrs: () => ({ "data-is-anchor": true }),
      }),
    });
  }
  if (markdownItAttrs) md = md.use(markdownItAttrs);
  // eleventyConfig.setLibrary("md", md);
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));
  eleventyConfig.addFilter("markdownify", (content) => md.render(String(content ?? "")));

  /* Data */
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  /* Build */
  eleventyConfig.addPassthroughCopy(
    {
      _public: ".",
      ...(inputDir !== "." && { [`${inputDir}/_public`]: "." }),
    },
    { expand: true }, // This follows/resolves symbolic links
  );

  /* Dev tools */
  // Follow symlinks in Chokidar used by 11ty to watch files
  eleventyConfig.setChokidarConfig({ followSymlinks: true });

  eleventyConfig.addFilter("dataNavigation", function (nav) {
    const url = this.page.url;
    return {
      nav_pages: nav,
      current_url: url,
    };
  });

  eleventyConfig.addFilter("file_included", function (rawInput) {
    const re = /{%[\s]+include /s; //if include used then use a test to variables that are global
    return re.test(rawInput);
  });

  eleventyConfig.addFilter("mailformResponseTarget", function (target) {
    if (!target || target == "internal") {
      return "internalResponse";
    }
    return target;
  });

  eleventyConfig.addFilter("addformurl", function (contact, formurl) {
    let urlpath = formurl.formpath;
    if (formurl.corsprod == "true" || formurl.prod == "false" || !formurl.prod) urlpath = formurl.corsurl + urlpath;
    return { ...contact, ...{ urlpath: urlpath } };
  });

  eleventyConfig.addShortcode("source", function (file) {
    if (!file) file = this.page.inputPath;
    let contents = fs.readFileSync(file, "utf8");
    return contents;
  });

  eleventyConfig.addShortcode("npm_package_version", function () {
    return process.env.npm_package_version;
  });
}
