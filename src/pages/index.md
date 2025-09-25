---
layout: layout.html
title: Home
---

# Landing page

```json
{
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "build": "eleventy",
    "dev": "eleventy --serve",
    "serve": "docker run -it --rm -v \"%CD%\":/usr/src/app -p 4000:4000 starefossen/github-pages",
    "deploy": "git subtree push --prefix _site origin gh-pages"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.1.2"
  }
}
```

```diff
  function foo() {
-   const x = 0;
+   const x = 10;
  }
```
