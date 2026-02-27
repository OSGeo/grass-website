# Hugo theme for GRASS website

This repository contains the code of the GRASS project website: [https://grass.osgeo.org/](https://grass.osgeo.org/)

## Contribute

Below some instructions how to contribute by running a local instance for testing
prior to commit changes as pull requests.

You do not need a local build environment for simple text-only changes (for example,
adding a news article). You can edit Markdown and open a pull request. Use one of
the options below when you want to preview the site or test a full build.

### Hugo version in the server

Currently, the website is built with hugo version 0.113.0.

## How to build your own local web server

    git clone https://github.com/OSGeo/grass-website.git

### Install Hugo

Hugo is used to build the website locally. The dev container and Docker build use Hugo 0.113.0 extended (see `.devcontainer/devcontainer.json` and `.env`).

I you choose to install Hugo locally, make sure to install the extended version (see [Hugo installation docs](https://gohugo.io/installation/)).

### Install Node.js and npm

Node.js is used to install the frontend dependencies (see `package.json`).
The dev container and Docker build use Node.js 24 (see `.devcontainer/devcontainer.json`
and `.env`).

Install Node.js and npm using your preferred method for your OS. For example:

    # Debian/Ubuntu (may not be the latest Node.js)
    apt-get update
    apt install nodejs npm

Or using [`nvm`](https://github.com/nvm-sh/nvm):

    nvm install 24
    nvm use 24

### Build pages locally

    cd grass-website

    # Install dependencies
    npm ci

    # Build site
    hugo

Output HTML generated in the /public directory at the root of the `grass-website` directory

### Add or update a dependency

Frontend libraries are managed with npm and are referenced by Hugo via module mounts
in `config.toml`.

From the repository root:

    # Add a runtime dependency
    npm install <package>

    # Or add a dev dependency
    npm install --save-dev <package>

Commit both `package.json` and `package-lock.json`, then verify the site still builds:

    npm ci
    hugo

If you need to use the library in the site (CSS/JS/fonts), make it available to Hugo
by adding a module mount in `config.toml` and then include it from the theme.

Example (JS):

    # config.toml
    [[module.mounts]]
    source = "node_modules/<package>/dist/<file>.min.js"
    target = "assets/js/<package>/<file>.min.js"

    # themes/grass/layouts/partials/head.html
    {{ $lib := resources.Get "js/<package>/<file>.min.js" }}
    <script src="{{ $lib.Permalink }}"></script>

Example (CSS):

    # config.toml
    [[module.mounts]]
    source = "node_modules/<package>/dist/<file>.min.css"
    target = "assets/css/<package>/<file>.min.css"

    # themes/grass/layouts/partials/head.html
    {{ $styles := resources.Get "css/<package>/<file>.min.css" }}
    <link rel="stylesheet" href="{{ $styles.Permalink }}">

### Run server locally

Run hugo development server from the `grass-website` root directory:

    cd grass-website

    hugo server

View the website running at  <http://localhost:1313>

## Dev Container (optional)

This repository includes a Dev Container configuration in `.devcontainer/` to
provide a consistent Hugo/Node setup for local development. This is optional and
works with any IDE or tooling that supports `devcontainer.json` (for example VS
Code Dev Containers or GitHub Codespaces).

In VS Code, use the Command Palette: `Dev Containers: Reopen in Container`.

Open the repository in your Dev Container-enabled tool, then run:

    hugo server --bind 0.0.0.0

The dev container forwards port `1313` by default. View the site at
<http://localhost:1313>

## Test a production-like build with Docker Compose

The `docker-compose.yml` setup builds the site with Hugo (using the versions
defined in `.env`) and serves the generated `public/` directory using Nginx.
This is useful to test a production-like build locally.

Build and run:

    docker compose up --build

By default this publishes the site at <http://localhost:8080> (see `SOURCE_PORT` in
`.env`). Stop with:

    docker compose down

### Notes on the Docker build container

We are using the `hugomods/hugo` Docker image from [hugomods.com](https://docker.hugomods.com/docs/tags/).
The image provides:

* Extended Hugo
* Go
* Node.js
* Git
* Dart Sass

You can also run a one-off build without starting Nginx:

    docker compose run --rm build

## How to add content

Content must be created in .md files using markdown syntax. HTML markup can also be mixed with markdown for more advanced content presentation.

Useful resources:

* [Hugo docs](https://gohugo.io/documentation/)
* [Markdown guide](https://www.markdownguide.org/basic-syntax/)
* [GRASS Website style guide](https://grass.osgeo.org/about/theme/)

### Add a news item

* Head to the news directory
     cd /grass-website/content/news

* Create new md file
     sudo nano mynewsitem.md

* Add the basic header information for Hugo, at least title, date, layout

* Write content in mardown bellow

* Rebuild if needed

      cd ../../
     
      hugo

* Check result at [http://localhost:1313/news/](http://localhost:1313/news/)

### Create a new content page

* Head to a content subdirectory, for example the one used for the About section
     cd /grass-website/content/about

* Create a new md file using the basic hugo header and markdown syntax
 (**more info coming soon**)

* Create a specific template if advance page presentation is needed (see /themes/grass/layouts/)
(**more info coming soon**)

* Edit config.toml and add the new page as a new menu item as a children of the About section, as follows

          [[Languages.en.menu.main]]
          parent = "About"
          name = "My new page"
          URL = "/about/mypage"
          weight = 1

* Rebuild if needed

      cd ../../
     
      hugo

* Check result at [http://localhost:1313/about/mypage](http://localhost:1313/about/mypage)

### Mind SEO

Search engine optimization works like this:

If the md file used for generating the page has a summary, its value is used as page meta description, otherwise the general description defined in `config.toml` is used by default.

### Add new event

* Head to the news directory
     cd /grass-website/content/events

* Create new md file
     sudo nano EVENT_NAME.md

* Use the following header information template for Hugo

  title: "CONFERENCE NAME"
  event:
      start: YYYY-MM-DD
      end: YYYY-MM-DD
  where: CITY, COUNTRY
  website: URL
  layout: "event"
  logo: images/conferences_logos/CONF_LOGO_YEAR.png

* Add your logo to `/grass-website/images/conferences_logos` folder

* Rebuild if needed

      cd ../../
     
      hugo

* Check result at [http://localhost:1313/news/](http://localhost:1313/news/) in the `Next Events` section in the right sidebar.
  Your event will show up only if it is one in the top three from today.

### Submit your changes

Like it? Then please submit your improvements as a new pull request.
