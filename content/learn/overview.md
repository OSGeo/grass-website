---
title: "What is GRASS GIS?"
date: 2022-04-25T10:12:05+02:00
layout: "overview"
---

<div class="container">
<div class="row mt-30">
<div class="col-lg-4 text-center">
<img src="/images/logos/grass-green.svg" width="42%" alt="GRASS GIS">
</div>
<div class="col-lg-8">
<p><b>G</b>eographic <b>R</b>esources <b>A</b>nalysis <b>S</b>upport 
<b>S</b>ystem, commonly referred to as <b>GRASS GIS</b>, is a Geographic
Information System (GIS) technology built for vector and raster geospatial
data management, geoprocessing, spatial modelling and visualization.</p>
<p><b>GRASS GIS</b> is Free and Open Source Software released under the 
terms of the <a href="/about/license">GNU General Public License (GPL >= v2)</a>. 
GRASS GIS is a project of the
<a href="https://osgeo.org">Open Source Geospatial Foundation (OSGeo)</a>.</p>
</div>
</div>
</div>

### General presentation

<div class="container">
<div class="row mt-20">

<div class="col-lg-6">
<p>The <b>GRASS GIS</b> project is an international team effort that includes 
<a href="https://grasswiki.osgeo.org/wiki/Team">scientists and developers</a> 
from various fields. GRASS has been under continuous development since 1982 
involving a large number of federal US agencies, universities, 
and private companies. The development of core components and the management of 
releases were in charge of the Construction Engineering Research
Laboratory (CERL) in Champaign, Illinois. However, since 1997 a worldwide 
network of developers continue to develop and release GRASS GIS. See the 
<a href="/about/history" target="_blank">GRASS history</a> section 
and the full list of 
<a href="/about/history/releases" target="_blank">releases</a>
for more details.</p>

<!-- <p>The strength and success of GRASS GIS relies on the user community. 
The <i>philosophy</i> of the GRASS GIS Development Team is to encourage users 
to develop their own unique tools and applications as well as to improve 
the existing ones.</p> -->

</div>
<div class="col-lg-6 text-center">
<img class="bsh" src="/images/news/grass83_news_screenshot.png" width="99%" alt="GRASS GIS">
</div>

</div>
</div>

### Main features

<div class="container">
<div class="row mt-20">

<div class="col-lg-6 text-center">
<img class="bsh" src="/images/gallery/vector/hexagons_3d_white_outlier.png" width="95%" alt="GRASS GIS">
</div>

<div class="col-lg-6">
<p><b>GRASS GIS</b> runs on Linux, Mac and Windows. It comes with 
both an intuitive graphical user interface (GUI) and a command line 
syntax useful for automation and production.</p>
<p><b>GRASS GIS</b> contains over 
<b><a href="/grass-stable/manuals/full_index.html" target="_blank">500 modules</a></b>
to process and render geographic data. The software allows to manipulate
a variety of raster, vector and 3D formats, and run simple to advanced 
spatial analysis and modeling. GRASS GIS can connect to spatial databases 
but also interface with a variety of third-party systems and libraries. 
See the <i>Interfaces</i> section below for details.</p>
</div>

</div>
</div>


<div class="container">
<div class="row mt-20">

Some selected relevant features are:

<ul>
<img class="bsh" src="/images/gallery/temporal/summer_solstice_centennial.gif" width="40%" style="float:right;padding-left:10px">
<li>Support for nearly all common GIS file formats through GDAL-OGR library.</li>
<li>Raster analysis: map algebra, interpolation, masking, landscape analysis.</li>
<li>3D raster (voxel) analysis: 3D map algebra, 3D interpolation, 3D visualization.</li>
<li>SQL: database interfaces to PostgreSQL, SQLite, etc.</li>
<li>Geo-coding of raster and vector maps.</li>
<li>Point cloud analysis: LiDAR, interpolation.</li>
<li>Terrain analysis: contour and surface generation, cost-path and slope-aspect analysis, hydrological tools.</li>
<li>Vector analysis: topology corrections and generalization, buffer, overlays, network analysis.</li>
<li>Temporal framework: support for raster and vector time series management and analysis, <strong>big spatio-temporal environmental data</strong>.</li>
<li>Image processing: aerial, UAV and satellite data (MODIS, Landsat, Sentinel, etc.), supervised and unsupervised classification, full <strong>Object Based Image Analysis</strong> (OBIA) chain.</li>
<li>Spatial statistics: correlation and covariance analysis, regression, zonal statistics.</li>
</ul>

</div>
</div>

### Interfaces

<div class="container">
<div class="row mt-20">

<div class="col-lg-6 text-center">
<img class="bsh" src="/images/news/jupyter_interactive_viewshed.png" width="90%" alt="GRASS GIS through QGIS">
</div>

<div class="col-lg-6">
GRASS GIS can be used through various interfaces: 
<ul>
<li>The simplest for new users is the <strong>Graphical User Interface</strong>.</li>
<li>Power users prefer the text-based <strong>command line interface</strong>.</li>
<li><a href="https://grasswiki.osgeo.org/wiki/GRASS_GIS_APIs#The_C-API" target="_blank"><strong>C API</strong></a> for programming.</li>
<li><a href="https://grasswiki.osgeo.org/wiki/GRASS_Python_Scripting_Library" target="_blank">Scripting library</a> and <a href="https://grasswiki.osgeo.org/wiki/Python/pygrass" target="_blank">object-oriented</a> <strong>Python API</strong>.</li>
<li><a href="https://grasswiki.osgeo.org/wiki/GRASS_GIS_Jupyter_notebooks" target="_blank">Jupyter Notebooks</a>.</li>
<li><strong>Web interface</strong> through <a href="https://grasswiki.osgeo.org/wiki/WPS" target="_blank">WPS servers</a>.</li>
<li><a href="https://docs.qgis.org/latest/en/docs/user_manual/grass_integration/grass_integration.html" target="_blank">QGIS</a> provides two different ways to run GRASS GIS modules: Processing toolbox and the GRASS GIS plugin.</li>
<li>R provides an <a href="https://grasswiki.osgeo.org/wiki/R_statistics" target="_blank">interface to GRASS GIS</a> through the package <strong><i>rgrass</i></strong>.</li>
<li>It is also possible to <a href="/learn/tryonline" target="_blank">try GRASS online</a>!</li>
</ul>
</div>

</div>
</div>

### Addons to extend GRASS functionality

<div class="container">
<div class="row mt-20">

<div class="col-lg-6">
<p><b>GRASS GIS</b> capabilities are significantly increased by an impressive
list of <b>extensions or addons</b>. These modules are contributed by users
or developers but are not yet part of the standard distribution.
There are currently more than <b>300 extensions</b> in the 
<a href="https://github.com/OSGeo/grass-addons/tree/grass8">official GRASS Addons repo</a>
and many others in the wild to perform the most varied type of tasks.
<br>Have a look at the full list of 
<a href="/grass-stable/manuals/addons/" target="_blank">addons manual pages</a>
to get an idea. If you don't find what you need, maybe you can 
<a href="/contribute/development/">develop</a> your own add-on then.
Read <a href="/download/addons/">here</a> to learn how to install them.</p>
</div>


<div class="col-lg-6 text-center">
<img class="bsh" src="https://grass.osgeo.org/grass-stable/manuals/addons/number_seasons_ndvi.png" width="75%" alt="Output of r.seasons' addon">
</div>

</div>
</div>
