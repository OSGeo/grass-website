---
title: "Data"
date: 2018-12-29T11:02:05+06:00
description: "Download sample data ready for GRASS GIS"
weight: 
categories: [nl]
layout: "data"
---

  
#### Quick links

[ [**North Carolina dataset**](#NorthCarolinaDataset) | [**Spearfish dataset**](#SpearFishDataset) | [**Datasets for special topics**](#SpecialTopicDatasets) | [**Global datasets**](#GlobalDatasets) ]

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> This section gathers sample datasets for learning or testing GRASS GIS. Datasets are made available as ready-to-use GRASS GIS <b>locations</b> and sample data in other
common GIS formats.

</div>

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Note: an easy way to download sample data is from the <a href="#DownloadGUI">download button on the GRASS GIS startup screen</a>.
</div>

<hr>

### <a name="NorthCarolinaDataset"></a> North Carolina dataset

This dataset is a modern package of geospatial data from the state of North Carolina, USA. It offers raster, vector, LiDAR and satellite data.
Most of the examples in the module <a href="../../learn/manuals">manuals</a> are written with this dataset. Furthermore, the
<a href="https://grass.osgeo.org/grass-devel/manuals/libpython/gunittest_testing.html">testsuite</a> operates with this dataset.
The description, list of maps, and a quick usage tutorial are available <a href="https://www.grassbook.org/wp-content/uploads/grasslocations/nc_spm_08_contents.html">here</a>.

The North Carolina dataset can be downloaded in two versions:
<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="http://fatra.cnr.ncsu.edu/data/nc_spm_full_v2alpha.zip " target="_blank"> North Carolina full dataset </a></span>
  <a href="http://fatra.cnr.ncsu.edu/data/nc_spm_full_v2alpha.zip" class="inl btn btn-primary" target="_blank">Download ZIP (159MB)</a>
  <a href="http://fatra.cnr.ncsu.edu/data/nc_spm_full_v2alpha2.tar.gz" class="inl btn btn-secondary">Download TAR.GZ (159MB)</a>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/sampledata/north_carolina/nc_basic_spm_grass7.zip" target="_blank"> North Carolina basic dataset </a></span>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/nc_basic_spm_grass7.zip" class="inl btn btn-primary" target="_blank">Download ZIP  (50MB)</a>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/nc_basic_spm_grass7.tar.gz" class="inl btn btn-secondary">Download TAR.GZ  (50MB)</a>
  </li>
</ul>

<hr>


### <a name="SpearFishDataset"></a> Spearfish dataset

This is the classical GRASS GIS dataset from the 1980th covering a part of
Spearfish, South Dakota, USA, with raster, vector and point data. For more information on the dataset see
the short <a href="https://grass.osgeo.org/uploads/grass/sampledata/spearDB.pdf">documentation</a> and
<a href="https://grass.osgeo.org/uploads/grass/sampledata/spearfish_docs_1979_p163to171.tar.gz">soil data documentation</a> (with
<a href="https://grass.osgeo.org/uploads/grass/sampledata/soils_legend.txt">legend</a> for soils map). 
<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="https://grass.osgeo.org/sampledata/spearfish_grass70data-0.3.tar.gz" target="_blank"> Spearfish dataset </a></span>
  <a href="https://grass.osgeo.org/sampledata/spearfish_grass70data-0.3.tar.gz" class="inl btn btn-primary" target="_blank">Download TAR.GZ (20MB)</a>
  </li>
</ul>

<hr>


### <a name="SpecialTopicDatasets"></a> Datasets for special topics
<hr>

<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="https://grassbook.org/datasets/datasets-3rd-edition/" target="_blank"> Data import </a></span>
  <a href="https://grassbook.org/datasets/datasets-3rd-edition/" class="inl btn btn-primary" target="_blank">Download ZIP</a>

  <p>Selected maps in common GIS formats (SHAPE, KML, GeoTIFF) including RGB orthophoto</p>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/grass-stable/manuals/" target="_blank"> LiDAR </a></span>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/lidar_raleigh_nc_spm_height_feet_las.zip" class="inl btn btn-primary" target="_blank">LAS (21MB)</a>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/lidar_raleigh_nc_spm_height_feet.laz" class="inl btn btn-primary">LAZ (6MB)</a>
  <p>Extra Raleigh LiDAR dataset (note: height in feet):  multi-return</p>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/grass-stable/manuals/ " target="_blank"> Climate </a></span>
  <a href="https://grass.osgeo.org/grass-stable/manuals/" class="inl btn btn-primary" target="_blank">Download ZIP (690MB)</a>
  <p>North Carolina location with climatic data time series (nc_climate_spm_2000_2012) - see also the related <a href="http://ncsu-geoforall-lab.github.io/grass-temporal-workshop/">tutorial</a></p>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/grass-stable/manuals/ " target="_blank"> Time series </a></span>
  <a href="https://grass.osgeo.org/grass-stable/manuals/" class="inl btn btn-primary" target="_blank">Download ZIP (2MB)</a>
  <p>Extra time series of MODIS Land Surface Temperature (mapset to unzip in NC location): MODIS LST time series</p>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/grass-stable/manuals/ " target="_blank"> Projection </a></span>
  <a href="https://grass.osgeo.org/grass-stable/manuals/" class="inl btn btn-primary" target="_blank">Download ZIP (2MB)</a>
  <p>NAD83(HARN) / North Carolina, EPSG 3358)</p>
  </li>
   <li>
  <span class="mwl"><a href="https://grass.osgeo.org/sampledata/slovakia3d_readme.txt" target="_blank"> 3D / voxel </a></span>
  <a href="https://grass.osgeo.org/sampledata/slovakia3d_grass7.tar.gz" class="inl btn btn-primary" target="_blank">Download ZIP (8.9MB)</a>
  <p>Complete Slovakia 3D precipitation location: Slovakia 3D precipitation voxel dataset</p>

  </li>
</ul>

<hr>

### <a name="GlobalDatasets"></a> Global datasets
On the [Global datasets](https://grasswiki.osgeo.org/wiki/Global_datasets) pages of the GRASS GIS WIKI, the community shares information on open datasets
all over the globe and how they are imported into GRASS GIS.

<hr>

### <a name="DownloadGUI"></a> Download of sample data from the GRASS GIS startup screen
<img src="../../images/gallery/gui/grass740_startup_sample_data_download_arrow.png" width="100%" alt="GRASS GIS">
