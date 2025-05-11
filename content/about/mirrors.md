---
title: "GRASS GIS Website mirrors"
date: 2025-05-11T10:12:05+02:00
layout: "general"
---

### Official main site

* [Official main site: grass.osgeo.org](https://grass.osgeo.org/) (Portland, USA)

### African Web site mirrors

* [Morocco](https://grass.marwan.ma/) (Tier 1, Moroccan National Research and Education Network, MARWAN)
* [South Africa](https://grass.mirror.ac.za/) (Tier 1, TENET)

### European Web site mirrors

* [Italy](https://grass.mirror.download.it) (Tier 1, Download.it)

### US Web site mirrors

- [USA](https://mirrors.ibiblio.org/grass/html/) (Tier 1, ibiblio)

### Mirror our website

If you would like to support the GRASS community, do not hesitate to set up your mirror site.
Please consider to [contact us](/support/), ideally reporting your [already running mirror](/about/mirrors/).

#### Requirements:
A GRASS mirror site requires around 23 GB space, the space requirements may vary due to the changing presence of precompiled binaries.

#### How to set up a mirror site:

The main site hosted at OSGeo (grass.osgeo.org) can be mirrored with the ["rsync"](https://rsync.samba.org/) software protocol, allowing to synchronize mirrors automatically overnight. The idea of using the "rsync" mirror software is that only changed files are transferred after the initial synchronization which minimizes the network traffic.

#### Mirror site setup in greater detail:

* Install the rsync software.
* Check if you can connect - note the two '::' characters:
  * `rsync -az --port=50026 grass.osgeo.org::`
  * This command should display the following welcome message:

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
  * This will copy/update the GRASS site to your local directory /var/www/html/mirror/grass-website/ which needs to be made available in your web server.
* Check if the synchronization works the next day(s).
* Tell [us](/support/) about your new mirror site.
