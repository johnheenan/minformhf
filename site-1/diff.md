---
eleventyNavigation:
  key: diff
  title: Diff
  order: 8


---


## git diff from 'Build Awesome Start' to help adapt form, navbar and css additions to using another template


### Specific Changes

- The symlink from `index.md` to `../README.md` is removed.
- The symlink of `eleventy.config.js` is removed.
- It is not sufficient to remove the `_includes/bricks symlink` and copy over the bricks directory. It should be left and a parallel directory used, such as `_includes_minform` with the bricks directory copied here. Symlink within `site-1` to `../includes` needs to be changed, as shown.
- If using `@anydigital/eleventy-bricks` then `mdAutoRawTags` must be set to false. Instead use `raw` with `endraw` tags as shown in example markdown.
- Various filters and shortcodes are added

'Sveleven' has since been rebranded to 'Build Awesome Start' and `bricks` is now `blades`.

### Initial selected file diffs

```
{% raw %}


diff --git a/LICENSE b/LICENSE
index 5f06ec4..f0eef2d 100644
--- a/LICENSE
+++ b/LICENSE
@@ -1,6 +1,7 @@
 MIT License
 
-Copyright (c) 2016 Anton Staroverov
+Copyright (c) 2016-2026 Anton Staroverov for Svelenty and components
+Copyright (c) 2026 John Heenan for Minform
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal


diff --git a/README.md b/README.md
index 3c013f8..9d9ee14 100644
--- a/README.md
+++ b/README.md
@@ -1,92 +1,81 @@
-# Sveleven
 
-Modern, lightweight Eleventy v4 starter with Tailwind or Pico.css, CMS and multisiting 🥷
+# Minform
 
-![](https://img.shields.io/github/v/release/anydigital/sveleven?color=black&label=)
-![](https://img.shields.io/netlify/93494d69-cb21-4ad0-855f-3748d3741e5c?logo=netlify&labelColor=black&label=)
-[![](https://img.shields.io/github/stars/anydigital/sveleven?label=GitHub)](https://github.com/anydigital/sveleven)
+## Website template starter with markdown and minimalist forms
 
-## Killer features
+A very minimalist approach to adding in forms templating to a website starter template that supports markdown.
 
-1. **Eleventy v4 by default**  
-   <sup>both v4 (default) & v3 supported</sup>
-2. **"Thin client" architecture**  
-   <sup>thanks [eleventy-bricks](https://github.com/anydigital/eleventy-bricks) for reusability</sup>
-3. **Tailwind v4 included**  
-   <sup>with Typography plugin & <i class="fa-solid fa-cube fa-rotate-90"></i> [bricks](https://github.com/anydigital/bricks) theme</sup>
-4. **Sveltia CMS included**  
-   <sup>modern Decap/Netlify CMS successor</sup>
-5. **Multisite support**  
-   <sup>thanks to symlink-based setup</sup>
-6. **One-click start**  
-   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/anydigital/sveleven)
+Provides examples of website template based on markdown and forms for easy automation of form building, using a simple and direct approach that avoids complex tooling and plumbing.
 
----
+Minform is a public website template using [11ty](https://11ty.dev) static website generator.
 
-## How it works?
+Minform is open source with a permissive license. 
 
-**Sveleven** is an advanced version of 🥷 [*Blade*switch](https://bladeswitch.com/) starter:
+Minform is a public web template built on [Sveleven](https://github.com/anydigital/sveleven) with the following additions:
 
-- _BUT_ focusing exclusively on Eleventy v4 and adding Tailwind v4 support.
-- It uses same [eleventy-bricks](https://github.com/anydigital/eleventy-bricks) plugin to symlink `eleventy.config.js` by default (so you don't have to maintain it anymore!)
-- It also uses Nunjucks version of the same _universal_ <i class="fa-solid fa-cube fa-rotate-90"></i> [bricks](https://github.com/anydigital/bricks) theme:
-  - _universal_ means you can switch `.njk` to `.liquid` any time
-  - _universal_ also means you can switch from `tailwind` to `pico.css` or even bare-metal `bricks.css`
+## Added
 
----
+The main addition is a minimalist approach to adding template based forms using two different approaches
 
-## Local development
+- A simpler form addition approach, easier for beginners, that requires attention to reset variable names that are reused.
+- A more abstract form addition approach that uses rendering as soon as convenient and can reuse variable names without reset. This approach is suitable for further adaptation.
+- A minimal implementation of a navigation bar
+- Minimal CSS additions to support above
+- Small number of filters and shortcodes added
+- [htmx](https://htmx.org/) added to simplify templating with only 200 OK server status response handled
+- A cors server can be specified for use in developer mode only as well as in production mode. If cors is used then a server must be configured to handle cors requests.
 
-As simple as:
+No state or login information used.
 
-```sh
-npm install    # dependencies
-npm start      # development
-npm run stage  # serve production version locally
-               # ready to deploy! 🚀
-```
+Using htmx, a backend server is expected to handle standard POST requests and return a simple HTML response for display in a `<div>` of the same page by htmx. The page is not replaced.
 
-CMS will be available locally at `http://localhost:8080/admin/` (or similar port).
 
----
+## Usage
 
-## Showcase
+This is a base template that does not expect direct live use. It is expected template implementations will show live examples. 
 
-https://any.digital/ &nbsp;
-[<i class="fa-solid fa-plus text-gray-300 hover:text-black"></i>](https://github.com/anydigital/sveleven/edit/main/src/index.md){title="Suggest your website started by Sveleven"}
+Due to the enormous number of different usage possibilities requiring adaptation, simulating a backend server or providing a direct example of use with a backend server adds unnecessary complication and potentially confusion.
 
----
+To view development examples:
 
-## More info
+- Clone repository or download a release
+- `npm install`
+- `npm start`
+- Browse to link
 
-<big>Repository: https://github.com/anydigital/sveleven</big>
 
-Found it useful? Give a [![](https://img.shields.io/github/stars/anydigital/sveleven?label=Star)](https://github.com/anydigital/sveleven)
 
-Featured in:
+## Configuration
 
-- https://11tybundle.dev/starters/
-- https://11tybundle.dev/blog/11ty-bundle-83/
-- https://www.11ty.dev/docs/starter/
-- https://sveltiacms.app/en/docs/start#starter-templates
-- https://sveltiacms.app/en/docs/frameworks/eleventy
-- https://any.digital/tricks/11ty/#min-starters
-- https://bladeswitch.com starter
+A simple approach for a backend is to take the form information and send it as an email to a server administrator, such as for a simple contact form or subscribe/unsubscribe form.
 
-Support:
+Developers are expected to use browser developer console and server logs to view server errors during development.
 
-- https://github.com/orgs/anydigital/discussions for questions and ideas
-- https://github.com/anydigital/sveleven/issues for change requests or bug reports
-- https://www.11ty.dev/blog/discord/ for 11ty community support
-- https://sveltiacms.app/en/support for Sveltia CMS community support
+Additional site.yml file variables:
+- `corsprod`, set true to uses cors in production, default`false, no quote around true or false
+- `corsurl` set to server url if using cors with localhost development, such as `corsurl: https://example.com`
+- `formpath`: is the 'script path' and must be set, such as `formpath: /cgi-bin/mailform.cgi`
 
-License: [MIT](https://github.com/anydigital/sveleven/blob/main/LICENSE)
+For localhost development it is common to set `corsurl`. However the cors server must allow cors.
 
-### <span class="font-thin">PS:</span> Why "Sveleven"?
 
-<pre>
-SVELEVEN = <mark>SV</mark>eltia CMS
-           + <mark>ELEVEN</mark>ty SSG
-</pre>
+## The two approaches for using forms
 
-"Sveleven" is simply a portmanteau of "[Sveltia CMS](https://github.com/sveltia/sveltia-cms)" and "[Eleventy SSG](https://github.com/11ty/eleventy)" — two great open-source projects that work together seamlessly.
+The two approaches that can be used for building forms with Minform are:
+
+- A simplified abstraction that is easy for beginners to follow. This approach requires reused variables to be kept clean by resetting after use. Shown `contact.md`
+
+- An example that shows more complex abstraction with convenient potential for more abstraction. This approach dramatically reduces number of variable names that need to be reset after use, by using rendering as soon as convenient. Shown in `contact2.md`.
+
+For the first simpler approach above, it is easy to override or overwrite the configuration values above on a page by page or even within a page. If overwritten, either values should be set each time or old values should be preserved and used to reset site.yaml values. A useful concept is variables to be reused should be kept clean by resetting after use. This approach is shown code for `forms/contact.liquid` as variable names are reused.
+
+For the second more abstract approach, these values can be overridden in frontmatter settings, as shown, and do not overwrite site.yaml values.
+
+
+## Background
+
+There is no need to use a traditional script path showing an apparent directory and apparent script file for `formpath`. This naming style is used in the example for compatibility with many usage examples that expect a CGI specification, which is increasingly uncommon, not necessary and not recommended.
+
+Examples should be provided of various backend server approaches, including scipt CGI, Node Express, Node framework, PHP, Python, Perl PSGI direct, Perl PSGI framework, Perl CGI, FastCGI. Also, examples of configuration for Nginx should be provided for both FastCGI and reverse proxy.
+
+For example, the Perl PSGI specification is flexible enough to allow an app to appear to be a CGI app when it is not (using a reverse proxied persistent PSGI process) or to actually work as a CGI script even though when it is written as a PSGI persistent app. In fact, reverse proxy solutions are now so common it is now common that if a traditional CGI approach is used then FastCGI, a persistent non CGI process, is itself used to launch non persistent CGI scripts, such as for Nginx which cannot launch CGI scripts.


diff --git a/_includes/forms/contact.liquid b/_includes/forms/contact.liquid
new file mode 100644
index 0000000..933f89f
--- /dev/null
+++ b/_includes/forms/contact.liquid
@@ -0,0 +1,53 @@
+{%- liquid
+  assign target = target | mailformResponseTarget:
+  if not title
+    assign title = "Send Email"
+  endif
+  assign recipient = recipient | default: 1
+  assign required = required | default: "name email message agreed"
+  # urlpath may not be blank if reused
+  if urlpath == blank
+    assign urlpath = site.formpath
+    if site.corsprod or not site.prod
+      assign urlpath = urlpath | prepend: site.corsurl
+    endif
+  endif
+  if urlpath == blank
+    echo "MAIL POST URL IS EMPTY! UNLIKLEY THIS WILL WORK"
+  endif
+-%}
+{% if required contains "email" %}{% assign email_required = "required" %}{% assign email = email | default: "Your Email" %}{% endif %}
+{% if required contains "name" %}{% assign name_required = "required" %}{% assign name = name | default: "Your Name" %}{% endif %}
+{% if required contains "message" %}{% assign message_required = "required" %}{% assign message = message | default: "Your Message" %}{% endif %}
+{% if required contains "agreed" %}{% assign agreed_required = "required" %}{% assign agreed = agreed | default: "Agree with privacy policy?" %}{% endif %}
+<form hx-target="#{{ target }}" hx-swap="afterbegin" hx-post="{{ urlpath }}">
+<div class="contact-container">
+  <input type="hidden" name="required" value="{{ required }}" />
+  <input type="hidden" name="subject" value="{{ title }}" />
+  <input type="hidden" name="recipient" value="{{ recipient }}" />
+  <div class="hidden"><label>Botcheck: <input name="botcheck" /></label></div>
+  <div class="hidden"><label>Bottext: <input name="bottext" /></label></div>
+  {% if email %}<label>{{ email }}: <input type="email" name="email" {{ email_required }}></label>{%- endif %}
+  {% if name %}<label>{{ name }}: <input type="text" name="name" {{ name_required }}></label>{% endif %}
+  {% if agreed %}<label>{{ agreed }}: <input type="checkbox" name="agreed" {{ agreed_required }}></label>{% endif %}
+</div>
+  {% if message %}<label>{{ message }}: <textarea name="message" {{ message_required }}></textarea></label>{% endif %}
+<button class="form-button">{{ title }}</button>
+</form>
+{% if target == "internalResponse" %}<div id="internalResponse"></div>{% endif %}
+{%- liquid
+  # clean up globals if file was included instead of rendered
+  if page.rawInput | file_included:
+    assign title=nil
+    assign required=nil
+    assign name=nil
+    assign email=nil
+    assign message=nil
+    assign agreed=nil
+    assign recipient=nil
+    assign name_required=nil
+    assign email_required=nil
+    assign message_required=nil
+    assign agreed_required=nil
+  endif
+-%}


diff --git a/_includes/forms/render-contact.liquid b/_includes/forms/render-contact.liquid
new file mode 100644
index 0000000..eaaba0e
--- /dev/null
+++ b/_includes/forms/render-contact.liquid
@@ -0,0 +1,6 @@
+{% liquid
+  assign mailvar_ = contact | addformurl: formurl
+  renderFile '_includes/forms/contact.liquid' mailvar_
+  assign mailvar_ = nil
+  assign contact = nil
+%}


diff --git a/_includes/forms/source.liquid b/_includes/forms/source.liquid
new file mode 100644
index 0000000..2ca9a49
--- /dev/null
+++ b/_includes/forms/source.liquid
@@ -0,0 +1,4 @@
+<details>
+<summary>Click or tap on this line to show or hide markdown source file at<br>`{{ page.inputPath }}`. Usage notes included.</summary>
+```{% source %}```
+</details>


diff --git a/_includes/styles.css b/_includes/styles.css
index a986098..445d373 100644
--- a/_includes/styles.css
+++ b/_includes/styles.css
@@ -23,9 +23,95 @@
 @layer utilities {
   .prose {
     @apply container p-4 mx-auto;
+    line-height: 1.5;
 
     img {
       @apply inline-block m-0;
     }
   }
+
+
+  .prose pre {
+    line-height: 0.9;
+  }
+
+  nav ul {
+    margin: 0;
+    padding: 0;
+    background-color: #e1e1e1;
+    overflow: auto;
+    width: 100%;
+    height: auto;
+    position: relative;
+    list-style-type: none;
+  }
+
+  nav ul li a {
+    display: block;
+    color: #000;
+    padding: 6px 12px;
+    text-decoration: none;
+    float: left;
+  }
+
+  nav ul li a.active {
+    background-color: #3cbe40;
+    color: white;
+  }
+
+  nav ul li a:hover:not(.active) {
+    background-color: #666;
+    color: white;
+  }
+
+  @media screen and (max-width: 300px) {
+  nav ul li a {
+      text-align: center;
+      float: none;
+    }
+  }
+
+  form .contact-container {
+    display: grid;
+    grid-template-columns: auto auto;
+    grid-gap: 20px;
+  }
+
+  @media only screen and (max-width: 400px) {
+    form .container {
+      grid-template-columns: auto;
+    }
+  }
+
+  form label {
+    color:blue;
+  }
+
+  form button {
+    background: #3badd4;
+    color: #FFFFFF;
+    min-height: 40px;
+    font-weight: bold;
+    border: none;
+    width: 100%;
+  }
+
+  form input {
+    width: 100%;
+    height: 30px;
+    border: 1px solid #3badd4;
+  }
+
+  /* form input[type="checkbox"] {
+    width: 10%;
+    height: 24px;
+  }   */
+
+  form textarea {
+    width: 100%;
+    height: 120px;
+    border: 1px solid #3badd4;;
+  }
+
+
 }



diff --git a/eleventy.config.js b/eleventy.config.js
new file mode 100644
index 0000000..1f08276
--- /dev/null
+++ b/eleventy.config.js
@@ -0,0 +1,155 @@
+import fs from "fs";
+/* Plugins */
+import { RenderPlugin } from "@11ty/eleventy";
+import eleventyBricksPlugin from "@anydigital/eleventy-bricks";
+/* Dynamic plugins */
+let eleventyNavigationPlugin;
+try {
+  eleventyNavigationPlugin = (await import("@11ty/eleventy-navigation")).default;
+} catch (e) {
+  // @11ty/eleventy-navigation not installed
+}
+let pluginTOC;
+try {
+  pluginTOC = (await import("@uncenter/eleventy-plugin-toc")).default;
+} catch (e) {
+  // @uncenter/eleventy-plugin-toc not installed
+}
+/* Libraries */
+import markdownIt from "markdown-it";
+/* Dynamic libraries */
+let slugify;
+try {
+  slugify = (await import("@sindresorhus/slugify")).default;
+} catch (e) {
+  // @sindresorhus/slugify not installed
+}
+let markdownItAnchor;
+try {
+  markdownItAnchor = (await import("markdown-it-anchor")).default;
+} catch (e) {
+  // markdown-it-anchor not installed
+}
+let markdownItAttrs;
+try {
+  markdownItAttrs = (await import("markdown-it-attrs")).default;
+} catch (e) {
+  // markdown-it-attrs not installed
+}
+/* Data */
+import yaml from "js-yaml";
+
+/**
+ * Eleventy Configuration
+ * @param {Object} eleventyConfig - The Eleventy configuration object
+ * @returns {Object} The Eleventy configuration object
+ */
+export default function (eleventyConfig) {
+  const inputDir = eleventyConfig.directories.input;
+
+  /* Jekyll parity */
+  eleventyConfig.addPassthroughCopy("assets");
+  eleventyConfig.addGlobalData("layout", "default");
+  eleventyConfig.setLiquidOptions({ dynamicPartials: true, jsTruthy: true });
+  eleventyConfig.addFilter("relative_url", (content) => content);
+
+  /* Plugins */
+  eleventyConfig.addPlugin(RenderPlugin);
+  if (eleventyNavigationPlugin) eleventyConfig.addPlugin(eleventyNavigationPlugin);
+  eleventyConfig.addPlugin(eleventyBricksPlugin, {
+    mdAutoNl2br: true,
+    mdAutoRawTags: false,
+    autoLinkFavicons: true,
+    siteData: true,
+    filters: [
+      "attr_set",
+      "attr_includes",
+      "merge",
+      "remove_tag",
+      "if",
+      "attr_concat",
+      "fetch",
+      "section",
+      "strip_tag",
+      "unindent",
+    ],
+  });
+  if (pluginTOC) {
+    eleventyConfig.addPlugin(pluginTOC, {
+      ignoredElements: ["sub", ".header-anchor"],
+      ul: true,
+    });
+  }
+
+  /* Libraries */
+  let md = markdownIt({
+    html: true,
+    linkify: true,
+  });
+  if (markdownItAnchor) {
+    md = md.use(markdownItAnchor, {
+      slugify: slugify, // @TODO: TRICKS
+      permalink: markdownItAnchor.permalink.ariaHidden({
+        class: null,
+        renderAttrs: () => ({ "data-is-anchor": true }),
+      }),
+    });
+  }
+  if (markdownItAttrs) md = md.use(markdownItAttrs);
+  // eleventyConfig.setLibrary("md", md);
+  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));
+  eleventyConfig.addFilter("markdownify", (content) => md.render(String(content ?? "")));
+
+  /* Data */
+  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
+
+  /* Build */
+  eleventyConfig.addPassthroughCopy(
+    {
+      _public: ".",
+      ...(inputDir !== "." && { [`${inputDir}/_public`]: "." }),
+    },
+    { expand: true }, // This follows/resolves symbolic links
+  );
+
+  /* Dev tools */
+  // Follow symlinks in Chokidar used by 11ty to watch files
+  eleventyConfig.setChokidarConfig({ followSymlinks: true });
+
+  eleventyConfig.addFilter("dataNavigation", function (nav) {
+    const url = this.page.url;
+    return {
+      nav_pages: nav,
+      current_url: url,
+    };
+  });
+
+  eleventyConfig.addFilter("file_included", function (rawInput) {
+    const re = /{%[\s]+include /s; //if include used then use a test to variables that are global
+    return re.test(rawInput);
+  });
+
+  eleventyConfig.addFilter("mailformResponseTarget", function (target) {
+    if (!target || target == "internal") {
+      return "internalResponse";
+    }
+    return target;
+  });
+
+  eleventyConfig.addFilter("addformurl", function (contact, formurl) {
+    console.log(JSON.stringify(formurl));
+    let urlpath = formurl.formpath;
+    if (formurl.corsprod == "true" || formurl.prod == "false" || !formurl.prod) urlpath = formurl.corsurl + urlpath;
+    return { ...contact, ...{ urlpath: urlpath } };
+  });
+
+  eleventyConfig.addShortcode("source", function (file) {
+    if (!file) file = this.page.inputPath;
+    let contents = fs.readFileSync(file, "utf8");
+    return contents;
+  });
+
+  eleventyConfig.addShortcode("npm_package_version", function () {
+    return process.env.npm_package_version;
+  });
+}


diff --git a/package-lock.json b/package-lock.json
deleted file mode 100644
index 0928c1d..0000000
--- a/package-lock.json
+++ /dev/null


diff --git a/package.json b/package.json
index d4e7570..8769b31 100644
--- a/package.json
+++ b/package.json
@@ -1,7 +1,7 @@
 {
-  "name": "@anydigital/sveleven",
-  "version": "0.8.1",
-  "description": "Ultra-lightweight, modern Eleventy v4 starter (with Tailwind & CMS included!)",
+  "name": "Minform",
+  "version": "0.1.0",
+  "description": "Website Template Minimalist Forms",
   "private": true,
   "type": "module",
   "workspaces": [
@@ -12,7 +12,7 @@
     "stage": "ELTY_OPTIONS='--input=./site-1' npm -w do run stage",
     "build": "ELTY_OPTIONS='--input=./site-1' npm -w do run build"
   },
-  "author": "Anton Staroverov",
+  "author": "John Heenan and others",
   "license": "MIT",
   "devDependencies": {
     "prettier-plugin-jinja-template": "^2.1.0",


diff --git a/site-1/_data/site.yml b/site-1/_data/site.yml
index 888a907..48c08ab 100644
--- a/site-1/_data/site.yml
+++ b/site-1/_data/site.yml
@@ -1,5 +1,5 @@
-title: Sveleven
-description: Modern, lightweight Eleventy v4 starter with Tailwind or Pico.css, CMS and multisiting 🥷
+title: My Site
+description: My sample web site ready for editing
 styles:
   - https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism-tomorrow.min.css
   - https://cdn.jsdelivr.net/npm/prismjs@1/plugins/treeview/prism-treeview.min.css
@@ -9,9 +9,18 @@ scripts:
   - https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js
   - https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js
   - https://cdn.jsdelivr.net/npm/prismjs@1/plugins/treeview/prism-treeview.min.js
+  - https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js
+
 footer: |-
-  Made with <i class="fa-solid fa-heart fa-sm"></i>＋<i class="fa-solid fa-mug-hot align-text-top"></i>
-  by <a href="https://any.digital/" target="_blank"><em>Any</em>digital</a> © 2025–{{ year }}
+  This is a base template with source at <a href="https://github.com/johnheenan/minform" target="_blank">Minform Template</a>
+
+#gtm_id: YOUR_GTM_ID # leave empty or as comment if not using
+gtm_id:
+
+#corsprod: set true to uses cors in production
+corsprod: false
+
+#corsurl: set to server url if using cors, otherwise leave empty or as comment
+corsurl: https://example.com
 
-  [![](https://img.shields.io/github/stars/anydigital/sveleven?label=%E2%9C%A8&logo=%20)](https://github.com/anydigital/sveleven)
-gtm_id: YOUR_GTM_ID
+formpath: /cgi-bin/mailform.cgi


diff --git a/site-1/about.md b/site-1/about.md
new file mode 100644
index 0000000..e93dd4a
--- /dev/null
+++ b/site-1/about.md
@@ -0,0 +1,11 @@
+---
+minform: '[minform](https://gitub.cmm/johnheenan/minform)'
+
+eleventyNavigation:
+  key: about
+  title: About
+  order: 10
+
+---
+
+#  {{ eleventyNavigation.title }}


diff --git a/site-1/contact.md b/site-1/contact.md
new file mode 100644
index 0000000..5a58f4d
--- /dev/null
+++ b/site-1/contact.md
@@ -0,0 +1,60 @@
+---
+title: Contact
+navorder: 2
+
+eleventyComputed:
+  eleventyNavigation:
+    key: "{{ title | downcase | remove: ' ' }}"
+    title: "{{ title | slice: 0, 16}}"
+    order: "{{ navorder }}"
+
+---
+
+# {{ title }}
+
+Same effect as for [Contact 2](/contact2)
+
+<!-- Delete next line to stop offering to show source code -->
+{% include 'forms/source' %}
+
+
+---
+{%
+  include 'forms/contact'
+  title:"SEND MESSAGE"
+  required:"name email message"
+  target:"contactResponse"
+%}
+<div id="contactResponse"></div>
+<!--
+the title default is "SEND EMAIL", if not specified
+the required default is "name email message agreed"
+the name default is "Your Name"
+default target div is an internal div with id #internalresponse, can also use "internal" for internal default
+Same target div can be shared. If internal default is used then same element with same div id is repeated
+-->
+
+---
+{%
+  include 'forms/contact'
+  title:"SUBSCRIBE TO NEWSLETTER"
+  required:"name email"
+  name:"Your Name(s)"
+  target:"subnewsResponse"
+%}
+<div id="subnewsResponse"></div>
+<!--
+Overriding default for name from "Your Name" to "Your Name(s)"
+-->
+
+---
+{%
+  include 'forms/contact'
+  title:"UNSUBSCRIBE FROM NEWSLETTER"
+  required:"email"
+%}
+<!--
+Note no target and div at end for response
+Since a target has been previously defined uses this target and its div
+If no previous target then uses default internal target for response
+-->


diff --git a/site-1/contact2.md b/site-1/contact2.md
new file mode 100644
index 0000000..589dab8
--- /dev/null
+++ b/site-1/contact2.md
@@ -0,0 +1,56 @@
+---
+title: Contact 2
+navorder: 3
+
+# do not use contact or mailvar_ for top level variable names
+
+eleventyComputed:
+  eleventyNavigation:
+    key: "{{ title | downcase | remove: ' ' }}"
+    title: "{{ title | slice: 0, 16}}"
+    order: "{{ navorder }}"
+
+  formurl:
+    prod: "{{ site.prod }}"
+    corsprod: "{{ site.corsprod }}"
+    corsurl: "{{ site.corsurl }}"
+    formpath: "{{ site.formpath }}"
+
+contact_email:
+  title: "SEND MESSAGE"
+  required: "name email message"
+  target: contactResponse
+
+contact_subnews:
+  title: "SUBSCRIBE TO NEWSLETTER"
+  required: "name email"
+  name: "Your Name(s)"
+  target: subnewsResponse
+
+contact_unsubnews_internaltarget:
+  title: "UNSUBSCRIBE FROM NEWSLETTER"
+  required: "email"
+# note there is no target, internal div generated that can be repeated but first one used
+# this is different for first Contact page where an internal target div will not be 
+# generated if a target div has already been ge
+---
+
+# {{ title }}
+
+Same effect as for [Contact](/contact)
+
+<!-- Delete next line to stop offering to show source code -->
+{% include 'forms/source' %}
+
+---
+{% include 'forms/render-contact' contact:contact_email %}
+<div id="{{contact_email.target}}"></div>
+
+---
+
+{% include 'forms/render-contact' contact:contact_subnews %}
+<div id="{{contact_subnews.target}}"></div>
+
+---
+
+{% include 'forms/render-contact' contact:contact_unsubnews_internaltarget %}


diff --git a/site-1/diff.md b/site-1/diff.md
new file mode 100644
index 0000000..c07b52f
--- /dev/null
+++ b/site-1/diff.md
@@ -0,0 +1,20 @@
+---
+eleventyNavigation:
+  key: diff
+  title: Diff
+  order: 8
+
+
+---
+
+
+## git diff from Svelenty to help adapt form, navbar and css additions to using another template
+
+
+### Specific Changes
+
+
+- The symlink from `index.md` to `../README.md` is removed.
+- The symlink of `eleventy.config.js` is removed.
+- If using `@anydigital/eleventy-bricks` then `mdAutoRawTags` must be set to false. Instead use `raw` with `endraw` tags as shown in example markdown.
+- Various filters and shortcodes are added


diff --git a/site-1/index.md b/site-1/index.md
new file mode 100644
index 0000000..7ef99e0
--- /dev/null
+++ b/site-1/index.md
@@ -0,0 +1,14 @@
+---
+eleventyNavigation:
+  key: main
+  title: Main
+  order: 1
+---
+
+# {{ site.title }}
+
+## {{ site.description }}
+
+
+
+

{% endraw %}
```
