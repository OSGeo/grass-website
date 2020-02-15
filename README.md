# Hugo theme for GRASS GIS website

This is the upcoming Web site of the GRASS GIS project (under development).
It is hourly deployed at: https://staging.grass.osgeo.org/

Below some instructions how to contribute by running a local instance for testing
prior to commit changes as pull requests.

## How to build your own local web server

    git clone https://github.com/OSGeo/grass-website.git

### Install Hugo

    apt-get update

    apt install hugo

### Build pages locally

    cd grass-website

    hugo

Output HTML generated in the /public directory at the root of the `grass-website` directory

### Run server locally

Run hugo development server from the `grass-website` root directory:

    cd grass-website

    hugo server

View the website running at  http://localhost:1313


## How to add content

Content must be created in .md files using markdown syntax. HTML markup can also be mixed with markdown for more advanced content presentation.

Useful resources:
 * [Hugo docs](https://gohugo.io/documentation/)
 * [Markdown guide](https://www.markdownguide.org/basic-syntax/)

### Add a news item

 *Head to the news directory
     cd /grass-website/content/news

* Create new md file
     sudo nano mynewsitem.md

* Add the basic header information for Hugo, at least title, date, layout

* Write content in mardown bellow

* Rebuild if needed

      cd ../../
     
      hugo

* Check result at http://localhost:1313/news/

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

* Check result at http://localhost:1313/about/mypage

### Submit your changes

Like it? Then please submit your improvements as a new pull request.
