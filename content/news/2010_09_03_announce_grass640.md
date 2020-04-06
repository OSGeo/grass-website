---
title: "GRASS GIS 6.4.0 released"
date: 2010-09-03T11:36:11+01:00
layout: "news"
author: Admin
---


![GRASS GIS](/images/logos/historical_logos/grasslogo_vector_small.png)**The GRASS Development Team announces**

GRASS GIS 6.4.0 released 3 September 2010
-----------------------------------------


We are pleased to announce the release of [GRASS GIS
6.4.0](http://grass.osgeo.org), the first in the new line of 6.4
stable releases. As a stable release 6.4 will enjoy long-term
support. The next release (6.4.1) will introduce a few new features
which are still undergoing final testing, but after that all further
6.4 releases will be bugfix-only. Due to our highly conservative
stabilization policy this is the first official version of GRASS to
introduce new features since October 2006 and supersedes the previous
stable line of GRASS 6.2. As such the floodgates are open and there
are many new features to explore and many new structural improvements
to be found in the software.

GRASS 6.4 brings a number of exciting enhancements to the GIS. Our
new *wxPython graphical user interface* (wxGUI) is debuted, Python is
now a fully supported scripting language, and for the first time
since its inception with a port from the VAX 11/780 in 1983, GRASS
will now run natively on a non-UNIX based platform: MS-Windows! In
addition to bringing the software to a host of new users, the ability
to run GRASS on any common computer platform furthers our goal of
open access to the software. We hope you will enjoy the ability to
use this program on the systems that are most convenient to you and
your work.

Due to the freshness of *WinGrass* there may still be a few rough
edges yet to discover, but after more than a year of dedicated
testing and quality-assurance review we are very pleased with the
results. Users can be confident to use this version for their day to
day work, indeed due to the open development model many already do.
Existing UNIX and Mac users will be happy to know that these new
features do not disrupt the base GIS which remains as solid as ever
and fully backwards compatible with earlier GRASS 6.0 and 6.2
releases. The venerable Tcl/Tk GUIs are also still available if you
prefer to use them.

The GRASS software including over 400 built-in analysis modules and
100 community supplied add-on modules and toolboxes can be downloaded
for free from the main GRASS website at <http://grass.osgeo.org>, or
from many local mirrors worldwide. In addition to the extensive
documentation which comes with the software, our [Wiki help
system](http://grass.osgeo.org/wiki) contains a wealth of user
supplied tips and tricks, tutorials, and guides.

Since 6.4 entered the testing phase work has begun on GRASS 7 and is
progressing rapidly, including many new wxGUI improvements and tools
which we hope to bring over for the upcoming 6.4.1 release.

### About GRASS GIS

The *Geographic Resources Analysis Support System*, commonly referred
to as GRASS, is a Geographic Information System (GIS) providing
powerful raster, vector, and geospatial processing engines in a
single integrated software suite. GRASS includes tools for spatial
modeling, visualization of raster and vector data, management and
analysis of geospatial data, and the processing of satellite and
aerial imagery. It also provides the capability to produce
sophisticated presentation graphics and hardcopy maps. GRASS has now
been translated into twenty languages and supports a huge array of
data formats.

GRASS is a founding member of [The Open Source Geospatial
Foundation](http://www.osgeo.org) (OSGeo), a non-profit legal entity
which has enjoyed extraordinary growth. We expect that this formal
infrastructure will guarantee that the GRASS community will be well
supported and vibrant far into the future.

GRASS is currently used around the world in academic and commercial
settings as well as by many governmental agencies and environmental
consulting companies. It runs on a variety of popular hardware
platforms and is Free open-source software released under the terms
of the [GNU General Public
License](http://www.gnu.org/licenses/gpl-2.0.html).

Users are encouraged to study, customize, extend, improve, and (if
necessary) diagnose and repair the inner workings of any part of the
program. We believe that scientific progress depends on the
reproducibility of results, which in turn depends on the unhindered
ability of the user to know, evaluate, double-check, and learn from
all algorithms and methodologies used in the process of their work.

### Screenshots

- [Screenshots](http://grass.osgeo.org/screenshots/index.php) of
GRASS in action

### Platforms supported by GRASS

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel),
Silicon Graphics Irix, HP-UX, DEC-Alpha, AIX, the BSD family,
iPAQ/Linux and other UNIX compliant platforms. GRASS runs on both 32
and 64 bit systems with large data file (\>2GB) support for most key
modules.

### Software download/CDROM

- [http://grass.osgeo.org](http://grass.osgeo.org/download/index.ph
p)
- [http://grass.ibiblio.org](http://grass.ibiblio.org/download/inde
x.php)
- numerous [mirror sites](http://grass.osgeo.org/mirrors.php)
- [GRASS on CDROM/DVD](http://grass.osgeo.org/download/cdrom.php)

The new source code is available now and binary packages for major
operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
<http://grass.osgeo.org/intro/general.php>, and the [Wiki
collaborative help system](http://grass.osgeo.org/wiki).

### What's new in GRASS 6.4.0

(selected improvements from the over 9,000 updates to the source
code)

- Source code quality/libraries:
- Many internal adjustments needed for native MS-Windows
support, for example safely handling spaces in file names.
- [Programmer's Manual](http://grass.osgeo.org/programming6/):
continued Doxygen integration and automated generation into
PDF and HTML formats. Publicly available for download and
perusal.
- Improved policies for code submission specified in the
SUBMITTING files for documentation, Python, Tcl/Tk, and shell
scripts
- New Python scripting language library containing many helper
functions
- All modules: `--quiet` and `--verbose` message modes
- All modules: `--script` flag generates boilerplate for shell
scripts with parser and GUI support
- Batch mode for launching GRASS for non-interactive processing
tasks
- DBMI: SQL parser extended (support for DROP COLUMN, ASC/DESC
keyword in ORDER BY clause, etc.)
- Partial differential equations library with OpenMP
multi-processor support
- Major clean-up of the display architecture (libraries and
drivers): the drivers no longer maintain a palette; all
colors are now specified directly as R/G/B values
- The \"default\" datum transformation parameters are now first
in the list instead of last
- Ability to create new locations using EPSG codes with the
*g.proj* module
- Message translation (i18N): many new translated messages, new
languages including Vietnamese and Arabic
- Documentation/man pages: various fixes and improvements (more
examples added, including graphics, improved style, new
introductory pages)
- Documentation: various terminology issues fixed and terms
unified
- Symbols: A number of new icons, support for symbol rotation
- Graphical User Interface (GUI):
- **g.gui**: New frontend command to launch GUI sessions
- **wxPython GUI**:
- Complete [GUI rewrite in
Python/wxWidgets](http://grass.osgeo.org/wiki/WxGUI)
- **gis.m Tcl/Tk GUI**:
- GIS manager extended with mouse placement of text and
scale bars and menu updates
- Updated Tcl/Tk profile and georectification GUI tools
- New interactive command console with output window
- New interfaces for interactive raster reclassification,
raster recoding, custom raster color rules, and vector
reclassification
- New animation tool to display raster map series as an
animation
- Improved startup screen and interface, including searchable
EPSG codes list and better custom datum support
- **NVIZ**: Major revamp of interface; output directly to MPEG
or other FFmpeg supported formats
- **QGIS integration**: GRASS toolbox extended, available from
[Quantum GIS](http://www.qgis.org)
- Drivers:
- **DBF driver**: extended column type support
- **HTMLMAP display driver**: NEW - Prepares clickable
HTML image map templates (port from GRASS 5)
- **PostScript display driver**: NEW - Renders display
directly into a PostScript or Encapsulated PostScript file
- **Cairo display driver**: NEW - Renders display
directly into a number of image formats using the
[Cairo](http://www.cairographics.org) rendering engine
- New and major updates for modules and scripts since GRASS 6.2.3:
- **db.dropcol**: NEW - Drops a column from selected
attribute table
- **db.droptable**: NEW - Drops an attribute table
- **db.in.ogr**: NEW - Imports attribute tables in
various formats
- **db.login**: Support for interactive password entry
(invisible passwords)
- **db.out.ogr**: NEW - Exports attribute tables into
various formats
- **d.barscale**: North arrow for lat/lon locations
- **d.out.file**: Expanded to use the Cairo and PostScript
display drivers to allow export to ps, eps, svg, and pdf
formats
- **d.path**: Support for use from GUI and non-interactive mode
- **d.rast.edit**: Rewritten in Tcl/Tk
- **d.shadedmap**: NEW - Drapes a semi-transparent
raster over a shaded relief map
- **d.text**, **d.font**: Updated to accept TrueType fonts and
maintain a database of system fonts
- **g.dirseps**: NEW - Internal utility for converting
directory characters (MS-Windows)
- **g.extension**: NEW - Utility for downloading and
installing Add-on modules
- **g.findetc**: NEW - Internal utility for locating
support files
- **g.gui**: NEW - Launches a GRASS graphical user
interface (GUI) session
- **g.message**: NEW - Internal utility for printing
quiet and verbose messages in scripts
- **g.mkfontcap**: NEW - Internal utility for generating
a list of available system fonts
- **g.mremove**: Support for use from GUI
- **i.atcorr**: NEW - Performs atmospheric correction
using the 6S algorithm
- **i.landsat.rgb**: Vast speed improvement
- **ps.map**: Various improvements including new map border
control, rotated and scaled symbols, and allowing geogrid
from lat/lon locations
- **r3.gwflow**: NEW - Models transient, confined
groundwater flow in three dimensions
- **r3.stats**: NEW - Generates volume statistics for
raster3d maps
- **r3.univar**: NEW - Calculates univariate statistics
from the cells of a 3D raster map
- **r.bilinear**: This module has been replaced by
r.resamp.interp
- **r.category**: NEW - Manages raster map category
values and labels (replaces r.cats)
- **r.colors**: Support for equalized histogram, reversed,
logarithmically scaled, rules-from-file, and more
- **r.gwflow**: NEW - Models transient, confined
groundwater flow in two dimensions
- **r.in.wms**: Various fixes and more robust when dealing with
flaky WMS servers
- **r.in.xyz**: Support for extended statistics
- **r.le suite**: Various fixes and modernization
- **r.li suite**: NEW - Advanced toolset for multiscale
analysis of landscape structure.\
Including single and multi-processor enabled modules:
r.li.cwed, r.li.dominance, r.li.edgedensity, r.li.mpa,
r.li.mps, r.li.padcv, r.li.padrange, r.li.padsd,
r.li.patchdensity, r.li.patchnum, r.li.richness, r.li.setup,
r.li.shannon, r.li.shape, and r.li.simpson
- **r.mfilter.fp**: NEW - Raster map custom matrix
filter (floating point version)
- **r.out.gdal**: New C implementation replaces shell script
version, *region sensitive* with color export ability
- **r.out.xyz**: NEW - Exports a raster map to a text
file as x,y,z values based on cell centers
- **r.profile**: Report data outside the current region as
invalid
- **r.proj**: Replaced with an improved version
- **r.resamp.interp**: NEW - Resamples raster map layers
to a finer grid using interpolation
- **r.resamp.stats**: NEW - Resamples raster map layers
to a coarser grid using aggregation
- **r.support**: Enhanced control of meta-data
- **r.support.stats**: NEW - Support module which
updates raster map statistics
- **r.univar**: Support for extended statistics
- **r.watershed**: Vast speed improvement
- **r.what.color**: NEW - Queries colors for a raster
map layer
- **v.db.dropcol**: NEW - Drops a column from the
attribute table connected to a given vector map
- **v.db.join**: NEW - Allows to join a table to a
vector map table
- **v.db.renamecol**: NEW - Renames a column in the
attribute table connected to a given vector map
- **v.db.univar**: NEW - Calculates univariate
statistics on selected table column for a vector map
- **v.digit** (Tcl/Tk): Rewritten for use without X11
- **v.digit** (wxPython): NEW - All new vector map
digitizer rewritten in wxPython
- **v.edit**: NEW - Edits a vector map, allows adding,
deleting and modifying selected vector features
- **v.generalize**: NEW - Generalization of vector
features using a number of smoothing techniques
- **v.in.db**: More efficient implementation of the where=
option
- **v.in.wfs**: NEW - Import GetFeatures from WFS format
- **v.net.visibility**: NEW - Visibility graph
construction
- **v.out.svg**: NEW - Exports a vector map to SVG
format
- **v.proj**: Better handling of z coordinates in 3-D vectors
- **v.support**: NEW - Updates vector map metadata
- **v.surf.idw**, **v.surf.bspline**, and **v.surf.rst**: Work
with massive datasets imported without topology (e.g. LIDAR)
- **v.to.3d**: NEW - Performs transformation of 2D
vector features to 3D

A more detailed description of changes can be found in the previous
announcements of the [GRASS 6.3](announce_grass630.html) development
preview release and the [GRASS 6.4.0 release
candidate](https://trac.osgeo.org/grass/wiki/WikiStart#Releases)
series.

For a comprehensive list of changes see the [6.4
ChangeLog](http://grass.osgeo.org/grass64/source/ChangeLog_6.4.0.gz)
file.

For a complete list of commands available in GRASS 6.4.0 see the
[online
manuals](http://grass.osgeo.org/grass64/manuals/html64_user/index.htm
l)
and the [GRASS 6.4 module
list](http://grass.osgeo.org/gdp/grassmanuals/grass64_module_list.pdf
).

\
*We are always looking for testers, code developers, and technical
writers to [help us](http://grass.osgeo.org/devel/index.php) maintain
and accelerate the development cycle.* The GRASS GIS project is
developed under the terms of the [GNU General Public
License](http://www.gnu.org/licenses/gpl-2.0.html) (the GPL) [in the
open](http://grass.osgeo.org/devel/index.php) by
[volunteers](http://grass.osgeo.org/community/index.php) the [world
over](http://mapserver.gdf-hannover.de/grassusers/map.phtml). GRASS
differs from many other GIS software packages used in the
professional world in that it is developed and distributed by users
for users, mostly on a volunteer basis, in the open, and is given
away for free. Emphasis is placed on interoperability and unlimited
access to data as well as on software flexibility and evolution rate.

Release history:

- [GRASS GIS
6.4.0RC1](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC1-News)
released 23 Dec 2008
- [GRASS GIS
6.4.0RC2](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC2-News)
released 12 Jan 2009
- [GRASS GIS
6.4.0RC3](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC3-News)
released 26 Jan 2009
- [GRASS GIS
6.4.0RC4](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC4-News)
released 12 Apr 2009
- [GRASS GIS
6.4.0RC5](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC5-News)
released 9 Jun 2009
- [GRASS GIS
6.4.0RC6](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC6-News)
released 20 Mar 2010
- [GRASS GIS
6.4.0RC7](http://trac.osgeo.org/grass/wiki/Release/6.4.0RC7-News)
released 27 Aug 2010
- **GRASS GIS 6.4.0 released 3 September 2010** (see also
[technical
announcement](http://trac.osgeo.org/grass/wiki/Release/6.4.0-News
))


-------------------------------------------------------------------

[GRASS Development Team](http://grass.osgeo.org/community/team.php)
