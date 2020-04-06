---
title: "GRASS GIS 6.3.0 released"
date: 2008-04-23T11:36:11+01:00
layout: "news"
author: GRASS Development Team
---

![GRASS GIS](/images/logos/historical_logos/grasslogo_vector_small.png)

**The GRASS Development Team announces**

GRASS GIS 6.3.0 released 23 April 2008
--------------------------------------

We are happy to announce the latest release of [GRASS
GIS](http://grass.osgeo.org), the first major release with new features
since GRASS 6.2 first arrived in October 2006.

Officially this is a "technology preview" release, the first beta on
the path to GRASS 6.4-stable, and it also marks the start of work on
GRASS 7. As such GRASS 6.3.0 is not intended to be a stable release with
ongoing support, but after five months of quality-assurance review we
are very pleased with the results. Users can be confident to use this
version for their day to day work, indeed due to the open development
model many already do.

Besides the hundreds of new module features, supported data formats, and
language translations, GRASS 6.3 brings a number of exciting
enhancements to the GIS. A prototype of the new wxPython user interface
is debuted, and for the first time since its inception with a port from
the VAX 11/780 in 1983, GRASS will run on a non-UNIX based platform:
MS-Windows. This is currently still in an experimental state and we hope
that widespread testing of 6.3.0 will mean the 6.4 release of WinGRASS
will be fully functional and robust. Existing UNIX and Mac users will be
happy to know that these new features do not disrupt the base GIS which
remains as solid as ever and fully backwards compatible with earlier
GRASS 6.0 and GRASS 6.2 releases.

Several infrastructure changes accompany this release with the project
becoming a founding member of the [Open Source Geospatial
Foundation](http://www.osgeo.org/) (OSGeo). This includes a new home for
the [website](http://grass.osgeo.org), the [Wiki help
system](http://grass.osgeo.org/wiki/Main_Page), [source code
repository](http://trac.osgeo.org/grass/browser/grass/trunk), community
[add-on module
repository](http://trac.osgeo.org/grass/browser/grass-addons),
integrated [bug tracking system](http://trac.osgeo.org/grass/report),
and formal membership for the project in a non-profit legal entity. We
hope that these changes will guarantee that the GRASS community will be
well supported and vibrant well into the future.

The *Geographic Resources Analysis Support System*, commonly referred to
as GRASS, is a Geographic Information System (GIS) providing powerful
raster, vector, and geospatial processing engines in a single integrated
software suite. GRASS includes tools for spatial modeling, visualization
of raster and vector data, management and analysis of geospatial data,
and the processing of satellite and aerial imagery. It also provides the
capability to produce sophisticated presentation graphics and hardcopy
maps.

GRASS is currently used around the world in academic and commercial
settings as well as by many governmental agencies and environmental
consulting companies. It runs on a variety of popular hardware platforms
and is Free open-source software released under the terms of the [GNU
General Public License](http://www.gnu.org/copyleft/gpl.html).

### Screenshots

-   [Screenshots](http://grass.osgeo.org/screenshots/index.php) of GRASS
    6.3 in action

### Platforms supported by GRASS

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel), Silicon
Graphics Irix, HP-UX, DEC-Alpha, AIX, BSD, iPAQ/Linux and other UNIX
compliant platforms. GRASS runs on both 32 and 64 bit systems with large
files (>2GB) supported by many key modules.

### Software download/CDROM

-   [http://grass.osgeo.org](http://grass.osgeo.org/download/index.php#g63x)
-   [http://grass.ibiblio.org](http://grass.ibiblio.org/download/index.php#g63x)
-   numerous [mirror sites](http://grass.osgeo.org/mirrors.php)
-   [GRASS on CDROM/DVD](http://grass.osgeo.org/download/cdrom.php)

The new source code is available now and binary packages for major
operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
<http://grass.osgeo.org/intro/general.php>, the previous announcements
of [GRASS 6.2.0](announce_grass620.html), [GRASS
6.2.1](announce_grass621.html), [GRASS 6.2.2](announce_grass622.html),
and [GRASS 6.2.3](announce_grass623.html), and the [Wiki collaborative
help system](http://grass.osgeo.org/wiki/Main_Page).

### What's new in GRASS 6.3.0

(selected improvements from the more than 3400 minor and important
fixes)

-   Source code quality/libraries:
    -   Many fixes for native MS-Windows support (MinGW based)
    -   [Programmer's
        Manual](http://download.osgeo.org/grass/grass6_progman/):
        continued Doxygen integration and automated generation into PDF
        and HTML formats. Publicly available for download and perusal.
    -   Improved policies for code submission specified in the
        SUBMITTING files for documentation, Python, Tcl/Tk, and shell
        scripts
    -   GRASS-SWIG prototype interface improved (library bindings for
        Perl and Python)
    -   All modules: `--quiet` and `--verbose` message modes
    -   All modules: `--script` flag generates boilerplate for shell
        scripts with parser and GUI support
    -   Batch mode for launching GRASS for non-interactive processing
        tasks
    -   DBMI: SQL parser extended (support for DROP COLUMN, ASC/DESC
        keyword in ORDER BY clause, etc.)
    -   Partial differential equations library with OpenMP support
        (gpdelib)
    -   Moved aggregate functions into separate statistics library
    -   Display driver: add R_bitmap() and supporting infrastructure
    -   Major clean-up to the display architecture (libraries and
        drivers): the drivers no longer maintain a palette; all colours
        are specified directly as R/G/B values
    -   Segmentation library polished
    -   Cdhc library for testing normality & exponentiality polished
    -   "Default" datum transformation parameters are now first in the
        list instead of last
    -   Create new locations using EPSG codes with g.proj
    -   Message translation (i18N): translations continued, new
        languages including Vietnamese and Arabic
    -   Documentation/man pages: various fixes and improvements (more
        examples added, including graphics, improved style, new
        introductory pages)
    -   Documentation: various terminology issues fixed and terms
        unified
    -   Symbols: New icons, support for symbol rotation
-   Graphical User Interface (GUI):
    -   **g.gui**: New frontend command to launch GUI sessions
    -   **gis.m Tcl/Tk GUI**:
        -   GIS manager extended with mouse placement of text and scale
            bars and menu updates
        -   Updated Tcl/Tk profile and georectification GUI tools
        -   New interactive command console with output window
        -   New interfaces for interactive raster reclassification,
            raster recoding, custom raster color rules, and vector
            reclassification
        -   New animation tool to display raster map series as an
            animation
    -   **wxPython GUI**:
        -   Complete [GUI rewrite in
            Python/wxWidgets](http://grass.osgeo.org/wiki/WxPython-based_GUI_for_GRASS)
    -   Improved startup screen and interface, including searchable EPSG
        codes list and better custom datum support
    -   **NVIZ**: Major revamp of interface; output directly to MPEG or
        other FFmpeg supported formats
    -   **QGIS integration**: GRASS toolbox extended, available from
        [Quantum GIS](http://www.qgis.org)
-   Drivers:
    -   **DBF driver**: extended column type support
    -   **HTMLMAP display driver**: NEW - Prepares clickable HTML
        image map templates (port from GRASS 5)
    -   **PostScript display driver**: NEW - Renders display
        directly into a PostScript or Encapsulated PostScript file
    -   **Cairo display driver**: NEW - Renders display directly
        into a number of image formats using the Cairo rendering engine
-   New and major updates for modules and scripts since GRASS 6.2.3:
    -   **db.dropcol**: NEW - Drops a column from selected
        attribute table
    -   **db.droptable**: NEW - Drops an attribute table
    -   **db.in.ogr**: NEW - Imports attribute tables in various
        formats
    -   **db.login**: Support for interactive password entry (invisible
        passwords)
    -   **db.out.ogr**: NEW - Exports attribute tables into
        various formats
    -   **d.barscale**: North arrow for lat/lon locations
    -   **d.out.file**: Expanded to use the Cairo and PostScript display
        drivers to allow export to ps, eps, svg, and pdf formats
    -   **d.path**: Support for use from GUI and non-interactive mode
    -   **d.rast.edit**: Rewritten in Tcl/Tk
    -   **d.shadedmap**: NEW - Drapes a semi-transparent raster
        over a shaded relief map
    -   **d.text**, **d.font**: Updated to accept TrueType fonts and
        maintain a database of system fonts
    -   **g.dirseps**: NEW - Internal utility for converting
        directory characters (MS-Windows)
    -   **g.findetc**: NEW - Internal utility for locating
        support files
    -   **g.gui**: NEW - Launches a GRASS graphical user
        interface (GUI) session
    -   **g.message**: NEW - Internal utility for printing quiet
        and verbose messages in scripts
    -   **g.mkfontcap**: NEW - Internal utility for generating a
        list of available system fonts
    -   **g.mremove**: Support for use from GUI
    -   **i.atcorr**: NEW - Performs atmospheric correction using
        the 6S algorithm
    -   **i.landsat.rgb**: Vast speed improvement
    -   **ps.map**: Various improvements including new map border
        control, rotated and scaled symbols, and allowing geogrid from
        lat/lon locations
    -   **r3.gwflow**: NEW - Models transient, confined
        groundwater flow in three dimensions
    -   **r3.stats**: NEW - Generates volume statistics for
        raster3d maps
    -   **r3.univar**: NEW - Calculates univariate statistics
        from the cells of a 3D raster map
    -   **r.bilinear**: This module has been replaced by
        'r.resamp.interp'
    -   **r.category**: NEW - Manages raster map category values
        and labels (replaces r.cats)
    -   **r.colors**: Support for equalized histogram, reversed,
        logarithmically scaled, rules-from-file, and more
    -   **r.gwflow**: NEW - Models transient, confined
        groundwater flow in two dimensions
    -   **r.in.wms**: Various fixes and more robust when dealing with
        flaky WMS servers
    -   **r.in.xyz**: Support for extended statistics
    -   **r.le suite**: Various fixes and modernization
    -   **r.li suite**: NEW - Advanced toolset for multiscale
        analysis of landscape structure.
        Including single and multi-processor enabled modules: r.li.cwed,
        r.li.dominance, r.li.edgedensity, r.li.mpa, r.li.mps,
        r.li.padcv, r.li.padrange, r.li.padsd, r.li.patchdensity,
        r.li.patchnum, r.li.richness, r.li.setup, r.li.shannon,
        r.li.shape, and r.li.simpson
    -   **r.mfilter.fp**: NEW - Raster map custom matrix filter
        (floating point version)
    -   **r.out.gdal**: New C implementation replaces shell script
        version, *region sensitive* with color export ability
    -   **r.out.xyz**: NEW - Exports a raster map to a text file
        as x,y,z values based on cell centers
    -   **r.profile**: Report data outside the current region as invalid
    -   **r.proj**: Replaced with an improved version
    -   **r.resamp.interp**: NEW - Resamples raster map layers to
        a finer grid using interpolation
    -   **r.resamp.stats**: NEW - Resamples raster map layers to
        a coarser grid using aggregation
    -   **r.support**: Enhanced control of meta-data
    -   **r.support.stats**: NEW - Support module which updates
        raster map statistics
    -   **r.univar**: Support for extended statistics
    -   **r.watershed**: Vast speed improvement
    -   **r.what.color**: NEW - Queries colors for a raster map
        layer
    -   **v.db.dropcol**: NEW - Drops a column from the attribute
        table connected to a given vector map
    -   **v.db.join**: NEW - Allows to join a table to a vector
        map table
    -   **v.db.renamecol**: NEW - Renames a column in the
        attribute table connected to a given vector map
    -   **v.db.univar**: NEW - Calculates univariate statistics
        on selected table column for a vector map
    -   **v.digit** (Tcl/Tk): Rewritten for use without X11
    -   **v.digit** (wxPython): NEW - All new vector map
        digitizer rewritten in wxPython
    -   **v.edit**: NEW - Edits a vector map, allows adding,
        deleting and modifying selected vector features
    -   **v.generalize**: NEW - Generalization of vector features
        using a number of smoothing techniques
    -   **v.in.db**: More efficient implementation of the where= option
    -   **v.in.wfs**: NEW - Import GetFeatures from WFS format
    -   **v.net.visibility**: NEW - Visibility graph construction
    -   **v.out.svg**: NEW - Exports a vector map to SVG format
    -   **v.proj**: Better handling of z coordinates in 3-D vectors
    -   **v.support**: NEW - Updates vector map metadata
    -   **v.surf.idw** and **v.surf.rst**: Work with massive datasets
        imported without topology (e.g. LIDAR)

For a comprehensive list of changes see the [6.3 ChangeLog](http://grass.osgeo.org/grass63/source/ChangeLog_6.3.0.gz)
file.

For a complete list of commands available in GRASS 6.3.0 see the [online
manuals](http://grass.osgeo.org/grass63/manuals/html63_user/index.html)
and the [GRASS 6 module list](http://grass.osgeo.org/gdp/grassmanuals/grass63_module_list.pdf).


*We are always looking for testers, code developers, and technical
writers to [help us](http://grass.osgeo.org/devel/index.php) maintain
and accelerate the development cycle.* The GRASS GIS project is
developed under the terms of the [GNU General Public
License](http://www.gnu.org/copyleft/gpl.html) (the GPL) [in the
open](http://grass.osgeo.org/devel/index.php) by
[volunteers](http://grass.osgeo.org/community/index.php) the [world
over](http://mapserver.gdf-hannover.de/grassusers/map.phtml). GRASS
differs from many other GIS software packages used in the professional
world in that it is developed and distributed by users for users, mostly
on a volunteer basis, in the open, and is given away for free. Emphasis
is placed on interoperability and unlimited access to data as well as on
software flexibility and evolution rate.

Release history:

-   [GRASS GIS
    6.3.0RC1](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC1-News)
    released 24 Oct 2007
-   [GRASS GIS
    6.3.0RC2](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC2-News)
    released 20 Nov 2007
-   [GRASS GIS
    6.3.0RC3](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC3-News)
    released 30 Nov 2007
-   [GRASS GIS
    6.3.0RC4](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC4-News)
    released 9 Jan 2008
-   [GRASS GIS
    6.3.0RC5](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC5-News)
    released 19 Feb 2008
-   [GRASS GIS
    6.3.0RC6](http://trac.osgeo.org/grass/wiki/Release/6.3.0RC6-News)
    released 21 Mar 2008
-   GRASS GIS 6.3.0 released 19 Apr 2008 (redrawn due to quality issues)
-   GRASS GIS 6.3.0.1 released 23 Apr 2008

------------------------------------------------------------------------

[GRASS Development Team](http://grass.osgeo.org/community/team.php)
