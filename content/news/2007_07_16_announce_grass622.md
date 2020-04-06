---
title: "GRASS GIS 6.2.2 released"
date: 2007-07-16T11:36:11+01:00
layout: "news"
author: Admin
---


**The GRASS Development Team announces**

GRASS GIS 6.2.2 released 16 July 2007
-------------------------------------

We are happy to announce that a new bugfix version of [GRASS
GIS](http://grass.itc.it) has been released today. This release fixes a
number of bugs discovered in the 6.2.1 source code. It is primarily for
stability purposes and adds minimal new features. Besides bug fixes it
also includes a number of new message translations and updates for the
help pages.

This release is particularly important for Ubuntu users due to a number
of Bourne shell script fixes. Other highlights include a new location
creation GUI with EPSG search and further maturation of the GRASS 6 GUI,
vector, and database code. These improvements have been backported from
the GRASS 6.3 development branch where new development continues at a
strong pace of approximately one code commit every hour, including major
work being done on an all new cross-platform wxPython GUI.

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
[QGIS](http://www.qgis.org) and [R Statistics](http://www.r-project.org)
projects with integrated GRASS toolkits available for each.

### Screenshots

-   [Screenshots](http://grass.itc.it/screenshots/index.php) of GRASS
    6.2 in action

### Platforms supported by GRASS

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel), Silicon
Graphics Irix, HP-UX, DEC-Alpha, AIX, BSD, iPAQ/Linux and other UNIX
compliant platforms. GRASS runs on both 32 and 64 bit systems with large
files (\>2GB) supported by many key modules.

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
6.2.0](http://grass.itc.it/announces/announce_grass620.html), and [GRASS
6.2.1](http://grass.itc.it/announces/announce_grass621.html) release
announcements, and the [Wiki collaborative help
system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.2.2

(selected improvements)

-   System and Libraries:
    -   **DBMI/SQL parser**: Add missing TIME support
    -   **DBF driver**: Add missing SQL TIME support; fix semicolon
        problem
    -   **Sqlite driver**: Add missing \'date\' support; transactions to
        speed up \'execute\'; don\'t crash with SQLITE\_NULL
    -   **QGIS-GRASS DB bug**: Fixes QGIS [bug
        \#448](https://svn.qgis.org/trac/ticket/448)
    -   **geodetic datum**: Enable geodetic datum for Krovak, fixed
        Slovakia Datum (hermannskogel)
    -   **libgis**: Backport false easting/northing test
-   Graphical User Interface:
    -   **GIS.m GUI**: Backport various enhancements, including:
        clickable layer buttons; more robust error handling; main window
        cosmetics; fix the lwidth bug; various typos; browsing for EPSG
        file not updating path to it fixed; browsing for new location
        path fixed
    -   **GUI menus**: Remove non-functional font setting entries; other
        assorted fixes
    -   **GUI startup**: Backport Michael Barton's new EPSG code search
        tool
-   Modules/Scripts:
    -   **scripts**: Backport various fixes; remove all Bashisms from
        Bourne scripts
    -   **d.labels**: Backport fixes for rotated labels
    -   **d.vect**: Nodes are displayed in topo mode
    -   **d.vect.thematic**: Remove Bashisms
    -   **g.mremove**: Fixed to work correctly from the GIS.m GUI
    -   **nviz**: compilation fix for MacOSX
    -   **ps.map**: Fix landscape mode. Fix map scaling when map
        projection is not measured in meters
    -   **r.contour**: Fix segmentation fault
    -   **r.distance**: Allow null distance for area in area
    -   **r.flow**: 3D length fix; 64bit segfault fix
    -   **r.in.bin**: Honour the -s flag for 2-byte and 4-byte data
    -   **r.in.wms**: Fix a number of teething problems; remove bashisms
    -   **r.median**: fix broken internal r.stats call
    -   **r.profile**: Allow data from stdin, exit with error if
        coordinate request is outside the current region settings (was
        reporting bogus data)
    -   **r.proj** bilinear: Fix inverted interpolation expression
    -   **r.reclass.area**: Don\'t leave the clump file behind, label
        support added
    -   **r.tileset**: Fix break due to platform specific units parsing;
        Requires Bash
    -   **v.build.polylines**: Build polylines out of a closed
        boundaries, remove doubled vertices at each node
    -   **v.clean** snap tool: Remove doubled vertices
    -   **v.db.addtable**: fixed error treatment when wrong SQL types
        were defined
    -   **v.dissolve**: Dissolve common boundaries by attribute; fix for
        DBMI error if input map is specified with \@mapset
    -   **v.in.ascii**: Skip over blank lines without error, improve
        robustness
    -   **v.in.gns**: fixed format incompatibility with current GNS
        format
    -   **v.in.gpsbabel**: Attribute and point import fixed for tracks
        and routes; works with Mac OSX
    -   **v.in.region**: Add additional vertex if necessary to ensure
        line segments don\'t exceed 180 degrees longitude and wrap the
        wrong way around the world
    -   **v.lidar.\***: Various fixes backported
    -   **v.lrs.\***: fixes backported + new documentation
    -   **v.report**: Backport fixes for RT bug \#4459 and Wald bug
        \#301
    -   **v.segment**: Make the side\_offset instruction functional
    -   **v.to.db**: Repair the compactness formula parentheses to match
        actual formula
    -   **v.type**: Wrap with a script so all combinations are allowed
        from the GUI menus
    -   **v.what**: Allow multiple input coordinates

For a comprehensive list of changes see the [full
ChangeLog](http://grass.itc.it/grass62/source/ChangeLog_6.2.2.gz) or the
[ChangeLog since
6.2.1](http://grass.itc.it/grass62/source/ChangeLog_6.2.1-6.2.2.gz).

For a complete list of commands available in GRASS 6.2.2 see the [online
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

GRASS 6.2 release history:

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
-   GRASS GIS 6.2.2RC1 released 29 May 2007
-   GRASS GIS 6.2.2 released 16 July 2007


------------------------------------------------------------------------

[The GRASS Development Team](http://grass.itc.it/community/team.php)
