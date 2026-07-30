---
title: "What is GRASS?"
date: 2025-05-21T10:12:05+02:00
layout: "overview"
---

{{< columns img="/images/logos/grass-logo/grass-green.svg" alt="GRASS logo" side="left" imgcol="4" imgwidth="42%" imgclass="" rowclass="mt-30" >}}
**GRASS**, Geographic Resources Analysis Support System, is a powerful
computational engine for vector and raster data management, geoprocessing,
spatial modelling and visualization.

**GRASS** is Free and Open Source Software released under the terms of the
[GNU General Public License (GPL >= v2)](/about/license). GRASS is a project
of the [Open Source Geospatial Foundation (OSGeo)](https://osgeo.org) and is
fiscally sponsored by [NumFOCUS](https://numfocus.org).
{{< /columns >}}

### General presentation

{{< columns img="/images/news/grass83_news_screenshot.png" alt="GRASS graphical user interface" side="right" imgwidth="99%" >}}
The **GRASS** project is an international team effort that includes
[scientists and developers](https://grasswiki.osgeo.org/wiki/Team) from
various fields. GRASS has been under continuous development since 1982
involving a large number of federal US agencies, universities, and private
companies. The development of core components and the management of releases
were in charge of the Construction Engineering Research Laboratory (CERL) in
Champaign, Illinois. However, since 1997 a worldwide network of developers
continue to develop and release GRASS. See the [GRASS history](/about/history)
section and the full list of [releases](/about/history/releases) for more
details.
{{< /columns >}}

### Main features

{{< columns img="/images/gallery/vector/hexagons_3d_white_outlier.png" alt="3D hexagon visualization made with GRASS" side="left" >}}
**GRASS** runs on Linux, Mac and Windows. It comes with both an intuitive
graphical user interface (GUI) and a command line syntax useful for
automation and production.

**GRASS** contains over
**[500 modules](/grass-stable/manuals/full_index.html)** to process and
render geographic data. The software allows to manipulate a variety of
raster, vector and 3D formats, and run simple to advanced spatial analysis
and modeling. GRASS can connect to spatial databases but also interface with
a variety of third-party systems and libraries. See the *Interfaces* section
below for details.
{{< /columns >}}

{{< columns img="/images/gallery/temporal/summer_solstice_centennial.gif" alt="Animation of summer solstice solar irradiation" side="right" imgcol="5" >}}
Some selected relevant features are:

- Support for nearly all common GIS file formats through GDAL-OGR library.
- Raster analysis: map algebra, interpolation, masking, landscape analysis.
- 3D raster (voxel) analysis: 3D map algebra, 3D interpolation, 3D visualization.
- SQL: database interfaces to PostgreSQL, SQLite, etc.
- Geo-coding of raster and vector maps.
- Point cloud analysis: LiDAR, interpolation.
- Terrain analysis: contour and surface generation, cost-path and slope-aspect analysis, hydrological tools.
- Vector analysis: topology corrections and generalization, buffer, overlays, network analysis.
- Temporal framework: support for raster and vector time series management and analysis, **big spatio-temporal environmental data**.
- Image processing: aerial, UAV and satellite data (MODIS, Landsat, Sentinel, etc.), supervised and unsupervised classification, full **Object Based Image Analysis** (OBIA) chain.
- Spatial statistics: correlation and covariance analysis, regression, zonal statistics.
{{< /columns >}}

### Interfaces

{{< columns img="/images/news/jupyter_interactive_viewshed.png" alt="Interactive viewshed in a Jupyter notebook" side="left" imgwidth="90%" >}}
GRASS has various interfaces:

- Some users prefer to use GRASS as a Desktop GIS through the **Graphical User Interface**.
- Power users prefer the text-based **command line interface**.
- [**C API**](https://grasswiki.osgeo.org/wiki/GRASS_GIS_APIs#The_C-API) for programming.
- [Scripting library](https://grasswiki.osgeo.org/wiki/GRASS_Python_Scripting_Library) and [object-oriented](https://grasswiki.osgeo.org/wiki/Python/pygrass) **Python API**.
- [Jupyter Notebooks](https://grasswiki.osgeo.org/wiki/GRASS_GIS_Jupyter_notebooks).
- **Web interface** through [WPS servers](https://grasswiki.osgeo.org/wiki/WPS).
- [QGIS](https://docs.qgis.org/latest/en/docs/user_manual/grass_integration/grass_integration.html) provides two different ways to run GRASS modules: Processing toolbox and the GRASS plugin.
- R provides an [interface to GRASS](https://grasswiki.osgeo.org/wiki/R_statistics) through the package ***rgrass***.
- It is also possible to [try GRASS online](/learn/tryonline)!
{{< /columns >}}

### Addons to extend GRASS functionality

{{< columns img="/images/addons/number_seasons_ndvi.png" alt="Output of the r.seasons addon" side="right" imgwidth="75%" >}}
**GRASS** capabilities are significantly increased by an impressive list of
**extensions or addons**. These modules are contributed by users or
developers but are not yet part of the standard distribution. There are
currently more than **300 extensions** in the
[official GRASS Addons repo](https://github.com/OSGeo/grass-addons/tree/grass8)
and many others in the wild to perform the most varied type of tasks.

Have a look at the full list of
[addons manual pages](/grass-stable/manuals/addons/) to get an idea. If you
don't find what you need, maybe you can
[develop](/contribute/development/) your own add-on then. Read
[here](/download/addons/) to learn how to install them.
{{< /columns >}}
