# Hugo theme for GRASS GIS website

This repository contains the code of the upcoming Web site of the GRASS GIS project.
It is deployed every 15 min at: https://grass.osgeo.org/

Mailing list for discussions: https://lists.osgeo.org/mailman/listinfo/grass-web

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
 * [GRASS GIS Website style guide](https://grass.osgeo.org/about/theme/)

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

### Add new event

* Head to the news directory
     cd /grass-website/content/events

* Create new md file
     sudo nano EVENT_NAME.md

* Use the following header information template for Hugo

  title: "CONFERENCE NAME"
  event:
      start: START-DATE
      end: END-DATE
  where: CITY
  website: URL
  layout: "event"
  logo: images/conferences_logos/YOUR_LOGO.png


* Add your logo to `/grass-website/images/conferences_logos` folder

* Rebuild if needed

      cd ../../
     
      hugo

* Check result at http://localhost:1313/news/ in the `Next Events` section in the right sidebar.
  Your event will show up only if it is one in the top three from today.

### Submit your changes

Like it? Then please submit your improvements as a new pull request.
