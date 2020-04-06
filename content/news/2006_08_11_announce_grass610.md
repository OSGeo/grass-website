---
title: "GRASS GIS 6.1.0 released 11 August 2006"
date: 2006-08-11T11:36:11+01:00
layout: "news"
author: Admin
---

**The GRASS Development Team announces:**


GRASS GIS 6.1.0 released 11 August 2006
---------------------------------------

A new technology preview version of [GRASS GIS](http://grass.itc.it) is
being released today in preparation for the next benchmark release,
GRASS 6.2. This feature release, version 6.1.0, improves upon the
previous stable version of GRASS by adding hundreds of new features as
well as support for the latest GIS data formats.

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
and is Free open source software released under the terms of the [GNU
General Public License](http://www.gnu.org/copyleft/gpl.html).

Joining GRASS's well-developed raster engine the GRASS 6 series
introduced a new topological 2D/3D vector engine featuring support for
vector network analysis and SQL-based DBMS management of linked
attributes. This release improves the integration and functionality of
the raster and vector engines, and 3D raster (voxel) support has been
greatly enhanced.

A new graphical GIS manager and menu system has been implemented, while
the old GUI display manager has been retained and improved for legacy
support. The NVIZ visualization tool has been enhanced to display 3D
vector data and voxel volumes and supports the creation of on-the-fly
MPEG animations. Additional improvements include substantial message
translation (i18n) with support for FreeType fonts, including multi-byte
Asian characters, and tools to allow new project locations to be
automatically generated from input data or EPSG code.

This is the first release of GRASS as a proposed founding project of the
new [Open Source Geospatial Foundation](http://www.osgeo.org/). In
support of the movement towards consolidation in the open source
geospatial software world, GRASS is tightly integrated with the latest
GDAL/OGR libraries. This enables access to an extensive range of raster
and vector formats, including OGC-conformal Simple Features. GRASS also
makes use of the highly regarded PROJ.4 software library with support
for most known map projections and the easy definition of new and rare
map projections via custom parameterization.

### Screenshots

-   [Screenshots](http://grass.itc.it/grass61/screenshots/index.php) of
    GRASS 6.1 in action

### Platforms supported by GRASS:

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel), Silicon
Graphics Irix, HP-UX, DEC-Alpha, AIX, BSD, iPAQ/Linux and other UNIX
compliant platforms. GRASS runs on both 32 and 64 bit systems with large
files (\>2GB) supported by many key modules.

### Software download/CDROM:

-   [http://grass.itc.it](http://grass.itc.it/download/index.php)
-   [http://grass.ibiblio.org](http://grass.ibiblio.org/download/index.php)
-   various [mirror sites](../mirrors.php)
-   [GRASS on CDROM/DVD](../download/cdrom.php)

The new source code is available now, and selected binary distributions
for major operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
[http://grass.itc.it/intro/general.php](../intro/general.php), the
previous [GRASS 6.0.0 Announcement](announce_grass600.html), and the
newly renovated [Wiki collaborative help
system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.1.0

(selected improvements)

-   Numerous bug fixes
    -   see
        [ChangeLog](http://grass.itc.it/grass61/source/ChangeLog_6.1.0.gz)
        text file for details
-   Source code quality/libraries:
    -   GRASS is now in large part ANSI C compliant
    -   Ported [natively to
        MS-Windows](http://mpa.itc.it/radim/wingrass/) (MinGW based)
    -   Included header files improved, many compiler warnings fixed
    -   Compilation: compatibility with GCC 4
    -   [Programmer's
        Manual](http://grass.itc.it/devel/index.php#prog): continued
        doxygen integration and automated extraction into PDF/HTML
        formats. Publicly available for download and perusal.
    -   SUBMITTING, SUBMITTING\_SCRIPTS, SUBMITTING\_TCLTK: Improved
        instructions for code submission
    -   GRASS-SWIG prototype interface added (library bindings for PERL
        and Python)
    -   DBMI: SQLite driver added; SQL parser extended (support for
        expressions, new types, etc.)
    -   DBMI: MySql driver rewritten; MeSql added
    -   Support for long map/mapset names
    -   Raster maps: ZLIB compression bug fixed for tiny maps
    -   Raster maps: optional large file support (LFS, experimental) for
        maps \> 2GB
    -   Display: X11/PNG driver rewritten, added RGB-raster operations
    -   Display: Working towards X-Windows as an optional dependency
        (new multi-platform GUI support)
    -   Display: 100% CPU use during interactive mouse functions fixed
    -   Projection code database: updated to EPSG 6.9
    -   TclTk 8.4 supported for Debian and other platforms using
        threaded libraries
    -   Full FFTW3 support for fast Fourier Transforms
    -   NetBSD configuration fixes
-   New Quality control systems:
    -   New internal GRASS test suite (scripts collection in testsuite/)
    -   New external [GRASS test
        suite](http://www-pool.math.tu-berlin.de/~soeren/grass/GRASS_TestSuite/html/Summary.html)
        (TU Berlin)
    -   New external [GRASS Quality Assessment and monitoring
        system](http://grass.itc.it/mailman/listinfo/grass-qa) (École
        Polytechnique de Montréal and ITC-irst)
-   Graphical User Interface (GUI):
    -   Major improvements in the Tcl/TK based autogenerated GUI
    -   **gis.m**: new GIS manager added as an optional replacement for
        d.m
    -   **d.m**: Legacy support provides access to the latest features
        together with continued system maturity
    -   QGIS integration: fixes for GRASS plugin and toolbox in Quantum
        GIS
    -   Continued behind-the-scenes infrastructure refinements for the
        next generation GUI
-   Modules/Scripts:
    -   Message translation (i18N): added and extended to more than a
        dozen languages, Tcl/Tk GUI and shell script messages are now
        translatable
    -   Documentation/man pages: various fixes and improvements (more
        examples added, including graphics, improved style, new
        introductory pages)
    -   **d.correlate**: [NEW]{.c1} - create a graph of the correlation
        between data layers
    -   **d.graph**: rewritten and extended, merged with d.mapgraph
    -   **d.grid**: added support for geographic grid overlay on non
        Lat/Lon map projections
    -   **d.labels**, **v.label**: d.paint.labels renamed d.labels;
        significant fixes and improvements to the label subsystem
    -   **d.m**: improved layout; added functionality
    -   **d.menu**: [NEW]{.c1} - Creates and displays a menu within the
        active graphics monitor (tool for interactive scripts) (port
        from GRASS 5)
    -   **d.mvmon**: [NEW]{.c1} - move current displayed maps to another
        monitor
    -   **d.out.file**: [NEW]{.c1} - saves active display monitor
        graphics to an image file (PNG,JPEG,\...)
    -   **d.out.gpsdrive**: [NEW]{.c1} - exports display monitor to a
        GpsDrive compatible backdrop image
    -   **d.polar**: [NEW]{.c1} - draws a polar diagram for an angle map
        such as topographic aspect or flow direction
    -   **d.text**: added support for text rotation
    -   **d.vect**: variable vector line width added, random colors for
        points and lines, dynamic width and colors from attribute data
    -   **d.vect.thematic**: [NEW]{.c1} - thematic mapper for vector map
        displays
    -   **g.html2man**: fixes for improved man page output
    -   **g.transform**: [NEW]{.c1} - utility to compute coordinate
        transformations based upon GCPs and output error measurements
    -   **gis.m**: [NEW]{.c1} alternative graphical GIS manager (see
        above)
    -   **i.in.spotvgt**: [NEW]{.c1} - import of SPOT VGT NDVI file into
        a raster map
    -   **i.landsat.rgb**: [NEW]{.c1} - auto-enhancement of colors for
        LANDSAT imagery
    -   **i.ortho.photo/i.rectify**: no longer signals completion with
        email notification
    -   **i.spectral**: fix for finding gnuplot
    -   **i.vpoints**: various fixes, including reverse transform
        overlay of vector maps from target projection
    -   **m.proj**: [NEW]{.c1} - utility to convert coordinates from one
        projection to another (automated frontend for cs2cs)
    -   **NVIZ**: integrated into single user interface; animation
        labels; new fly-through navigation; direct output of animations
        to MPEG with FFMPEG library; menus polished; full Tcl/Tk 8.4
        support
    -   **ps.map**: many improvements (extended RGB support, etc), new
        vector fill patterns including vector legend support
    -   **r.carve**: [NEW]{.c1} - hydrological module for transforming
        vector data of a stream to raster, and subtracts depth from the
        output DEM
    -   **r.flow**: disallow erroneous Lat/Lon calculations
    -   **r.in.srtm**: support for US 1-arcsec tiles
    -   **r.in.wms**: [NEW]{.c1} - download and import data from WMS
        servers
    -   **r.in.xyz**: [NEW]{.c1} - creates a raster map from an
        assemblage of many coordinates using univariate statistics
        (LIDAR/Swath bathymetry import tool)
    -   **r.lake**: [NEW]{.c1} - raises lakes in a DEM from a seed at a
        given water level
    -   **r.mapcalc, r3.mapcalc**: acos(), asin(), pow(), &&& and \|\|\|
        added for more intuitive handling of null data
    -   **r.mask**: [NEW]{.c1} - create a MASK for limiting raster
        operations (rewritten for GRASS 6)
    -   **r.out.gdal**: added support for multiple CREATEKEY and METAKEY
        parameters
    -   **r.out.vtk**: [NEW]{.c1} - converts raster maps into the
        VTK-ASCII format
    -   **r.profile**: improved data input
    -   **r.sim.sediment**: [NEW]{.c1} - overland flow hydrologic
        erosion model based on duality particle-field concept (SIMWE)
    -   **r.sim.water**: [NEW]{.c1} - overland shallow water flow
        hydrologic model based on duality particle-field concept (SIMWE)
    -   **r.sun**: fixed units in description; new shadow algorithm;
        correction factor for shadowing to account for the earth
        curvature
    -   **r.support**: [NEW]{.c1} - raster map layer support module
        (port from GRASS 5)
    -   **r.thin**: fixed maximum iterations for lines
    -   **r.to.rast3**: [NEW]{.c1} - converts 2D raster map slices to
        one 3D raster volume map
    -   **r.to.vect**: add flag to not build topology (for r.in.xyz +
        v.surf.rst)
    -   **r3.\***: code improvements and extended functionality for
        voxel data
    -   **r3.out.vtk**: [NEW]{.c1} - converts 3D raster maps into the
        VTK-ASCII format
    -   **v.db.addcol**: [NEW]{.c1} - adds one or more columns to the
        attribute table connected to a given vector map
    -   **v.db.addtable**: [NEW]{.c1} - creates and adds a new attribute
        table to a given layer of an existing vector map
    -   **v.db.droptable**: [NEW]{.c1} - removes existing attribute
        table of a vector map
    -   **v.db.reconnect.all**: [NEW]{.c1} - reconnect vector maps to a
        new database
    -   **v.db.select**: multiple column support added
    -   **v.db.update**: [NEW]{.c1} - allows the user to assign a new
        value to a column in an attribute table
    -   **v.drape**: [NEW]{.c1} - converts a 2D vector map to a 3D
        vector map by sampling an elevation raster
    -   **v.digit**: new tools added, bugs fixed
    -   **v.external**: GID search added; auto-search of FID added
    -   **v.extrude**: [NEW]{.c1} - extrudes a flat vector objects to 3D
        vector faces of a defined height
    -   **v.in.dxf**: [NEW]{.c1} - rewritten for GRASS 6, 3D support
        added
    -   **v.in.ogr**: \--overwrite flag repaired, selective import with
        WHERE option
    -   **v.in.e00**: fixes
    -   **v.in.gns**: [NEW]{.c1} - imports US-NGA GEOnet Names Server
        (GNS) country files
    -   **v.in.gpsbabel**: [NEW]{.c1} - import Waypoints, Routes, and
        Tracks from a GPS receiver or a GPS ASCII file into a vector map
    -   **v.in.mapgen**: [NEW]{.c1} - imports Mapgen or Matlab vector
        maps (port from GRASS 5)
    -   **v.kernel**: improved speed
    -   **v.lrs.\***: [NEW]{.c1} - Linear Reference System for vector
        line networks
    -   **v.out.ogr**: Faces export added (3D vectors, for KML etc)
    -   **v.patch**: attribute transfer, if table structures are
        identical
    -   **v.rast.stats**: [NEW]{.c1} - calculates univariate statistics
        from a GRASS raster map based on vector objects
    -   **v.report**: [NEW]{.c1} - calculate and report geometry
        statistics for vector maps
    -   **v.surf.rst**: default npmin option fixed; fix for reading
        spatially variable smoothing
    -   **v.to.rast**: added option to compute the direction (angle) of
        lines
    -   **v.to.rast3**: [NEW]{.c1} - converts a vector points map into a
        3D raster map
    -   **v.univar.sh**: [NEW]{.c1} - calculates extended univariate
        statistics on a selected vector map attribute table column
    -   **v.what.vect**: [NEW]{.c1} - upload vector values at positions
        of vector points to a vector's attribute table
    -   Misc. display modules: Increased support for true-color RGB
        decorations
    -   Misc. vector modules: Support for dynamic fill color and dynamic
        feature sizing from DB attribute columns
    -   Scripts: Fixes for awk and related calculation problems for
        various locales
    -   Scripts: Variable test portability issues fixed

<!-- -->

-   GRASS Extensions Manager (GEM): [NEW]{.c1}
    -   Configure, compile and install additional GRASS modules without
        needing the GRASS source code. Simplifies the addition of new
        modules or themed module groups.

For a comprehensive list of changes to modules see the
[ChangeLog\_6.1.0.gz](../grass61/source/) file.

For a complete list of commands available in GRASS 6.1.0 see the [online
manuals](../grass61/manuals/html61_user/index.html).

\
*We are always looking for both testers and developers to
[help](../devel/index.php) us maintain and accelerate this development
cycle. The GRASS GIS project is developed under the terms of the [GNU
General Public License](http://www.gnu.org/copyleft/gpl.html) (the GPL)
[in the open](http://grass.itc.it/devel/index.php) by
[volunteers](http://grass.itc.it/community/index.php) the [world
over](http://mapserver.gdf-hannover.de/grassusers/map.phtml). GRASS
differs from many other GIS software packages used in the professional
world in that it is developed and distributed by users for users; mostly
on a volunteer basis, in the open, and is given away for free. Emphasis
is placed on interoperability and unlimited access to data as well as
software flexibility and evolution rate (both added features and bug
minimization).*

Release history:

-   GRASS GIS 6.1.0beta1 released 14 July 2006
-   GRASS GIS 6.1.0RC1 released 2 Aug 2006
-   GRASS GIS 6.1.0 released 11 August 2006

------------------------------------------------------------------------

[GRASS Development Team](http://grass.itc.it)

