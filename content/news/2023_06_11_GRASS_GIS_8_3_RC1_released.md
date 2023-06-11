---
title: "First release candidate for GRASS GIS 8.3 is out"
date: 2023-06-11T12:42:00-03:00
layout: "news"
author: GRASS Development Team
---

### What's new in a nutshell

The GRASS GIS 8.3.0RC1 release provides more than 360 improvements 
and fixes with respect to the 8.2 branch. This new minor release
brings in many fixes and improvements in GRASS GIS modules and the
graphical user interface (GUI) which now has the 
**single window layout by default**. 
Some of the most relevant changes include: support for parallelization
in three raster modules, new options added to different temporal modules, 
and substantial clean-up of g.extension, the module alowing to install 
addons. The GUI also received a lot of attention with many fixes and 
items being re-organized.
Furthermore, we have adopted Clang-Format and indented most of C code 
accordingly. A lot of effort has been put in cleaning up of C/C++ code 
to fix almost all compiler warnings.

Tanslations were moved from Transifex to 
[Weblate](https://weblate.osgeo.org/projects/grass-gis/), that 
automatically creates pull requests with the translated chunks. 
We'd like to thank translators of all languages for your long-term 
support!! 

Also, docker images have been updated and moved from mundialis 
organization to <https://hub.docker.com/r/osgeo/grass-gis/>.

We have carried out quite some work in the GitHub Actions: 
we added support for "pre-commit" in order to reduce unnecessary 
runs of the automated checks, there were notable improvements in 
the code checking section and we have activated renovatebot 
to automatically maintain GitHub Actions.

Last but not least, we have significantly improved the automated
release creation to reduce maintainers burden and we have 
gained nine new contributors! Welcome!!

<a href="">
  <img src=""
   alt="GRASS GIS 8.3"
   title="GRASS GIS 8.3"
   width="60%" style="float:right;padding-left:15px;padding-top:20px">
</a>

### Full list of changes and contributors

For all 360+ changes, see our detailed announcement with the full list of
features and bugs fixed at
[GitHub / Releases / 8.3.0RC1](https://github.com/OSGeo/grass/releases/tag/8.3.0RC1).

Thank you all contributors!!

## Download and test!

#### Binaries/Installers download

- Windows
  - [64bit standalone installer]()
- macOS
  - [Official Application Bundle](http://grassmac.wikidot.com/downloads)
- Linux
  - [Debian](https://tracker.debian.org/pkg/grass)
  - [Fedora/Centos/EPEL](https://src.fedoraproject.org/rpms/grass)
  - [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)

Further binary packages for other platforms and distributions will follow shortly,
please check at [software downloads](/download/software/index.html).

#### Source code download

- <https://grass.osgeo.org/grass83/source/>
- <https://grass.osgeo.org/grass83/source/grass-8.3.0RC1.tar.gz>
- [From GitHub](https://github.com/OSGeo/grass/releases/tag/8.3.0RC1)

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