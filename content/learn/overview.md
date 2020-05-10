---
title: "What is GRASS GIS?"
date: 2018-12-29T11:02:05+06:00
layout: "overview"
---

<div class="container">
<div class="row mt-30">
<div class="col-lg-4 text-center">
<img src="/images/logos/grasslogo.svg" width="42%" alt="GRASS GIS">
</div>
<div class="col-lg-8">
<p><b>G</b>eographic <b>R</b>esources <b>A</b>nalysis <b>S</b>upport 
<b>S</b>ystem, commonly referred to as <b>GRASS GIS</b>, is a Geographic
Information System (GIS) technology built for vector and raster geospatial
data management, geoprocessing, spatial modelling and visualization.</p>
<p><b>GRASS GIS</b> is Free and Open Source Software released under the 
terms of the <a href="/download/license">GNU General Public License (GPL >= v2)</a>. 
GRASS GIS is also a founding member and an affiliated  project of the
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
releases were in charge of the Construction Engineering Resesarch
Laboratory (CERL) in Champaign, Illinois. However, since 1997 a worldwide 
network of developers continue to develop and release GRASS GIS. See the 
<a href="/about/history" target="_blank">GRASS history</a> section for 
more details and the full list of 
<a href="about/history/releases" target="_blank">releases</a>.</p>

<p>The strength and success of GRASS GIS relies on the user community. 
The *philosophy* of the GRASS GIS Development Team is to encourage users 
to develop their own unique tools and applications as well as to improve 
the existent ones.</p>

</div>
<div class="col-lg-6 text-center">
<img class="bsh" src="/images/gallery/gui/grass70_gui_example.png" width="89%" alt="GRASS GIS">
</div>

</div>
</div>

### Main features

<div class="container">
<div class="row mt-20">

<div class="col-lg-6 text-center">
<img class="bsh" src="/images/gallery/gui/gui-grass-example-2.png" width="89%" alt="GRASS GIS">
</div>

<div class="col-lg-6">
<p><b>GRASS GIS</b> runs on Linux, Mac and Windows. It comes with 
both an intuitive graphical user interface (GUI) and a command line 
syntax useful for automation and production.</p>
<p><b>GRASS GIS</b> contains over 
<b><a href="https://grass.osgeo.org/grass-devel/manuals/full_index.html" target="_blank">500 modules</a></b> 
to process and render geographic data. The software allows to manipulate
a variety of raster, vector and 3D formats, and run simple to advanced 
spatial analysis and modeling. GRASS GIS can connect to spatial databases 
but also interface with a variety of third-party systems and libraries.</p>
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
<img class="bsh" src="/images/other/grass_through_qgis.png" width="80%" alt="GRASS GIS through QGIS">
</div>

<div class="col-lg-6">
GRASS GIS can be used through different interfaces: 
<ul>
<li>The simplest for new users is the <strong>Graphical User Interface</strong> (GUI).</li>
<li>Power users use the text-based <strong>command line interface</strong> (CLI).</li>
<li><strong>C API</strong> for programming.</li>
<li>Scripting library and object-oriented <strong>Python API</strong>.</li>
<li><strong>Web interface</strong> through WPS servers.</li>
<li>QGIS provides two different ways to run GRASS GIS modules.</li>
<li>R provides an interface to GRASS GIS through the package <strong><i>rgrass7</i></strong>.</li>
</ul>
</div>

</div>
</div>

### Addons to extend GRASS functionality

<div class="container">
<div class="row mt-20">

<div class="col-lg-6">
<p><b>GRASS GIS</b> capabilities are significantly increased by an impressive
list of <b>extensions or add-ons</b>. These modules are contributed by users
or developers but are not yet part of the standard distribution.
There are currently more than <b>300 extensions</b> in the 
<a href="https://github.com/OSGeo/grass-addons/tree/master/grass7" >official GRASS Add-ons repo</a> 
and many others in the wild to perform the most varied type of tasks.
<br>Have a look at the full list of 
<a href="https://grass.osgeo.org/grass7/manuals/addons/" target="_blank">add-ons manual pages</a> 
to get an idea. If you don't find what you need, maybe you can 
<a href="/contribute/development/">develop</a> your own add-on then.
Read <a href="/download/addons/">here</a> to learn how to install them.</p>
</div>


<div class="col-lg-6 text-center">
<img class="bsh" src="https://grass.osgeo.org/grass78/manuals/addons/number_seasons_ndvi.png" width="75%" alt="Output of r.seasons' addon">
</div>

</div>
</div>