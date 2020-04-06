---
title: "GRASS GIS 6.4.2 released"
date: 2012-02-19T11:36:11+01:00
layout: "news"
author: Admin
---


![GRASS GIS](/images/logos/historical_logos/grasslogo_vector_small.png)

**The GRASS Development Team announces**

GRASS GIS 6.4.2 released 19 February 2012
-----------------------------------------

We are pleased to announce the release of a new stable version of
[GRASS GIS 6.4.2](http://grass.osgeo.org). This release fixes bugs
found in version 6.4.1 of the program and adds a number of new
features. This release includes over 770 updates to the source code
since 6.4.1. As a stable release series, the 6.4 line will enjoy
long-term support and incremental enhancements while preserving
backwards-compatibility with the entire GRASS 6 line.\


### What's new in GRASS 6.4.2

The new wxPython graphical user interface (wxGUI) has been updated
with many new features and tools. Python is now a fully supported
scripting language, including an updated Python toolkit to simplify
the authoring of personal scripts, support for NumPy based array
calculations, and a Python application interface (API) for the GRASS
C libraries. Additionally, Microsoft Windows support continues to
mature. GRASS 6.4.2 debuts ten new modules, a new GUI cartographic
composer tool, a new GUI object-oriented modeling environment, an
interactive Python shell, and improved infrastructure for installing
and managing community supplied add-on modules.

#### New modules

- **i.topo.corr** - Computes topographic correction of reflectance
in satellite imagery
- **m.nviz.image** - Creates a 3D rendering of GIS data (renamed
from nviz\_cmd)
- **v.net.allpairs** - Computes the shortest path between all pairs
of nodes in the network
- **v.net.bridge** - Computes bridges and articulation points in
the network
- **v.net.centrality** - Computes degree, centrality, betweeness,
closeness and eigenvector centrality measures in the network
- **v.net.components** - Computes strongly and weakly connected
components in the network
- **v.net.connectivity** - Computes vertex connectivity between two
sets of nodes in the network
- **v.net.distance** - Computes shortest distance via the network
between the given sets of features
- **v.net.flow** - Computes the maximum flow between two sets of
nodes in the network
- **v.net.spanningtree** - Computes minimum spanning tree for the
network
- **v.net.timetable** - Finds shortest path using timetables

#### Major module changes

- **g.extension** - Many improvements and a new GUI extension
manager; better support for building and installing add-ons when
the GRASS source code is not available
- **i.rectify** - Add new resampling methods and options to set the
target resolution and control memory usage
- **r.regression.line** - Rewritten in C (much faster)
- **r.univar**, **r3.univar** - Zonal support; add ability to
export as a table and to a file
- **v.generalize** - Major bug fixes
- **v.kernel** - Add additional kernel functions, equal split on
networks
- **v.out.ogr** - Transaction support (major speed up for
data-sources which support transactions like PostGIS)

#### Minor module changes

- **d.barscale** - Add ability to change font size
- **d.legend** - Support for custom tick mark labels (e.g. for
logarithmic legends)
- **db.select** - Output can be directed to a file
- **g.version** - Add ability to output in shell script style
- **i.atcorr** - Add support for VGT1\_spot4, VGT2\_spot5, RapidEye
sensors
- **r.in.bin** - Add ability to explicitly set byte order
(endianness)
- **r.out.bin** - Add ability to explicitly set byte order
(endianness), number of bytes per cell, and force floating-point
output
- **v.out.ogr** - Add ability to export to a 3D Shapefile
- **v.surf.bspline** - Change to a more reasonable default
smoothing coefficient
- Many more; see the detailed [ChangeLog since
6.4.1](http://grass.osgeo.org/grass64/source/ChangeLog_6.4.1-6.4.
2.gz)

#### GUI changes

(wxGUI)

- **Major wxGUI update** ([pictorial
overview](http://grass.osgeo.org/wiki/WxPython-based_GUI_for_GRAS
S))
- Add embedded interactive Python shell
([view](http://grass.osgeo.org/grass-wiki/images/Wxgui-pyshell.pn
g))
- Debut of the new [Graphical
Modeler](http://grass.osgeo.org/grass64/manuals/html64_user/wxGUI
.Modeler.html)
([view](http://grass.osgeo.org/wiki/WxGUI_Modeler))
- Debut of the new [Cartographic
Composer](http://grass.osgeo.org/grass64/manuals/html64_user/wxGU
I.PsMap.html)
front-end to ps.map
([view](http://grass.osgeo.org/wiki/WxPython-based_GUI_for_GRASS#
Cartography_tools))
- Debut of the new multi-platform extension manger for community
supplied add-on modules
([view](http://grass.osgeo.org/wiki/WxPython-based_GUI_for_GRASS#
Extension_Manager))
- Numerous stability fixes including ability to more gracefully
handle stale lock-files and missing graphics support
- Support for languages which use double-byte characters (e.g.
Japanese)
- Make the vector query tool more robust to maps with missing or no
data

#### Library changes

- New GRASS Python ctypes interface
- Added NumPy \'arrays\' support to GRASS Python Scripting Library
- GRASS Python Scripting Library: `mlist()` replaced by
`mlist_grouped()`
- A new vector network library has been added
- A type mismatch has been fixed in the ODBC driver
- New symbols:
`extra/n_arrow3, geology/strike_half-bowtie, geology/half-arrow_l
eft, geology/half-arrow_right`
([view](http://grass.osgeo.org/wiki/IconSymbols#New))
- New color rules: `population_dens`

#### Map projection changes

- Support for alternate ETRS89 spelling

#### Portability changes

(MS-Windows)

- Numerous back-end changes and bug fixes making the experience
more robust
- Better support for spaces in path names
- See the bug-fix-list for WinGRASS tagged items

(Mac OSX)

- Offer alternate methods when GNU tool extensions are not
available

(All)

- Fix support for `make` versions older than 3.81

#### Message translation updates

- Many languages updated with many new translations ([see
stats](http://grass.osgeo.org/devel/i18n.php#statistics))
- Improved translation support for NVIZ


A detailed description of changes and a list of fixed bugs can be
found in the [GRASS 6.4.2 Release
News](http://trac.osgeo.org/grass/wiki/Release/6.4.2-News) page. For
a comprehensive list of changes see the full GRASS
[ChangeLog](http://grass.osgeo.org/grass64/source/ChangeLog_6.4.2.gz)
file.

### Software download and CD-ROM/DVD

The new source code is available now along with selected binary
packages.

- Visit our download page: <http://grass.osgeo.org/download/>
- Numerous [mirror sites](http://grass.osgeo.org/mirrors.php)
- GRASS on [CD-ROM, DVD, and zero-install live USB
sticks](http://grass.osgeo.org/download/cdrom.php)


### About GRASS GIS

The *Geographic Resources Analysis Support System*, commonly referred
to as GRASS, is a Geographic Information System (GIS) and geospatial
analysis toolkit. For nearly three decades, GRASS has provided
powerful raster, vector, and geospatial processing engines in a
single integrated software suite. GRASS includes tools for spatial
modeling of raster and vector data, visualization, the management and
analysis of geospatial information, and the processing of satellite
and aerial imagery. It also provides the capability to produce
sophisticated presentation graphics and publication-quality hardcopy
maps. GRASS has now been translated into twenty languages and
supports an extensive array of data formats.

GRASS differs from many other GIS software packages used in the
academic and professional worlds in that it is developed and
distributed by users for users, mostly on a volunteer basis. Its code
and spatial processing algorithms are open and transparent, and the
software is distributed free of charge. The source code is also
freely available, allowing for immediate customization, examination
of the underlying algorithms, addition of new features, and faster
identification and patching of bugs.

Users are encouraged to study, customize, extend, improve, and (if
necessary) diagnose and modify the inner workings of any part of the
program. We believe that scientific progress depends on the
reproducibility of results, which in turn depends on the unhindered
ability of the user to know, evaluate, double-check, and learn from
all algorithms and methodologies used in the process of their work.

The GRASS software includes over 435 built-in analysis modules and
more than 100 community supplied add-on modules and toolboxes. It can
be downloaded for free from the main GRASS website at
<http://grass.osgeo.org>, or from many local mirrors worldwide. In
addition to the extensive documentation which comes with the
software, our [Wiki collaborative help
system](http://grass.osgeo.org/wiki) contains a wealth of user
supplied tips and tricks, tutorials, and guides. On the wiki you\'ll
find information about import and export of a diverse range of data
formats and interoperability with such software as Quantum GIS,
MapServer, PostGIS, R Statistics, GMT (journal quality cartography),
Matlab, Paraview 3D visualization, and more.

GRASS is currently used around the world in many academic and
commercial settings as well as by many governmental agencies and
environmental consulting companies. It runs on a variety of popular
hardware platforms and is Free and open-source software released
under the terms of the [GNU General Public
License](http://www.gnu.org/licenses/gpl-2.0.html). While its most
popular role is as a desktop GIS, GRASS includes native support for
multi-user collaboration suitable for research team and classroom
environments, or can be used embedded for back-end server jobs
(including HPC) with no user interaction at all.

We are a founding member of [The Open Source Geospatial
Foundation](http://www.osgeo.org) (OSGeo), a non-profit legal entity
which has enjoyed extraordinary growth in recent years and brings
together many of today's best geospatial software projects under a
single umbrella. We expect that this formal infrastructure will
guarantee that the GRASS community will be well supported and vibrant
far into the future.\
\

### Screenshots

- Please browse through our gallery of [screenshots of GRASS in
action](http://grass.osgeo.org/screenshots/index.php)

\

### Platforms supported by GRASS

GNU/Linux, Mac OS X/Darwin, Microsoft Windows (native using MinGW or
with full UNIX support via Cygwin), Sun Solaris (SPARC/Intel),
Silicon Graphics Irix, HP-UX, DEC-Alpha, AIX, the BSD family,
iPAQ/Linux and other UNIX compliant platforms. GRASS runs on both 32
and 64 bit systems with large data file (\>2GB) support for most key
modules and has been ported to run on both handheld tablets and high
performance super-computers.\
\

### Documentation and Support

For details on GRASS software capabilities please refer to the
[introduction page](http://grass.osgeo.org/intro/general.php) on the
GRASS website and the rich documentation and tutorials held in the
[Wiki collaborative help system](http://grass.osgeo.org/wiki). For a
complete list of commands available in GRASS 6.4.2 see the [online
manuals](http://grass.osgeo.org/grass64/manuals/html64_user/)
collection and the [GRASS 6.4 module
synopsis](http://grass.osgeo.org/gdp/grassmanuals/grass64_module_list
.pdf).\
\

*We are always looking for testers, code developers, and technical
writers to [help
us](https://trac.osgeo.org/grass/wiki/HowToContribute) maintain and
accelerate the development cycle.* The GRASS GIS project is developed
under the terms of the [GNU General Public
License](http://www.gnu.org/licenses/gpl-2.0.html) (the GPL) [in the
open](http://grass.osgeo.org/devel/index.php) by [volunteers the
world over](http://grass.osgeo.org/community/index.php).

Experimental work on the source code of the future GRASS 7 series
continues to go well and is the main focus of current development.
Bug fixes, selected non-invasive improvements, and new GUI tools will
continue to be back-ported into the 6.4 line as necessary.

Release history:

- [GRASS GIS
6.4.2RC1](http://trac.osgeo.org/grass/wiki/Release/6.4.2RC1-News)
released 10 Oct 2011
- [GRASS GIS
6.4.2RC2](http://trac.osgeo.org/grass/wiki/Release/6.4.2RC2-News)
released 15 Nov 2011
- [GRASS GIS
6.4.2RC3](http://trac.osgeo.org/grass/wiki/Release/6.4.2RC3-News)
released 12 Jan 2012
- **GRASS GIS 6.4.2 released 19 February 2012** (see also
[technical
announcement](http://trac.osgeo.org/grass/wiki/Release/6.4.2-News
))


-------------------------------------------------------------------

[GRASS Development Team](http://grass.osgeo.org/wiki/Team)
