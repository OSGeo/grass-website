---
title: "GRASS GIS 8.0.0 released"
date: 2022-01-27T13:38:28+02:00
layout: "news"
author: GRASS Development Team
---

After more than 3 years of development the **new stable release GRASS GIS 8.0**
is available. Efforts were concentrated on making the user experience even better,
providing many new useful additional functionalities to modules and further
improving the graphical user interface. In total, this new release comes with almost
**[1,300 fixes and improvements](https://github.com/OSGeo/grass/compare/7.8.6...8.0.0)**
with respect to the previous 7.8 releases. 

**Thanks to all contributors who made this release possible!!!**

## What's new in a nutshell

<a href="/images/gallery/gui/first-time_user_world.png">
  <img src="/images/gallery/gui/first-time_user_world.png"
   alt="New first time user startup and dark theme support"
   title="New first time user startup and dark theme support"
   width="60%" style="float:right;padding-left:15px;padding-top:20px">
</a>

#### Graphical User Interface (GUI)

GRASS GIS 8.0 graphical user interface comes with an entirely
**new concept of startup mechanism**. Users will no longer 
find any confusing startup screen when launching the software. 
The GRASS GUI data management centerpiece now lies in the enriched
**Data Catalog**, which enables a user-friendly management of
GRASS data hierarchy elements - databases, locations, and mapsets. 
To make the  initial contact easier, all these special terms 
are clarified in the **pre-prepared location** launched when the 
software is run for the first time.
Additionally, some **info bars** appear to help with setting up 
a new location and importing data. 
Thanks to the Data Catalog, the next time GRASS is launched 
**users can switch easily** from the last used mapset to another one.
This makes working with the software easier for both GIS beginners and
existing GRASS users.

#### Raster modules

A new metadata class can now be added to raster maps. We called it *semantic labels*.
Examples of semantic labels are satellite bands (blue, green, red, nir, etc.), dataset
names in remote sensing products (ndvi, evi, lst, etc.), or whatever the user wants to
use to identify raster maps. This new feature brings in a series of advantages.
Users can register time series of satellite images and then select which bands or
semantic labels to work with, for example, estimate NDVI from a Sentinel 2 time series:

`t.rast.mapcalc inputs=test.S2_8,test.S2_4 output=ndvi basename=ndvi expression="float(test.S2_8 - test.S2_4) / (test.S2_8 + test.S2_4)"`

<a href="/images/gallery/lidar/elevation.png">
  <img src="/images/gallery/lidar/elevation.png"
  alt="3D view of a point cloud"
  title="3D view of a point cloud"
  width="30%" style="float:left;padding-right:15px;padding-top:20px">
</a>

Semantic labels might be added either by means of the enhanced 
[r.support](https://grass.osgeo.org/grass80/manuals/r.support.html) 
or with a new module
[r.semantic.label](https://grass.osgeo.org/grass80/manuals/r.semantic.label.html) 
that manages (adds, removes or print) semantic label information
assigned to a single raster map or to a list of raster maps. 
Furthermore, semantic labels can also be passed in a text file
when registering raster maps into time series by means of
[t.register](https://grass.osgeo.org/grass80/manuals/t.register.html).

There's a new raster module, 
[r.in.pdal](https://grass.osgeo.org/grass80/manuals/r.in.pdal.html), 
a PDAL based replacement of r.in.lidar 
that allows to import any point dimension (including user defined 
ones e.g. from PDAL filters), supports 19 binning methods (including
eigenvalues) and point filtering by values in any dimension.

<a href="/images/gallery/remote_sensing/band_references_scheme.png">
  <img src="/images/gallery/remote_sensing/band_references_scheme.png"
   alt="New enhanced classification workflow"
   title="New enhanced classification workflow"
   width="45%" style="float:right;padding-left:10px;padding-top:10px">
</a>

#### Imagery modules:

All raster classification modules now generate signature files with
embedded semantic labels. This allows to apply the signature file from
one imagery scene (group) to any number of other scenes as long as they
consist of the same bands (as identified by their semantic labels).
This makes it so **much easier to classify different imagery groups 
with identical semantic labels**.

The new module 
[i.band.library](https://grass.osgeo.org/grass80/manuals/i.band.library.html) 
stores and prints available semantic labels used for multispectral 
data. So far only system-defined band references are supported, 
i.e., Landsat 5, Landsat 7, Landsat 8 and Sentinel 2.

#### Temporal GIS modules

With the addition of semantic labels, the temporal database was modified to
version 3 and hence, to be able to read and process GRASS 7.x space-time
datasets, users will be prompted to run the new 
[t.upgrade](https://grass.osgeo.org/grass80/manuals/t.upgrade.html) module.
If users want to read space-time datasets newly created in GRASS 8 back
in GRASS 7.x, they can run
[t.downgrade](https://grass.osgeo.org/grass78/manuals/t.downgrade.html).

#### General modules

[g.extension](https://grass.osgeo.org/grass80/manuals/g.extension.html),
the tool allowing to install extensions, received extensive changes
to adapt to the new [addons repository](https://github.com/OSGeo/grass-addons) 
structure with branches pointing to different GRASS major versions.
This change introduced the possibility to **install pull request branches**
making it so much faster to test new changes.

#### Scripting and code quality

Major efforts have been made to port all Python scripts to Python 3.6.
Also, there's a new Python subpackage for working with locations and mapsets.
All Python code has been formatted with `black` and checked against `flake8`.
Most warnings in C code were removed and are now checked and, all code 
is tested with CodeQL.

#### PROJ and GDAL support

PROJ 4 to PROJ 8 compatibility has been implemented. WKT2 can be 
used for CRS definitions. High-accuracy coordinate transformations supported. 
GDAL 3 compatibility improved with speed-ups.

#### Full list of changes and new features

The overview of new features in the 8.0 release series is available at
[new features in GRASS GIS 8.0](https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures80).
See also our detailed announcement with the full list of changes and
bugs fixed at
[https://trac.osgeo.org/grass/wiki/Release/8.0.0-News](https://trac.osgeo.org/grass/wiki/Release/8.0.0-News).

## Download and test!

#### Binaries/Installers download:

- winGRASS 8.0.0/standalone:
  [64bit standalone installer](/grass80/binary/mswindows/native/WinGRASS-8.0.0-1-Setup.exe)
- winGRASS 8.0.0/OSGeo4W:
  [64bit OSGeo4W installer](http://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe)
- Mac
    - [Official Application Bundle](http://grassmac.wikidot.com/downloads)
    - ~~ [MacPorts](https://ports.macports.org/port/grass7/) ~~
- Linux
    - [Debian](https://tracker.debian.org/pkg/grass)
    - [Fedora/Centos/EPEL](https://src.fedoraproject.org/rpms/grass)
    - [Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable/+packages?field.name_filter=grass)
    - ... further binary packages for other Linux distributions will follow shortly, please check at [software downloads](/download/software/index.html#g78x)

#### Source code download:

-   [https://grass.osgeo.org/grass80/source/](/grass80/source/)
-   [https://grass.osgeo.org/grass80/source/grass-8.0.0.tar.gz](/grass80/source/grass-8.0.0.tar.gz)
-   To get the GRASS GIS 8.0.0 source code directly from GitHub, see [here](https://github.com/OSGeo/grass/releases/tag/8.0.0).

First time users may explore the [**first steps tutorial**](/learn/) after
installation.

**About GRASS GIS**

The Geographic Resources Analysis Support System
([https://grass.osgeo.org/](/)), commonly referred to as GRASS GIS, is
an Open Source Geographic Information System providing powerful raster,
vector and [geospatial processing capabilities](https://grass.osgeo.org/learn/overview/).
It can be used either as a stand-alone application or as backend for other
software packages such as QGIS and R geostatistics or in the cloud. It is
distributed freely under the terms of the GNU General Public License (GPL).
GRASS GIS is a founding member of the Open Source Geospatial Foundation (OSGeo).

*The GRASS Development Team, Jan 2022*
