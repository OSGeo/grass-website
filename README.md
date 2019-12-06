# Hugo-based website for GRASS GIS

## How to build your own

    git clone https://github.com/OSGeo/grass-website.git

### Install Hugo

    apt-get update

    apt install hugo

### Build locally

    cd grass-website

    hugo

Output HTML is usually generated in a /public directory at the root of the `grass-website` directory

### Run locally

Run hugo development server from the `grass-website` root directory:

    cd grass-website

    hugo server

View the website running at  http://localhost:1313


## How to add content

Content must be created in .md files using markdown syntax. HTML markup can also be mixed with markdown for more advanced content presentation.

Useful resources:
 *Hugo [docs](https://gohugo.io/documentation/)
 *Markdown [guide](https://www.markdownguide.org/basic-syntax/)

### Add a news item

 *Head to the news directory
    cd /grass-website/content/news

* Create new md file
    sudo nano mynewsitem.md

* Add the following basic content:
    ---
    title: "My news item title"
    date: 2019-06-12T15:33:16+01:00
    layout: "news"
    author: Your name (or Admin if you prefer)
    ---

    This your news item content, written in markdown

* Rebuild if needed
   cd ../../
   hugo

* Check result at http://localhost:1313/news/

### Create a new content page

*Head to a content subdirectory, for example the one used for the About section
cd /grass-website/content/about

*Create a new md file using the folllowing basic syntax:

   ---
   title: "Your new page title"
    date: 2019-06-12T15:33:16+01:00
   layout: "brand"
   ---

  ## Page title

  ### Pagesubtitle

  text paragraph

  ![example image](../../images/Black_canyon_map.jpg "Black Canyon Map")

* Create a specific template if advance page presentation is needed (see /themes/grass/layouts/)
(more info coming soon)

* Edit config.toml and add the new page as a new menu item as a children of the About section, as follows

          [[Languages.en.menu.main]]
          parent = "About"
          name = "My new page"
          URL = "/about/mypage"
          weight = 1

* Rebuild if needed
   cd ../../
   hugo

* Check result at http://localhost:1313/news/








