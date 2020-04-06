---
title: "GRASS GIS 6.2.3 released"
date: 2007-11-27T11:36:11+01:00
layout: "news"
author: Admin
---


**The GRASS Development Team announces**

GRASS GIS 6.2.3 released 27 November 2007
-----------------------------------------

We are happy to announce that a new bugfix version of [GRASS
GIS](http://grass.itc.it) has been released today. This release fixes a
number of bugs discovered in the 6.2.2 source code. It is primarily for
stability purposes and adds minimal new features. Besides bug fixes it
also includes a number of new message translations and updates for the
help pages and projection database.

Highlights include further maturation of the GRASS 6 GUI, vector, and
database code. Some improvements have been backported from the GRASS 6.3
development branch where new development continues at a strong pace of
approximately one code commit every hour, including major work on an all
new cross-platform wxPython GUI and a native MS Windows port.

The *Geographic Resources Analysis Support System*, commonly referred to
as GRASS, is a Geographic Information System (GIS) combining powerful
raster, vector, and geospatial processing engines into a single
integrated software suite. GRASS includes tools for spatial modeling,
visualization of raster and vector data, management and analysis of
geospatial data, and the processing of satellite and aerial imagery. It
also provides the capability to produce sophisticated 4D presentation
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
custom parameterization. Strong links are maintained with the
[QuantumGIS](http://www.qgis.org) and [R
Statistics](http://www.r-project.org) projects with integrated GRASS
toolkits available for both.

### Screenshots

-   [Screenshots](http://grass.itc.it/screenshots/index.php) of GRASS
    6.2 in action

### Platforms supported by GRASS 6.2.3

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (with full UNIX support
via Cygwin), Sun Solaris (SPARC/Intel), Silicon Graphics Irix, HP-UX,
DEC-Alpha, AIX, BSD, iPAQ/Linux and other UNIX compliant platforms.
GRASS runs on both 32 and 64 bit systems with large files (\>2GB)
supported by many key modules.

### Software download/CDROM

-   [http://grass.itc.it](http://grass.itc.it/download/index.php)
-   [http://grass.ibiblio.org](http://grass.ibiblio.org/download/index.php)
-   numerous [mirror sites](http://grass.itc.it/mirrors.php)
-   [GRASS on CDROM/DVD](http://grass.itc.it/download/cdrom.php)

The new source code is available now and binary packages for major
operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
<http://grass.itc.it/intro/general.php>, the previous [GRASS
6.0.0](announce_grass600.html), [GRASS
6.2.0](http://grass.itc.it/announces/announce_grass620.html), [GRASS
6.2.1](http://grass.itc.it/announces/announce_grass621.html), and [GRASS
6.2.2](http://grass.itc.it/announces/announce_grass622.html) release
announcements, and the [Wiki collaborative help
system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.2.3

(selected improvements from the more than 70 minor and important fixes)

-   System and Libraries:
    -   **Help pages**: Add support for compressed *man* pages; add new
        examples
    -   **PostgreSQL DBMI driver**: Add support for
        PG\_TYPE\_POSTGIS\_GEOM and views
    -   **Projection database**: Update to EPSG 6.13
-   Modules/Scripts:
    -   **Translations**: Backported new translations from 6.3.cvs
    -   **r.los**: Better support for NULLs in pattern map mask and
        output map
    -   **r.mapcalculator**: Replaced UTF-8 encoded NBSP characters with
        normal ASCII spaces
    -   **r.support**: Fix crash when using reclassed maps
    -   **ps.map**: Fix crash when SQL query is malformed and with EPS
        vpoints
    -   **r.coin, r.report, v.to.db**: More precise conversions for
        square miles, feet, and acres
    -   **v.in.ogr**: Add support for OFTDate, OFTTime, and OFTDateTime
        SQL datatypes
    -   **v.report**: Fix x,y order; add support for z coordinate

For a comprehensive list of changes see the [full
ChangeLog](http://grass.itc.it/grass62/source/ChangeLog_6.2.3.gz) or the
[ChangeLog since
6.2.2](http://grass.itc.it/grass62/source/ChangeLog_6.2.2-6.2.3.gz).

For a complete list of commands available in GRASS 6.2.3 see the [online
manuals](http://grass.itc.it/grass62/manuals/html62_user/index.html) and
the [GRASS 6 module
list](http://grass.itc.it/gdp/grassmanuals/grass63_module_list.pdf).

\
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
software flexibility and evolution rate. The source code is freely
available allowing for immediate customization, examination of the
underlying algorithms, addition of new features, and fast bug fixing.

A repository of many community contributed add-on modules is available
on the [GRASS Wiki](http://grass.osgeo.org/wiki/GRASS_AddOns) site.

GRASS 6.2 release history:

-   GRASS GIS 6.1.0 technology preview released 11 August 2006
-   GRASS GIS 6.2.0beta1 released 28 August 2006
-   GRASS GIS 6.2.0beta2 released 30 August 2006
-   GRASS GIS 6.2.0beta3 released 18 September 2006
-   GRASS GIS 6.2.0RC1 released 26 September 2006
-   GRASS GIS 6.2.0RC2 released 6 October 2006
-   GRASS GIS 6.2.0RC3 released 24 October 2006
-   **GRASS GIS 6.2.0 released 31 October 2006**
-   GRASS GIS 6.2.1RC1 released 6 December 2006
-   **GRASS GIS 6.2.1 released 12 December 2006**
-   GRASS GIS 6.2.2RC1 released 29 May 2007
-   **GRASS GIS 6.2.2 released 16 July 2007**
-   GRASS GIS 6.2.3RC1 released 21 Oct 2007
-   **GRASS GIS 6.2.3 released 27 Nov 2007**


------------------------------------------------------------------------

[The GRASS Development Team](http://grass.itc.it/community/team.php)
