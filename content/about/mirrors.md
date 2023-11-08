---
title: "GRASS GIS Website mirrors"
date: 2022-05-28T10:12:05+02:00
layout: "general"
---

### Official main site via HTTP/FTP

* [Official main site: grass.osgeo.org](https://grass.osgeo.org/) (Portland, USA)

### African Web site mirrors

* [South Africa](https://grass.mirror.ac.za/) (Tier 1,TENET)
* [Morocco](https://grass.marwan.ma/) (Moroccan National Research and Education Network, MARWAN)

### Asian-Indian Web site mirrors

* [India](http://wgbis.ces.iisc.ernet.in/grass/) (Tier 2, Indian Institute of Science, Bangalore)
<!-- * [Japan](http://wgrass.media.osaka-cu.ac.jp/grassh/) (Tier 2, Osaka City University) -->
<!-- * [South Korea](http://pinus.gntech.ac.kr/grass/) (Tier 2, Gyung-Nam National University of Science &amp; Technology) -->

### European Web site mirrors

* [Italy](http://grass.mirror.download.it) (Tier 1)
<!-- * [Czech Republic](http://grass.fsv.cvut.cz) (Tier 2, Czech Technical University in Prague, Department of Geomatics) -->

### Mirror our website
If you would like to support the GRASS community, do not hesitate to set up your mirror site.
Please consider to [contact us](mailto:grass-web(at)lists.osgeo.org), ideally reporting your [already running mirror](/about/mirrors/).

#### Requirements:
A GRASS mirror site requires around 14 GB space, the space requirements may vary due to the changing presence of precompiled binaries.

#### How to set up a mirror site:
The main site hosted at OSGeo (grass.osgeo.org) can be mirrored with the ["rsync"](http://rsync.samba.org/) software protocol, allowing to synchronize mirrors automatically overnight. The idea of using "rsync" mirror software is that only changed files are transferred which minimizes the network traffic.

#### Mirror site setup in greater detail:

* Install the rsync software.
* Check if you can connect - note the two '::' characters:
  * `rsync -az --port=50026 grass.osgeo.org::`
  *  This command should display the following welcome message:
```
      GRASS GIS Website
      grass-website  	GRASS GIS Website
```
* Now generate a mirror folder on your server where to store the GRASS GIS website copy. We assume `/var/www/html/mirror/`:
  * `mkdir /var/www/html/mirror/`
* Change into this folder and copy the website into the subfolder `grass-website`:
  * `cd /var/www/html/mirror/`
  * `rsync -az --port=50026 grass.osgeo.org::grass-website grass-website`
* Once finished, define a daily cron-job (in 'crontab') for rsync (example):
  * `/usr/bin/rsync -az --port=50026 grass.osgeo.org::grass-website /var/www/html/mirror/grass-website`
  This will copy/update the GRASS site to your local directory /var/www/html/mirror/grass-website/ which needs to be made available in your web server.
* Check if the synchronization works the next day(s).
* Announce the new mirror site for this mirror list to [us](mailto:grass-web(at)lists.osgeo.org).
