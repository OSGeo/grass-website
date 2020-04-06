---
title: "GRASS GIS 6.2.0 released"
date: 2006-10-31T11:36:11+01:00
layout: "news"
author: Admin
---

**The GRASS Development Team announces**

GRASS GIS 6.2.0 released 31 Oct 2006
------------------------------------

We are happy to announce that a new stable version of [GRASS
GIS](http://grass.itc.it) has been released today. This release adds
hundreds of new features, support for the latest GIS data formats, and
includes new translations for many languages.

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

Joining GRASS's well-developed raster engine, the GRASS 6 series
introduced a new topological 2D/3D vector engine featuring support for
vector network analysis and SQL-based DBMS management of linked
attributes. This new release improves the integration and functionality
of the raster and vector engines, and greatly enhances 3D raster volume
(voxel) support.

Additionally, this release debuts a new graphical GIS manager and menu
system, while an improved version of the old GUI display manager has
been retained for legacy support. The NVIZ visualization tool has been
enhanced to display 3D vector data and voxel volumes, and now supports
the creation of on-the-fly MPEG animations. Further improvements include
substantial message translations (i18n) with support for FreeType fonts,
including multi-byte Asian characters, and the inclusion of tools to
create new project locations automatically given a georeferenced data
file or EPSG code.

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
<http://grass.itc.it/intro/general.php>, the previous [GRASS 6.0.0
Announcement](announce_grass600.html), and the newly renovated [Wiki
collaborative help system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.2.0

(selected improvements)

-   Numerous bug fixes
    -   see the ChangeLogs
        ([6.1](http://grass.itc.it/grass61/source/ChangeLog_6.1.0.gz),
        [6.2](http://grass.itc.it/grass62/source/ChangeLog_6.2.0.gz))
        for details
-   Source code quality/libraries:
    -   The GRASS code base is now in large part ANSI C compliant
    -   Ported [natively to
        MS-Windows](http://mpa.itc.it/radim/wingrass/) (MinGW based)
    -   Source code header files: improved, many compiler warnings fixed
    -   Compilation: compatible with GCC 4.x
    -   [Programmer's
        Manual](http://grass.itc.it/devel/index.php#prog): continued
        Doxygen integration and automated generation into PDF and HTML
        formats. Publicly available for download and perusal.
    -   Improved policies for code submission specified in the
        SUBMITTING files
    -   GRASS-SWIG prototype interface added (library bindings for Perl
        and Python)
    -   DBMI: SQLite driver added; SQL parser extended (support for
        expressions, new types, etc.)
    -   DBMI: MySql driver rewritten; MeSql added
    -   Support for long map/mapset names
    -   Raster maps: ZLIB compression bug fixed for tiny maps
    -   Raster maps: optional large file support (LFS, experimental) for
        maps > 2GB
    -   Display: X11/PNG driver rewritten, added RGB-raster operations
    -   Display: Movement toward X-Windows as an optional dependency
        (new multi-platform GUI support)
    -   Display: High CPU use during interactive mouse functions fixed
    -   Projection code database: updated to EPSG 6.11.2
    -   Tcl/Tk 8.4 support for Debian and other platforms using threaded
        libraries
    -   Full FFTW3 support for fast Fourier transforms
    -   NetBSD configuration fixes
-   New quality control systems:
    -   New internal GRASS test suite (scripts collection in
        "`testsuite/`")
    -   New external [GRASS test
        suite](http://www-pool.math.tu-berlin.de/~soeren/grass/GRASS_TestSuite/html_grass-6.2/)
        (TU Berlin)
    -   New external [GRASS Quality Assessment and monitoring
        system](http://web.soccerlab.polymtl.ca/project-manager/grass-website/)
        (École Polytechnique de Montréal and ITC-irst)
    -   CVS-commit reports into [IRC '#grass'
        channel](irc://irc.freenode.net/grass) via [CIA - The open
        source informant](http://cia.navi.cx/stats/project/GRASS)
-   Graphical User Interface (GUI):
    -   All modules: Major improvements in the auto-generated GUIs
    -   **gis.m**: NEW - GIS manager added as a replacement for
        **d.m** (optional)
    -   **d.m**: Legacy support provides access to the latest features
        while preserving code maturity
    -   QGIS integration: fixes for the GRASS plugin and toolbox
        available from [Quantum GIS](http://www.qgis.org)
    -   Continued behind-the-scenes infrastructure refinements for the
        next generation GUI
-   GRASS Extensions Manager (GEM): NEW
    -   Configure, compile and install additional GRASS modules without
        needing the GRASS source code. Simplifies the addition of new
        modules or themed module groups.
-   Modules/Scripts:
    -   Message translation (i18N): added and extended to more than a
        dozen languages, Tcl/Tk GUI and shell script messages are now
        translatable
    -   Documentation/man pages: various fixes and improvements (more
        examples added, including graphics, improved style, new
        introductory pages)
    -   Raster modules: improved support for meta-data and map history
    -   **d.correlate**: NEW - create a graph of the correlation
        between data layers
    -   **d.graph**: rewritten and extended, merged with d.mapgraph;
        support for symbols
    -   **d.grid**: added support for geographic grid overlay on non
        lat/lon map projections and display of coordinate values
    -   **d.labels**, **v.label**: d.paint.labels renamed d.labels;
        significant fixes and improvements to the label subsystem
    -   **d.m**: improved layout; added functionality
    -   **d.menu**: NEW - creates and displays a menu within the
        active graphics monitor (tool for interactive scripts) (port
        from GRASS 5)
    -   **d.mvmon**: NEW - moves displayed maps to another
        monitor
    -   **d.out.file**: NEW - saves active display monitor
        graphics to an image file (PNG,JPEG,...)
    -   **d.out.gpsdrive**: NEW - exports display monitor to a
        [GpsDrive](http://www.gpsdrive.cc) compatible backdrop image
    -   **d.polar**: NEW - draws a polar diagram for an angle map
        such as topographic aspect or flow direction
    -   **d.rast.arrow**: many enhancements, support for magnitude as
        well as 360 degree directional inputs
    -   **d.text**: added support for text rotation
    -   **d.vect**: variable vector line width added, random colors for
        points and lines, dynamic width and colors from attribute data
    -   **d.vect.thematic**: NEW - customizable thematic mapper
        for vector map displays
    -   **g.html2man**: fixes for improved man page output
    -   **g.transform**: NEW - utility to compute coordinate
        transformations based upon GCPs, including error analysis
    -   **gis.m**: NEW alternative graphical GIS manager (see
        above)
    -   **i.in.spotvgt**: NEW - import SPOT-VGT NDVI satellite
        imagery into a raster map
    -   **i.landsat.rgb**: NEW - auto-enhancement of colors for
        LANDSAT imagery
    -   **i.ortho.photo**, **i.rectify**: no longer signal completion
        with email notification
    -   **i.spectral**: fix for finding `gnuplot`
    -   **i.points**, **i.vpoints**: various fixes, including reverse
        transform overlay of vector maps from the target projection
    -   **m.proj**: NEW - utility to convert coordinates from one
        projection to another (automated frontend for `cs2cs`)
    -   **NVIZ**: integrated into single user interface; animation
        labels; new fly-through navigation; direct output of animations
        to MPEG with FFMPEG library; menus polished; full Tcl/Tk 8.4
        support
    -   **ps.map**: many improvements (extended RGB support, etc), new
        vector fill patterns including vector legend support
    -   **r.carve**: NEW - hydrologic module for transforming
        vector stream data into a raster map, including the subtraction
        of stream depth from the output DEM
    -   **r.flow**: block erroneous Lat/Lon calculations
    -   **r.in.srtm**: support for US 1-arcsec tiles
    -   **r.in.wms**: NEW - download and import data from WMS
        servers
    -   **r.in.xyz**: NEW - creates a raster map from an
        assemblage of many coordinates using univariate statistics
        (LIDAR/Swath bathymetry import tool)
    -   **r.lake**: NEW - raises lakes in a DEM from a seed at a
        given water level
    -   **r.le**: many stability fixes
    -   **r.mapcalc**, **r3.mapcalc**: acos(), asin(), pow(), &&& and
        ||| added for more intuitive handling of null data
    -   **r.mask**: NEW - create a MASK for limiting raster
        operations (port from GRASS 5)
    -   **r.out.gdal**: added support for multiple CREATEKEY and METAKEY
        parameters
    -   **r.out.vtk**: NEW - converts raster maps into the
        VTK-ASCII format for 3D visualization
    -   **r.profile**: improved handling of input data
    -   **r.sim.sediment**: NEW - overland flow hydrologic
        erosion model based on duality particle-field concept (SIMWE)
    -   **r.sim.water**: NEW - overland shallow water flow
        hydrologic model based on duality particle-field concept (SIMWE)
    -   **r.sun**: fixed units in description; new shadow algorithm;
        correction factor for shadowing to account for the Earth's
        curvature
    -   **r.support**: NEW - raster map layer support module
        (port from GRASS 5)
    -   **r.thin**: fixed maximum iterations for lines
    -   **r.to.rast3**: NEW - converts 2D raster map slices to
        one 3D raster volume map
    -   **r.to.vect**: add flag to not build topology (for *r.in.xyz* +
        v.surf.rst)
    -   **r3.***: many code improvements and extended functionality for
        3D raster volume (voxel) data
    -   **r3.cross.rast**: NEW - Creates a cross section 2D
        raster map from a g3d raster volume map based on a 2D elevation
        map
    -   **r3.out.vtk**: NEW - converts 3D raster maps into the
        VTK-ASCII format for visualization
    -   **v.centroids**: NEW - adds missing centroids to a vector
        map's closed area boundaries
    -   **v.db.addcol**: NEW - creates one or more columns in the
        attribute table connected to a vector map
    -   **v.db.addtable**: NEW - creates a new attribute table
        and connects it to an existing vector map
    -   **v.db.droptable**: NEW - removes an existing attribute
        table from a vector map
    -   **v.db.reconnect.all**: NEW - reconnect vector maps to a
        new database
    -   **v.db.select**: multiple column support added
    -   **v.db.update**: NEW - allows the user to assign a new
        value to a column in an attribute table
    -   **v.drape**: NEW - converts a 2D vector map into a 3D
        vector map by sampling an elevation raster
    -   **v.digit**: new layout, tools added, bugs fixed
    -   **v.dissolve**: NEW - dissolve boundaries between
        adjacent areas in a vector map
    -   **v.external**: GID search added; auto-search of FID added
    -   **v.extrude**: NEW - extrudes flat vector objects into 3D
        vector faces of a defined height
    -   **v.in.dxf**: NEW - rewritten for GRASS 6, support for 3D
        features added
    -   **v.in.ogr**: repaired the `--overwrite` flag, selective import
        with WHERE option
    -   **v.in.e00**: various fixes
    -   **v.in.gns**: NEW - imports US-NGA GEOnet Names Server
        (GNS) country files
    -   **v.in.gpsbabel**: NEW - import Waypoints, Routes, and
        Tracks from a GPS receiver or a GPS ASCII file into a vector map
        (supports many GPS formats)
    -   **v.in.mapgen**: NEW - imports Mapgen or Matlab vector
        maps (port from GRASS 5)
    -   **v.kernel**: speed improvements
    -   **v.lrs.***: NEW - Linear Reference System for vector
        line networks
    -   **v.out.ogr**: 3D 'face' export added (3D vectors, for Google
        Earth KML format, etc.)
    -   **v.out.vtk**: NEW VTK vector export
    -   **v.patch**: attribute transfer, if table structures are
        identical
    -   **v.rast.stats**: NEW - calculates univariate statistics
        from a GRASS raster map based on vector objects
    -   **v.report**: NEW - calculates and reports geometry
        statistics for vector maps
    -   **v.surf.rst**: default `npmin` option fixed; fix for reading
        spatially variable smoothing parameter
    -   **v.to.rast**: added option to compute the direction (angle) of
        lines
    -   **v.to.rast3**: NEW - converts a vector points map into a
        3D raster map
    -   **v.univar.sh**: NEW - calculates extended univariate
        statistics on a selected vector map attribute table column
    -   **v.what.vect**: NEW - uploads the values of a given
        vector map into a coinciding vector point map's attribute table
    -   Misc. display modules: Increased support for true-color RGB
        decorations
    -   Misc. vector modules: Support for dynamic fill color and dynamic
        feature sizing from DB attribute columns
    -   Scripts: Fixes for awk and related calculation problems for
        various locales
    -   Scripts: Variable test portability issues fixed

For a comprehensive list of changes to modules see the
[6.1](http://grass.itc.it/grass61/source/ChangeLog_6.1.0.gz) and
[6.2](http://grass.itc.it/grass62/source/ChangeLog_6.2.0.gz) ChangeLog
files.

For a complete list of commands available in GRASS 6.2.0 see the [online
manuals](http://grass.itc.it/grass62/manuals/html62_user/index.html).


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

------------------------------------------------------------------------


[GRASS Development Team](http://grass.itc.it/community/team.php)
