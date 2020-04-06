---
title: "GRASS GIS 6.2.1 released"
date: 2006-12-12T11:36:11+01:00
layout: "news"
author: GRASS Development Team
---


**The GRASS Development Team announces**

GRASS GIS 6.2.1 released 12 December 2006
-----------------------------------------

We are happy to announce that a new stable version of [GRASS
GIS](http://grass.itc.it) has been released today. This release fixes
several bugs discovered in the 6.2.0 source code. It is solely for
stability purposes and adds no new features. Besides bug fixes it also
includes a number of new message translations, updates for the help
pages, and will better handle errors caused by missing or incorrectly
installed support software. It also introduces a new 3D raster module
which was left out of the last release due to time constraints.

GRASS 6.2.0 added hundreds of new features, see the earlier [6.2.0
release announcement](http://grass.itc.it/announces/announce_grass620.html)
(Oct. 2006) for more details.

The *Geographic Resources Analysis Support System*, commonly referred to
as GRASS, is a Geographic Information System (GIS) combining powerful
raster, vector, and geospatial processing engines into a single
integrated software suite. GRASS includes tools for spatial modeling,
visualization of raster and vector data, management and analysis of
geospatial data, and the processing of satellite and aerial imagery. It
also provides the capability to produce sophisticated presentation
graphics and hardcopy maps.

GRASS is currently used around the world in academic and commercial
settings as well as by many governmental agencies and environmental
consulting companies. It runs on a variety of popular hardware platforms
and is Free open-source software released under the terms of the [GNU
General Public License](http://www.gnu.org/copyleft/gpl.html).

GRASS is a proposed founding project of the new [Open Source Geospatial
Foundation](http://www.osgeo.org/). In support of the movement towards
consolidation in the open source geospatial software world, GRASS is
tightly integrated with the latest GDAL/OGR libraries. This enables
access to an extensive range of raster and vector formats, including
OGC-conformal Simple Features. GRASS also makes use of the highly
regarded PROJ.4 software library with support for most known map
projections and the easy definition of new and rare map projections via
custom parameterization.

### Screenshots

-   [Screenshots](http://grass.itc.it/grass62/screenshots/index.php) of
    GRASS 6.2 in action

### Platforms supported by GRASS

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel), Silicon
Graphics Irix, HP-UX, DEC-Alpha, AIX, BSD, iPAQ/Linux and other UNIX
compliant platforms. GRASS runs on both 32 and 64 bit systems with large
files (>2GB) supported by many key modules.

### Software download/CDROM

-   [http://grass.itc.it](http://grass.itc.it/download/index.php)
-   [http://grass.ibiblio.org](http://grass.ibiblio.org/download/index.php)
-   numerous [mirror sites](http://grass.itc.it/mirrors.php)
-   [GRASS on CDROM/DVD](http://grass.itc.it/download/cdrom.php)

The new source code is available now and binary packages for major
operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
<http://grass.itc.it/intro/general.php>, the previous [GRASS
6.0.0](announce_grass600.html) and [GRASS
6.2.0](http://grass.itc.it/announces/announce_grass620.html) release
announcements, and the newly renovated [Wiki collaborative help
system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.2.1

(selected improvements from the more than 100 minor and important fixes)

-   System and Libraries:
    -   Install of include files problem on Solaris (Glynn)
    -   Handle non-standard ETRS_1989 datum name (Paul)
-   Graphical User Interface (GUI):
    -   Fixes for geo-rectifier (Michael)
    -   Zooming fixes (Michael)
    -   Meaningful error messages on failed startup (Michael)
-   Modules/Scripts:
    -   **d.histogram**: clear just the current frame, not the full
        screen (Hamish)
    -   **i.group**: fix subgroup listing (Hamish)
    -   **ps.map**: broken for named paper sizes (Hamish, Glynn)
    -   **v.db.select**: fix errors with the SQL where= option (Hamish)
    -   **v.in.db**: don't copy the entire attribute table with a SQL
        where= query (Martin)
    -   **v.in.ogr**: fix for gcc4.1.x and non-C locale (Andrey Kiselev)
    -   **r.to.rast3elev**: NEW - Completes the 3D raster tool
        set.
        Creates a 3D volume map based on 2D elevation and value raster
        maps.

For a comprehensive list of changes see the
[ChangeLog](http://grass.itc.it/grass62/source/ChangeLog_6.2.1.gz).

For a complete list of commands available in GRASS 6.2.1 see the [online
manuals](http://grass.itc.it/grass62/manuals/html62_user/index.html) and
the [GRASS 6 module
list](http://grass.itc.it/gdp/grassmanuals/grass63_module_list.pdf).


*We are always looking for testers, code developers, and technical
writers to [help us](http://grass.itc.it/devel/index.php) maintain and
accelerate the development cycle.* The GRASS GIS project is developed
under the terms of the [GNU General Public
License](http://www.gnu.org/copyleft/gpl.html) (the GPL) [in the
open](http://grass.itc.it/devel/index.php) by
[volunteers](http://grass.itc.it/community/index.php) the [world
over](http://mapserver.gdf-hannover.de/grassusers/map.phtml). GRASS
differs from many other GIS software packages used in the professional
world in that it is developed and distributed by users for users, mostly
on a volunteer basis, in the open, and is given away for free. Emphasis
is placed on interoperability and unlimited access to data as well as on
software flexibility and evolution rate.

Release history:

-   GRASS GIS 6.1.0 technology preview released 11 August 2006
-   GRASS GIS 6.2.0beta1 released 28 August 2006
-   GRASS GIS 6.2.0beta2 released 30 August 2006
-   GRASS GIS 6.2.0beta3 released 18 September 2006
-   GRASS GIS 6.2.0RC1 released 26 September 2006
-   GRASS GIS 6.2.0RC2 released 6 October 2006
-   GRASS GIS 6.2.0RC3 released 24 October 2006
-   GRASS GIS 6.2.0 released 31 October 2006
-   GRASS GIS 6.2.1RC1 released 6 December 2006
-   GRASS GIS 6.2.1 released 12 December 2006

------------------------------------------------------------------------

[GRASS Development Team](http://grass.itc.it/community/team.php)#
