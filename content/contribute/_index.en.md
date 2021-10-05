---
title: "Contribute"
date: 2020-07-28T11:02:05+05:00
icon: "fa fa-user"
description: "Contribute to Open Source Geospatial through GRASS GIS development"
type : "pages"
layout: "list"
---

![2014 OSGeo code print in Wien](/images/gallery/community/2014_vienna_code_sprint_pano_small.jpg "2014 OSGeo code print in Wien")

### Report a bug or enhancement wish
<i class="fa fa-bug fa-11x" style="float:right;padding-left:10px"></i>
Bug reports and feature requests can be submitted as issues in the [GRASS GIS bugtracking system](https://github.com/OSGeo/grass/issues).
All new submissions in the tracker will be automatically forwarded to the GRASS GIS development mailing list.

###### Some recommendations
<small>
<ul>
 <li>Check if the bug you found is still present in the current stable release version or, better, in the "master" version before reporting. If you use an older version, please consider to [upgrade](/download) first.</li>
 <li>Make sure that the developers have all the information needed to reproduce the bug (e.g. explain how to reproduce the bug using the [North Carolina example dataset](/download/data))</li>
 <li>Report only a single bug or feature request with each issue</li>
 <li>Before reporting a bug, please check that it hasn't been reported already in the [GRASS GIS bugtracking system](https://github.com/OSGeo/grass/issues)</li>
</ul>
We recommend to read [How to Report Bugs Effectively](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html) by Simon Tatham.
</small>

### Documentation
<i class="fa fa-file-text fa-9x" style="float:left;padding-right:10px"></i>

Each GRASS GIS module comes with a respective [manual page](/learn/manuals) that provides clear and up-to-date documentation including working examples.

There are also several [tutorials](/learn/tutorials), courses and wikis contributed by different developers and users. These are a very important tool to learn how to use GRASS GIS, too.

**Writing or editing documentation and tutorials is an ideal platform for your first contribution to the project.**

### Translation
<i class="fa fa-language fa-11x" style="float:right;padding-left:10px"></i>
The great worldwide interest in GRASS suggests value in translating GRASS messages to languages other than English. 
The GRASS Development Team is continuously seeking translators.

This is an opportunity to contribute even for non-programmers since messages can be easily translated in a user friendly platform. 
**No programming skills required! See below how to join.**

#### Want to join?

Great! Please subscribe to the dedicated [mailing list](https://lists.osgeo.org/mailman/listinfo/grass-translations)
and check the [messages translation Wiki page](https://grasswiki.osgeo.org/wiki/GRASS_messages_translation)
on how we translate on [**Transifex**](https://www.transifex.com/grass-gis/grass7/).

### Create an Addon
<i class="fa fa-plug fa-9x" style="float:left;padding-right:10px"></i>
Developing your own modules? Great! 

Please upload your add-ons to the **GRASS GIS Addons repository**. In this way, they become available to the community
through the extension manager (g.extension or graphical user interface). 
Here is the full list of [existing addons](/grass7/manuals/addons/) to get inspired.

Further details about how to gain access to our [GitHub Addons repository](https://github.com/OSGeo/grass-addons/) can be
found in [this document](https://trac.osgeo.org/grass/wiki/HowToContribute#WriteaccesstotheGRASSaddonsrepository).

### Contribute to GRASS GIS core
<i class="fa fa-gear fa-11x" style="float:right;padding-left:10px"></i>
The GRASS GIS core consists of the libraries used by GRASS GIS modules and GUI, as well as the code used to develop the Graphic User Interface and the most important modules.

It may be a good idea to send a small posting to the [GRASS developers mailing list](https://lists.osgeo.org/mailman/listinfo/grass-dev) to announce your activities
(maybe someone will join you!). Please read [how to write source code](https://trac.osgeo.org/grass/wiki/HowToProgram) before submitting. 

We'd also appreciate if you could support us with [bug fixing and enhancement wishes](https://github.com/OSGeo/grass/issues).

### Mirror our website

Please consider to [contact us](mailto:grass-web(at)lists.osgeo.org), ideally reporting your [already running mirror](/about/mirrors/).

#### Requirements:
A GRASS mirror site requires around 14 GB space, the space requirements may vary due to the changing presence of precompiled binaries.
If you would like to support the GRASS community, do not hesitate to set up your mirror site.

#### How to set up a mirror site:
The master site hosted at OSGeo (grass.osgeo.org) can be mirrored with the ["rsync"](http://rsync.samba.org/) software protocol, allowing to synchronize mirrors automatically overnight. The idea of using "rsync" mirror software is that only changed files are transferred which minimizes the network traffic.

#### Mirror site setup in greater detail:

* Install the rsync software.
* Check if you can connect - note the two '::' characters (this command should display a welcome message):
  * `rsync -az --port=50026 grass.osgeo.org::grass-website grass-website`
* Define a daily cron-job (in 'crontab') for rsync (example):
  * `/usr/bin/rsync -az --port=50026 grass.osgeo.org::grass-website /mirror/grass-website`  
  This will copy/update the GRASS site to your local directory /mirror/grass-website/ which needs to be made available in your web server.
* Check if the synchronization works the next day(s).
* Announce the new mirror site for this mirror list to [us](mailto:grass-web(at)lists.osgeo.org).

### Other opportunities

#### Google Summer of Code (GSoC)

**GSoC is a stipend program for students by Google.**

Students are encouraged to propose their own ideas. Otherwise, they can choose from the 
[GRASS GSoC Ideas](https://trac.osgeo.org/grass/wiki/GSoC) list. If selected, Google 
will pay a monthly stipend for 3 months.

#### Google Code-in (GCI)

**GCI is an online contest introducing high school students to open source development**.

Students can participate with the [OSGeo organization](https://codein.withgoogle.com/organizations/osgeo/) 
and solve tasks for different projects. Tasks might include documentation, design, coding, etc.

### Cite GRASS GIS 
<i class="fa fa-book fa-7x" style="float:left;padding-right:10px"></i>

If you use GRASS GIS for developing applications, products or for your scientific
work, please [cite](https://grasswiki.osgeo.org/wiki/GRASS_Citation_Repository) 
it properly to raise awareness and visibility of the multiple uses of the
software. 

Have a look at our 
[Google Scholar](https://scholar.google.com/citations?user=gJ0ZB0cAAAAJ)
profile for examples of applications in the most diverse fields.
