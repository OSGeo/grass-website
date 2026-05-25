# GRASS GIS Website Theme

This repository contains the source code for the official **GRASS GIS project website**: [https://grass.osgeo.org/](https://grass.osgeo.org/)

---

## 🛠 Contribution Guide

Follow these instructions to run a local instance of the site for testing before submitting pull requests.

### Environment Requirements
* **Hugo Version:** The website is currently built with **Hugo v0.113.0**.

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/OSGeo/grass-website.git](https://github.com/OSGeo/grass-website.git)
    cd grass-website
    ```

2.  **Install Hugo:**
    ```bash
    sudo apt-get update
    sudo apt install hugo
    ```

3.  **Build the project:**
    This generates static HTML in the `/public` directory.
    ```bash
    hugo
    ```

4.  **Run development server:**
    Launch the server with live reloading:
    ```bash
    hugo server
    ```
    Access the site at: [http://localhost:1313](http://localhost:1313)

---

## ✍️ Adding Content

Content is managed via `.md` files using Markdown. You may also use HTML markup for advanced formatting.

* [Hugo Documentation](https://gohugo.io/documentation/)
* [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
* [GRASS Website Style Guide](https://grass.osgeo.org/about/theme/)

### News Items
1.  Go to `content/news/`.
2.  Create a new file: `mynewsitem.md`.
3.  Add the basic Hugo header (Front Matter) including `title`, `date`, and `layout`.
4.  Write your content in Markdown below the header.
5.  Check the result at [http://localhost:1313/news/](http://localhost:1313/news/).

### Content Pages
1.  Go to the desired subdirectory (e.g., `content/about/`).
2.  Create a new `.md` file with Hugo header and Markdown content. (**More info coming soon**).
3.  If advanced presentation is required, create a template in `/themes/grass/layouts/`. (**More info coming soon**).
4.  Update `config.toml` to add the page to the menu:
    ```toml
    [[Languages.en.menu.main]]
    parent = "About"
    name = "My new page"
    URL = "/about/mypage"
    weight = 1
    ```

### Events
1.  Go to `content/events/`.
2.  Create a file named `EVENT_NAME.md`.
3.  Use the following template for the header:
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
4.  Add your logo to `/images/conferences_logos/`.
5.  **Note:** Events appear in the "Next Events" sidebar if they are among the top three upcoming dates.

---

## 📈 Search Engine Optimization (SEO)

* **Meta Descriptions:** If the `.md` file contains a `summary`, it is used as the meta description.
* **Default:** If no summary is found, the general description defined in `config.toml` is used.

---

## 🚀 Submitting Changes

If your local tests are successful, please submit your improvements as a **Pull Request**.

---
