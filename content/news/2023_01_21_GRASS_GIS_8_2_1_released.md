---
title: "GRASS GIS 8.2.1 released"
date: 2023-01-21T11:25:51-04:00
layout: "news"
author: Markus Neteler
---

### What's new in a nutshell

The GRASS GIS 8.2.1 release offers over 80 improvements and bug fixes
compared to the previous release, 8.2.0. The update includes a range of
enhancements to the software's modules and graphical user interface.
Some notable module improvements include various bug fixes for `r.kappa`,
the addition of support for unregistering maps from other mapsets in
`t.unregister`, and a fix for cross-validation in `v.surf.rst`. The
graphical user interface has also seen improvements, with issues being
resolved for the database manager, the image group dialog, the import
of PostGIS and SQLite geometry data, the Postscript-based mapping tool,
and the Single-Window GUI toolbar. Additionally, a correction has been added
to the grass.jupyter for bounding box reprojection within the `InteractiveMap` class
and the `GridModule` now cleans up temporary mapsets when an exception occurs.
Concerning the documentation, all addons now register their keywords in
the main keywords index, leading to a better overview of available
functionality. For mobile devices, viewport support and hamburger menu-style
table of content have been added. The PROJ library support received
important fixes for area bounding boxes and longitude estimation.
Compatibility fixes for PDAL 2.5.0 have been added, and updates have
been made to the available docker images, especially the base images
(Ubuntu and Debian). The Windows NSIS installer was also updated to fix
rare installation problems. Overall, this release offers a **more stable
and efficient version of GRASS GIS for users**.

<a href="/images/news/TODO.png">
  <img src="/images/news/TODO.png"
   alt="TODO"
   title="TODO"
   width="60%" style="float:right;padding-left:15px;padding-top:20px">
</a>

### Full list of changes and contributors

For all 80+ changes, see our detailed announcement with the full list of
features and bugs fixed at
[GitHub / Releases / 8.2.1](https://github.com/OSGeo/grass/releases/tag/8.2.1).

Thank you all 16 contributors!

## Download and test!

#### Binaries/Installers download

- Windows
  - [64bit standalone installer](/grass82/binary/mswindows/native/WinGRASS-8.2.1-1-Setup.exe)
- macOS
  - [Official Application Bundle](http://grassmac.wikidot.com/downloads)
- Linux
  - [Debian](https://tracker.debian.org/pkg/grass)
  - [Fedora/Centos/EPEL](https://src.fedoraproject.org/rpms/grass)
  - [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)

Further binary packages for other platforms and distributions will follow shortly,
please check at [software downloads](/download/software/index.html).

#### Source code download

- <https://grass.osgeo.org/grass82/source/>
- <https://grass.osgeo.org/grass82/source/grass-8.2.1.tar.gz>
- [From GitHub](https://github.com/OSGeo/grass/releases/tag/8.2.1)

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

_Markus Neteler and the GRASS Development Team, Jan 2023_
