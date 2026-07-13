---
title: "GRASS GIS 8.3.0 released"
date: 2023-06-24T12:42:00-03:00
layout: "news"
author: GRASS Development Team
---

### What's new in a nutshell

The GRASS GIS 8.3.0 release provides more than **360 changes** 
compared to the 8.2 branch. This new minor release
brings in **many fixes and improvements** in GRASS GIS modules and the
graphical user interface (GUI) which now has the 
**single window layout by default**. 
Some of the most relevant changes include: support for **parallelization**
in three raster modules, new options added to several temporal modules, 
and substantial clean-up of `g.extension`, the module that allows the installation
of add-ons. The GUI also received a lot of attention with many fixes and 
items reorganised.
We have also adopted the Clang format and indented most of the C code
accordingly. A lot of effort was put into cleaning up the C/C++ code
to fix almost all compiler warnings.

Translations have been moved from Transifex to
[Weblate](https://weblate.osgeo.org/projects/grass-gis/), which
automatically creates pull requests with the translated chunks.
We'd like to **thank the translators of all languages** for their
long term support!

<a href="/images/news/grass83_news_screenshot.png">
  <img src="/images/news/grass83_news_screenshot.png"
   alt="GRASS GIS 8.3"
   title="GRASS GIS 8.3"
   width="60%" style="float:right;padding-left:15px;padding-top:20px">
</a>

Also, docker images have been updated and moved from the mundialis 
to the OSGeo organization at  <https://hub.docker.com/r/osgeo/grass-gis/>.

We have carried out quite some work in the GitHub Actions: 
we added support for "pre-commit" in order to reduce unnecessary 
runs of the automated checks, there were notable improvements in 
the code checking section and we have activated renovatebot 
to automatically maintain GitHub Actions.

Last but not least, we have significantly improved the automated
release creation to reduce maintainer workload and we have 
gained nine new contributors! Welcome all!!

### Full list of changes and contributors

For all 360+ changes, see our detailed announcement with the full list of
features and bugs fixed at
[GitHub / Releases / 8.3.0](https://github.com/OSGeo/grass/releases/tag/8.3.0).

Thank you all contributors!!

## Download and test!

#### Binaries/Installers download

- Windows
  - [64bit standalone installer](https://grass.osgeo.org/grass83/binary/mswindows/native/WinGRASS-8.3.0-1-Setup.exe)
- macOS
  - [Official Application Bundle](https://cmbarton.github.io/grass-mac/_pages/download-grass/)
- Linux
  - [Debian](https://tracker.debian.org/pkg/grass)
  - [Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable)
  - [Fedora/Centos/EPEL](https://src.fedoraproject.org/rpms/grass)
  - [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)

Further binary packages for other platforms and distributions will follow shortly,
please check at [software downloads](/download/software/index.html).

#### Source code download

- <https://grass.osgeo.org/grass83/source/>
- <https://grass.osgeo.org/grass83/source/grass-8.3.0.tar.gz>
- [From GitHub](https://github.com/OSGeo/grass/releases/tag/8.3.0)

First time users may explore the [**first steps tutorial**](/learn/) after
installation.

**About GRASS GIS**

The Geographic Resources Analysis Support System
([https://grass.osgeo.org/](/)), commonly referred to as GRASS GIS, is
an Open Source Geographic Information System providing powerful raster,
vector and [geospatial processing capabilities](https://grass.osgeo.org/learn/overview/).
It can be used either as a stand-alone application, as backend for other
software packages such as QGIS and R, or in the cloud. It is
distributed freely under the terms of the GNU General Public License (GPL).
GRASS GIS is a founding member of the Open Source Geospatial Foundation (OSGeo).

_The GRASS Dev Team_
