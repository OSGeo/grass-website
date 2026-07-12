# Hugo theme for GRASS website

This repository contains the code of the GRASS project website:
[https://grass.osgeo.org/](https://grass.osgeo.org/)

There are two ways to contribute; pick the path that matches your change:

- **Content contributors** edit or add pages (news, events, text). For simple
  Markdown changes you do **not** need a local build environment. Jump to
  [For content contributors](#for-content-contributors).
- **Website developers** change templates, styling, or the build itself and need
  to preview or build the site. Jump to
  [For website developers](#for-website-developers).

---

## For content contributors

Content lives in `content/` as Markdown (`.md`) files. HTML can be mixed into
Markdown for more advanced presentation. You can edit a file and open a pull
request without installing anything; a maintainer or CI will build the preview.

Useful references:

- [Hugo docs](https://gohugo.io/documentation/)
- [Markdown guide](https://www.markdownguide.org/basic-syntax/)
- [GRASS website style guide](https://grass.osgeo.org/about/theme/)

### Add a news item

1. Go to `content/news/`.
2. Create a new `.md` file (date-prefixed names are the convention, e.g.
   `2026_05_12_release.md`).
3. Start with this front matter, then write the body in Markdown:

   ```yaml
   ---
   title: "GRASS 8.5.0 released"
   date: 2026-05-12T21:38:40+02:00
   layout: "news"
   author: GRASS Development Team
   ---
   ```

4. To include images, add them under `static/images/news/` and reference them
   with an absolute path, for example `![Alt text](/images/news/my_image.png)`.
5. The item appears at [/news/](https://grass.osgeo.org/news/).

### Add an event

1. Go to `content/events/`.
2. Create a new `.md` file using this front matter template:

   ```yaml
   title: "CONFERENCE NAME"
   event:
       start: YYYY-MM-DD
       end: YYYY-MM-DD
   where: CITY, COUNTRY
   website: URL
   layout: "event"
   logo: images/conferences_logos/CONF_LOGO_YEAR.png
   ```

3. Add the logo to `static/images/conferences_logos/`.
4. The event shows in the `Next Events` sidebar on the news page when it is one
   of the next three upcoming events.

### Create a new content page

1. Add a `.md` file under the relevant `content/` subdirectory (for example
   `content/about/`), with the usual Hugo front matter and Markdown body.
2. To add it to the navigation, add a menu entry in `config.toml` under the
   appropriate parent, for example:

   ```toml
   [[Languages.en.menu.main]]
   parent = "About Us"
   name = "My new page"
   URL = "/about/mypage"
   weight = 1
   ```

3. If the page needs custom presentation, a developer can add a template under
   `themes/grass/layouts/`.

### Mind SEO

If a page's front matter defines a `summary`, it is used as the page meta
description; otherwise the site-wide `description` in `config.toml` is used.

### Submit your changes

Open a pull request with your improvements. Thank you!

---

## For website developers

### What the build uses

The site is built with **Hugo Extended** and compiles its styles with **Dart
Sass**, so the plain (non-extended) Hugo will not work. Frontend libraries are
installed with npm, and the pinned Hugo build uses an external Dart Sass binary.

The exact pinned versions of Hugo, Node.js, and Dart Sass are kept in sync
across `.env`, `.devcontainer/devcontainer.json`, and
`.github/workflows/hugo.yml` (Node is also pinned in `.nvmrc`). Check those
files for the current values rather than a number copied into this README,
which would go stale.

Any of the options below gives you a working toolchain. The container options
(A, B, C) bundle Hugo, Node, and Dart Sass for you.

### Option A: Dev Container

A Dev Container config in `.devcontainer/` provides a consistent Hugo/Node setup
and works with any tool that supports `devcontainer.json` (VS Code Dev
Containers, GitHub Codespaces). In VS Code: Command Palette →
`Dev Containers: Reopen in Container`, then:

```sh
hugo server --bind 0.0.0.0
```

Port `1313` is forwarded by default. View the site at <http://localhost:1313>.

### Option B: Docker Compose dev server

Runs the Hugo dev server in a container with live reload and file watching, no
local Hugo/Node needed:

```sh
docker compose -f docker-compose.dev.yml up --build
```

View the site at <http://localhost:1313>.

### Option C: Production-like build with Docker Compose

Builds the site with Hugo (using the versions in `.env`) and serves the
generated `public/` with Nginx, to test a production-like build:

```sh
docker compose up --build          # serves at http://localhost:8080 (SOURCE_PORT in .env)
docker compose down                # stop
docker compose run --rm build      # one-off build without starting Nginx
```

The build uses the `hugomods/hugo` image (Extended Hugo + Go + Node.js + Git +
Dart Sass); see [docker.hugomods.com](https://docker.hugomods.com/docs/tags/).

### Option D: Run Hugo locally

Install **Hugo Extended** (see the
[Hugo installation docs](https://gohugo.io/installation/); the extended build is
mandatory) and Node.js at the versions pinned in `.env` / `.nvmrc` (for example
with [`nvm`](https://github.com/nvm-sh/nvm): `nvm install && nvm use`, which
reads `.nvmrc`), then:

```sh
npm ci        # install frontend dependencies (required before building)
hugo          # build to public/
hugo server   # dev server at http://localhost:1313
```

### How the styling works

Styles are authored in SCSS under `themes/grass/assets/sass/` and compiled by
Hugo's Dart Sass pipeline. The entry point `main.scss` imports the GRASS brand
tokens and Bootstrap variable overrides **before** Bootstrap, so Bootstrap's
defaults yield to the GRASS theme; custom rules in `_styles.scss` load last. The
compilation is wired in `themes/grass/layouts/partials/head.html` (the `toCSS`
call with `includePaths` pointing at `node_modules/bootstrap/scss`), which is
why `npm ci` must run before any build. See
`themes/grass/assets/sass/README.md` for the file-by-file breakdown.

### How to add or update a dependency

Frontend libraries are managed with npm and exposed to Hugo via module mounts in
`config.toml`.

```sh
npm install <package>              # runtime dependency
npm install --save-dev <package>   # dev dependency
```

Commit both `package.json` and `package-lock.json`, then verify the build:

```sh
npm ci
hugo
```

To use the library in the site, mount it into Hugo's assets in `config.toml` and
reference it from the theme. Example (JS):

```toml
# config.toml
[[module.mounts]]
source = "node_modules/<package>/dist/<file>.min.js"
target = "assets/js/<package>/<file>.min.js"
```

```go-html-template
{{/* themes/grass/layouts/partials/head.html */}}
{{ $lib := resources.Get "js/<package>/<file>.min.js" }}
<script src="{{ $lib.Permalink }}"></script>
```

Example (CSS):

```toml
# config.toml
[[module.mounts]]
source = "node_modules/<package>/dist/<file>.min.css"
target = "assets/css/<package>/<file>.min.css"
```

```go-html-template
{{/* themes/grass/layouts/partials/head.html */}}
{{ $styles := resources.Get "css/<package>/<file>.min.css" }}
<link rel="stylesheet" href="{{ $styles.Permalink }}">
```

### Troubleshooting: stale SCSS after editing a partial

Hugo caches the compiled SCSS under `resources/_gen/`, keyed on `main.scss`. If
you edit an imported partial (`_styles.scss`, `_colors.scss`, etc.) and the CSS
does not update, clear the cache and rebuild:

```sh
rm -rf resources/_gen public
hugo
```

CI is unaffected because it builds from a clean checkout.
