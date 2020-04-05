---
title: "GRASS GIS 5.3.0 released 15 May 2004"
date: 2004-05-15T11:36:11+01:00
layout: "news"
author: Admin
---

**The GRASS Development Team announces:**

GRASS GIS 5.3.0 released 15 May 2004
------------------------------------

A new release of GRASS has been published. This is a \"technology
preview\" release from the 5.3 development series, which is undergoing
testing in preparation for creation of the stable 5.4 branch (see the
[GRASS Development Roadmap](../devel/roadmap.php)). GRASS 5.3 is already
in reliable daily production use at many locations worldwide.

The Geographic Resources Analysis Support System, commonly referred to
as GRASS GIS, is a Geographical Information System (GIS) used for data
management, image processing, graphics production, spatial modelling,
and visualization of raster, vector and sites data. It is open source
Free Software released under the [GNU General Public License
(GPL)](http://www.gnu.org/copyleft/gpl.html).

### Platforms supported by GRASS:

GNU/Linux, Sun Solaris (SPARC/Intel), Silicon Graphics Irix, Mac OS
X/Darwin, Microsoft Windows with Cygwin, HP-UX, DEC-Alpha, AIX, BSD,
iPAQ/Linux and other UNIX compliant platforms (32/64bit).

### Software download:

-   [http://grass.itc.it](http://grass.itc.it/download.html)
-   [http://grass.ibiblio.org](http://grass.ibiblio.org/download.html)
-   various [mirror sites](../grass.mirrors.html)

The new source code is available now, and selected binary distributions
for major operating systems will be published shortly.

For details on GRASS software capabilities please refer to:
[http://grass.itc.it/general.html](../general.html)

### What's new in GRASS 5.3.0

5.3.0 represents a significant improvement in functionality over 5.0.3
(the most recent release in the old 5.0 stable series) and in addition
includes many bugfixes. Selected major changes are outlined below. For a
more comprehensive list of changed modules see the [Developers\'
Notes](../grass53/source/NEWS.html); the full
[ChangeLog](../grass53/source/ChangeLog) is also available.

**Datum Transformation**
:   Re-projection of GPS and satellite-derived data into a national
    co-ordinate system often requires datum transformation, otherwise
    shifts in the data of the order of several hundred metres can occur.
    The GRASS re-projection modules *r.proj*, *v.proj* and *s.proj* now
    support datum transformation. This is built on top of the
    implementation in the [PROJ.4
    library](http://remotesensing.org/proj/). If you are not sure
    whether your existing locations in the database contain enough
    information to perform datum transformations, please re-run
    *g.setproj*, which has been improved.

**Shared library support**
:   Using the configure option \--enable-gmake=no (this will become the
    default for 5.4 when it is reliable on all supported platforms)
    makes use of a new build mechanism which compiles the core GRASS
    libraries as shared by default. This results in a much smaller size
    for the installed binaries. Not yet fully compatible with Mac OSX
    and Cygwin.

**External PROJ.4 library support**
:   Users can avail of the latest updates to the projections and datums
    supported by the RemoteSensing.org [PROJ.4
    library](http://remotesensing.org/proj/) by compiling GRASS against
    it. This is the default; note that PROJ.4 must be installed before
    GRASS. Using the \--with-proj=no configure option will result in the
    old version of PROJ.4 contained within the GRASS sources being used
    instead.

**New tcltkgrass Graphical User Interface menu structure**
:   Additional commands are also supported via the GUI. *g.help* is
    still there, but an enhanced task-oriented GUI is now also available
    to guide novice users through typical GIS tasks

**Improvements to 3-D Visualisation**
:   Updates to the *nviz* 3-D visualisation tool include experimental
    loading and saving of 3d.view files from the GRASS database,
    off-screen rendering and implementation of many planned features for
    which 'stub\' functionality only has existed up to now. In addition
    the new module *d.nviz* allows automated creation of fly-through
    animations in nviz.

**Improved Inverse distance weighted interpolation**
:   An improved algorithm in *s.surf.idw* indexes sites and allows
    greatly improved performance when the region resolution and number
    of sites are both very large.

**Experimental LIDAR processing tools** (not compiled by default)
:   *s.bspline.reg*, *s.correction*, *s.edgedetection*, *s.growing*,
    *s.to.qrast*

**Experimental hydrology and sediment transport simulation tools** (not compiled by default)
:   *r.sim.sediment*, *r.sim.water*

**Experimental large-scale watershed computation**
:   *r.terraflow*

**G3D 3-D Raster Voxel tools enabled**
:   The 3-D raster processing tools are fully enabled in this release of
    GRASS. This includes the modules *g3.region*, *g3.list*,
    *g3.remove*, *g3.rename*, *g3.setregion*, *r3.colors*,
    *r3.in.ascii*, *r3.in.grid3*, *r3.in.v5d*, *r3.info*, *r3.mapcalc*,
    *r3.mask*, *r3.mkdspf*, *r3.null*, *r3.out.ascii*, *r3.out.v5d*,
    *r3.showdspf*, *r3.timestamp*, *r3.to.sites*, *g3.createwind*,
    *s.to.rast3*, *s.vol.idw* and *s.vol.rst*

**MATLAB import and export** (not compiled by default)
:   GRASS can now import and export rasters from the MATLAB binary
    \'.mat\' format. The relevant modules are *r.in.mat* and *r.out.mat*

**Raster time series Statistical Analysis** (not compiled by default)
:   *r.series* can be used to create an output raster map where each
    cell value is a statistical function (average, count, median, mode,
    minimum, maximum, stddev, sum, variance, diversity, slope or offset)
    of the values of the corresponding cells in all the input raster
    maps.

**Vis5D Output** (not compiled by default)
:   *r3.in.v5d* and *r3.out.v5d* already exist to allow data conversion
    between Vis5D and GRASS G3D format. Now in addition 2-D raster and
    vector data can be output to a Vis5D model (for further enhanced
    visualisation) using the new modules *r.out.v5d.topo* and
    *v.out.v5d.map*. *g.region.v5d* sets the region from a Vis5D file.

**TrueColor Support**
:   All the core display modules (*d.\**) now support 24-bit colour.

**More reliable raster import**
:   Technical changes and bugfixes to the *r.in.gdal* raster import
    module mean that by default it will operate reliably with all recent
    and older versions of [GDAL](http://remotesensing.org/gdal/).

**Other new modules** (not all compiled/installed by default)
:   Miscellaneous new modules include *d.3d.views*, *d.info*,
    *d.out.png*, *d.sites.icons*, *i.tasscap.tm7*, *m.cogo*, *r.grow2*,
    *r.out.gdal*, *r.texture*, *r.univar2*, *s.cellstats*, *s.kernel*
    and *s.sv2svfit*.

#### Note on changes in datum transformation functionality for locations using the \'nad27\' and \'nad83\' datums

Released versions of GRASS 5.0.x from 5.0.0pre4 onward (i.e. up to and
including 5.0.3) have included the capability to perform
NAD27\<\--\>NAD83 datum conversions. This was done using the published
NADCON conversion tables, if and only if the line \'datum: nad27\'
appeared in the PROJ\_INFO file for one location and \'datum: nad83\' in
the other. Even if datum transformation parameters were specified (e.g.
dx, dy, dz) they were ignored and the NADCON tables used. In GRASS 5.3
any datum transformation parameters present in the PROJ\_INFO file will
be used. These are likely to be less accurate than the NADCON
transformation (unless *g.setproj* is re-run for the location and the
NADCON parameters specifically selected). Many more datum transformation
options are available in this release of GRASS and *g.setproj* should be
re-run if in any doubt that the location is using the most up-to-date
datum parameters.

### Why is 5.4.0 not yet released?

The developers want to ensure that 5.4.0 is a stable release. GRASS
development relies on people willing to help. This 5.3.0 release is a
candidate for becoming the 5.4.0 release. It can only be made stable if
it enjoys a lot of testing. Please give it a spin. Report bugs to the
[GRASS bugtracker](../bugtracking/bugreport.html). Don\'t hesitate to
report a bug which you find in the new release.

If you are interested in joining the developers team, and/or share
algorithms or ideas with the GRASS community, contact us!\
[http://grass.itc.it/grassdevel.html](../grassdevel.html)

### Concurrent Development Series 5.7

Major changes and improvements to the vector engine and attribute
management system have been implemented in the [5.7.x
line](../grass57/), which is very usable today and will become the next
major production series as 5.8.x. At present development is taking place
concurrently on both the 5.3.x and 5.7.x lines, but once the stable
release of 5.4.0 is made, all development effort will transfer to 5.7.x.

We are always looking for both testers and developers to help us
maintain and accelerate this development cycle.

------------------------------------------------------------------------

[GRASS Development Team](http://grass.itc.it)
