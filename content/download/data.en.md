---
title: "Data"
date: 2025-05-21T11:02:05+06:00
description: "Download sample data ready for GRASS"
weight: 
categories: [nl]
layout: "data"
---

  
#### Quick links

[ [**North Carolina dataset**](#NorthCarolinaDataset) | [**Datasets for special topics**](#SpecialTopicDatasets) | [**Spearfish dataset**](#SpearFishDataset) | [**Global datasets**](#GlobalDatasets) ]


<div class="row">
  <div class="col-sm-4">
    <div class="alert rounded-0 alert-default row">
    <span><i class="fa fa-arrow-right"></i> This section gathers sample datasets for learning or testing GRASS. Datasets are made available as ready-to-use GRASS  <b>projects</b> and sample data in other
    common formats.</span>
    <span><i class="fa fa-arrow-right"></i> Note: an easy way to download sample data is from the <b>download button on the GRASS GUI</b>.</span>
    </div>
  </div>
  <div class="col-sm-8 text-center">
    <img src="/images/gallery/gui/download_sample_data_grass8.png" 
     width="95%" 
     alt="Download sample data from the GUI">
  </div>
</div>

<hr>

### <a name="NorthCarolinaDataset"></a> North Carolina dataset

This dataset is a modern package of geospatial data from the state of North Carolina (NC), USA. It offers raster, vector, LiDAR and satellite data (EPSG: 3358).
Most of the examples in the [manuals](/learn/manuals) of different modules are written with this dataset. 
The description, list of maps, and a quick usage tutorial are available <a href="https://www.grassbook.org/wp-content/uploads/grasslocations/nc_spm_08_contents.html">here</a>.

The North Carolina dataset can be downloaded in two versions:
<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="https://grass.osgeo.org/sampledata/north_carolina/nc_spm_08_grass7.zip" target="_blank"> North Carolina full dataset </a></span>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/nc_spm_08_grass7.zip" class="inl btn btn-primary" target="_blank">Download ZIP (159 MB)</a>
  <a href="https://grass.osgeo.org/sampledata/north_carolina/nc_spm_08_grass7.tar.gz" class="inl btn btn-secondary">Download TAR.GZ (159 MB)</a>
  </li>
  <li>
  <span class="mwl"><a href="/sampledata/north_carolina/nc_basic_spm_grass7.zip" target="_blank"> North Carolina basic dataset </a></span>
  <a href="/sampledata/north_carolina/nc_basic_spm_grass7.zip" class="inl btn btn-primary" target="_blank">Download ZIP  (50 MB)</a>
  <a href="/sampledata/north_carolina/nc_basic_spm_grass7.tar.gz" class="inl btn btn-secondary">Download TAR.GZ  (50 MB)</a>
  </li>
</ul>

<hr>

### <a name="SpecialTopicDatasets"></a> Datasets for special topics

<ul id="links" class="list-unstyled version">
  <li>
   <span class="mwl"><a href="/grass-stable/manuals/addons/i.sentinel.html" target="_blank"> Sentinel-2 reduced</a></span>
   <a href="/sampledata/north_carolina/nc_sentinel_utm17n.zip" class="inl btn btn-primary" target="_blank">Download ZIP (66 MB)</a>
   <p>Six massively reduced Sentinel-2 scenes (SAFE format)</p>
  </li>
  <li>
   <span class="mwl"><a href="/grass-stable/manuals/topic_LIDAR.html" target="_blank"> LiDAR </a></span>
   <a href="/sampledata/north_carolina/lidar_raleigh_nc_spm_height_feet_las.zip" class="inl btn btn-primary" target="_blank">Download zipped LAS (21 MB)</a>
   <a href="/sampledata/north_carolina/lidar_raleigh_nc_spm_height_feet.laz" class="inl btn btn-primary">Download LAZ (6 MB)</a>
   <p>Extra Raleigh (NC) LiDAR data file (note: height in feet): multi-return</p>
  </li>
  <li>
   <span class="mwl"><a href="/grass-stable/manuals/ " target="_blank"> Climate </a></span>
   <a href="/sampledata/north_carolina/nc_climate_spm_2000_2012.zip" class="inl btn btn-primary" target="_blank">Download ZIP (690 MB)</a>
   <p>North Carolina mapset with climatic data time series (nc_climate_spm_2000_2012). Unzip within North Carolina location, either full or basis datasets. See also the related <a href="http://ncsu-geoforall-lab.github.io/grass-temporal-workshop/">tutorial</a></p>
  </li>
  <li>
   <span class="mwl"><a href="/grass-stable/manuals/temporalintro.html" target="_blank"> Time series </a></span>
   <a href="/sampledata/north_carolina/nc_spm_mapset_modis2015_2016_lst.zip" class="inl btn btn-primary" target="_blank">Download ZIP (for G7, 2 MB)</a>
   <a href="/sampledata/north_carolina/nc_spm_mapset_modis2015_2016_lst_grass8.zip" class="inl btn btn-primary" target="_blank">Download ZIP (for G8, 2 MB)</a>
   <p>MODIS Land Surface Temperature mapset (to unzip in NC location): MODIS LST raster time series (<a href="https://lpdaac.usgs.gov/products/mod11b3v006/">MOD11B3</a>, 6km, monthly)</p>
  </li>
<!-- not sure?
  <li>
   <span class="mwl"><a href="/grass-stable/manuals/projectionintro.html" target="_blank"> Projection </a></span>
   <a href="/sampledata/north_carolina/" class="inl btn btn-primary" target="_blank">Download ZIP (2 MB)</a>
   <p>NAD83(HARN) / North Carolina, EPSG 3358)</p>
  </li>
-->
  <li>
   <span class="mwl"><a href="https://grassbook.org/datasets/datasets-3rd-edition/" target="_blank"> Data for import </a></span>
   <a href="https://grassbook.org/datasets/datasets-3rd-edition/" class="inl btn btn-primary" target="_blank">Download ZIP files</a>
   <p>Selected North Carolina maps in common GIS formats (SHAPE, KML, GeoTIFF) including RGB orthophoto</p>
  </li>
  <li>
   <span class="mwl"><a href="/sampledata/slovakia3d_readme.txt" target="_blank"> 3D / voxel </a></span>
   <a href="/sampledata/slovakia3d_grass7.tar.gz" class="inl btn btn-primary" target="_blank">Download ZIP (8.9 MB)</a>
   <p>Complete Slovakia 3D precipitation location: Slovakia 3D precipitation voxel dataset</p>
  </li>
</ul>

<hr>

### <a name="SpearFishDataset"></a> Spearfish dataset

This is the classical GRASS dataset from the 1980th covering a part of
Spearfish, South Dakota, USA, with raster, vector and point data. For more information on the dataset see
the short <a href="/sampledata/spearDB.pdf">documentation</a> and
<a href="/sampledata/spearfish_docs_1979_p163to171.tar.gz">soil data documentation</a> (with
<a href="/sampledata/soils_legend.txt">legend</a> for soils map).
<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="/sampledata/spearfish_grass70data-0.3.tar.gz" target="_blank"> Spearfish dataset </a></span>
  <a href="/sampledata/spearfish_grass70data-0.3.tar.gz" class="inl btn btn-primary" target="_blank">Download TAR.GZ (20 MB)</a>
  </li>
</ul>

<hr>

### <a name="GlobalDatasets"></a> Global datasets
Based on the <a href="https://www.naturalearthdata.com/">Natural Earth data collection</a>, a GRASS project with global
background maps is available in the World Geodetic System 1984 (WGS84). It is provided in two versions, a smaller, basic one and 
a more comprehensive collection with additional hydrological and ecological data: 
<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="https://doi.org/10.5281/zenodo.3762773" target="_blank"> Basic global dataset </a></span>
  <a href="https://zenodo.org/records/13370131/files/natural_earth_dataset.zip?download=1" class="inl btn btn-primary" target="_blank">Download ZIP (121.3 MB)</a>
  </li>
</ul>

<ul id="links" class="list-unstyled version">
 <li>
  <span class="mwl"><a href="https://doi.org/10.5281/zenodo.13370326" target="_blank"> Full global dataset </a></span>
  <a href="https://zenodo.org/records/13370326/files/global-dataset.zip?download=1" class="inl btn btn-primary" target="_blank">Download ZIP (2.2 GB)</a>
  </li>
</ul>


In the [Global datasets](https://grasswiki.osgeo.org/wiki/Global_datasets) wiki, the community shares information on other open datasets
all over the globe and how they can be imported into GRASS.

<hr>
