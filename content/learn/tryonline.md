---
title: "Try GRASS online"
date: 2025-05-21T11:02:05+02:00
layout: "overview"
---

<!--
#### Quick links

[ [**Jupyter notebooks with GRASS GIS on Binder**](#GRASSGISJupyter) | [**GRASS GIS in CoCalc**](#GRASSGISCoCalc) | [**GRASS GIS as rollapp**](#GRASSGISrollapp) ]
-->

# Try GRASS without installing it locally

<div class="container">
<div class="row mt-30">
<div class="col-lg-8">
<p>There are several ways to try out <b>GRASS</b> in your browser without even installing it. You can have a glance at <b>GRASS</b> in either <a href="#GRASSGISJupyter">Binder</a><!--, <a href="#GRASSGISCoCalc">CoCalc</a>--> or <a href="#GRASSGISrollApp">rollApp</a>.</p>
</div>
<div class="col-lg-4">
<img src="../../images/logos/grass-green.svg" width="25%" alt="GRASS">
</div>
</div>
</div>

## Try GRASS in your browser with Jupyter notebooks

<a href="https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fnotebooks%2Fjupyter_example.ipynb">
<img src="/images/other/GRASS_mybinder_jupyter_intro.png"
  alt="GRASS Jupyter intro"
  title="GRASS Jupyter intro"
  width="45%" style="float:right;padding-left:25px;padding-bottom:25px">
</a>

You can explore the GRASS Python API instantly in your web browser—no installation, no account, and no setup required.
Binder starts a fresh, temporary environment, so you can experiment freely without affecting your local system.

Open GRASS in Binder with the introductory notebook.
<https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fnotebooks%2Fjupyter_example.ipynb>

Notebooks from the official GRASS repository are readily available in Binder, making it easy to:

* explore the Python API interactively,
* get a feel for GRASS without configuring anything on your machine,
* prototype workflows before integrating them locally,
* modify and experiment without risk—the environment resets for you when you're done.

Note: The Jupyter environment provides access to the full GRASS Python API and core computational capabilities, but not the graphical interface.

<div class="container">
<div class="row mt-20">
<div class="col-lg-6 text-center">
<a href="https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fnotebooks%2Fjupyter_example.ipynb"><img class="bsh" src="../../images/other/GRASS_mybinder_jupyter_intro.png" width="89%" alt="GRASS Jupyter intro"></a>
</div>
<div class="col-lg-6">
<p>The <b>Binder</b> project offers reproducible, shareable, interactive computing environments. From the <b>GRASS</b> community, GitHub repositories are available to launch a <b>GRASS</b> computing environment with sample data and working examples.
Through the Binder hub <b>mybinder.org</b>, compute environments defined in the git repositories can be built and started. You can do so by simply clicking on one of the two browser images with Jupyter notebooks:</p>

<p>By clicking on the upper screenshot you can start a basic introduction to Jupyter Notebooks with <b>GRASS</b>.</p>
</div>

<div class="col-lg-6 text-center">
<a href="https://mybinder.org/v2/gh/wenzeslaus/geospatial-modeling-course-jupyter/master"><img class="bsh" src="../../images/other/GRASS_mybinder_modelling_course.png" width="89%" alt="GRASS Jupyter modelling course" title="GRASS Jupyter modelling course"></a>
</div>
<div class="col-lg-6">
<p>By clicking on the lower screenshot you can start a full, reproducible geospatial modelling course with <b>GRASS</b>. You can select your topic of interest by double clicking one of the notebooks once Jupyter has started.</p>
<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Note: Using <b>GRASS</b> in a Jupyter Notebook requires at least basic skills in Python or UNIX command line and does not include the full graphical user interface (GUI).
</div>
</div>

</div>
</div>

Find more [GRASS Jupyter notebooks](https://grasswiki.osgeo.org/wiki/GRASS_GIS_Jupyter_notebooks) in the Wiki.

<!-- commented out since too slow and sample data still missing in CoCalc:

### Try GRASS GIS in CoCalc

<div class="container">
<div class="row mt-20">
<div class="col-lg-6 text-center">
<a href="https://cocalc.com/app?anonymous=x11"><img class="bsh" src="../../images/other/GRASS_cocalc.png" width="89%" alt="Try GRASS GIS in CoCalc" title="Try GRASS GIS in CoCalc"></a>
</div>
<div class="col-lg-6">
<p><b><a href="https://cocalc.com/help?session=default">CoCalc</a></b> offers a comprehensive collection of software environments and libraries. It ships hundreds and thousands of Python, R packages or Julia libraries and provides access to over 200 other executables. <b>GRASS GIS</b> is one of them.</p>
<p>In <b>CoCalc</b>, you can try out the graphical user interface (GUI) of <b>GRASS GIS</b> in a full Linux environment in your browser. Click on the image to get to CoCalc. There you can start <b>GRASS GIS</b> by typing "grass" in the console or via the launch button in the lower left tab.</p>
<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Note: In the free online version, <b>CoCalc</b> offers only minimal compute resources, so please be patient with load times. Also, there is no download in the free tier, so testing possibilities with real data are limited. Build on Ubuntu stable packages, <b>CoCalc</b> neither offers the latest and freshest versions.
</div>
</div>
</div>
</div>
-->

### Try GRASS as rollApp

<div class="container">
<div class="row mt-20">
<div class="col-lg-6 text-center">
<a href="https://www.rollapp.com/app/grassgis"><img class="bsh" src="../../images/other/GRASS_rollapp.png" width="89%" alt="Try GRASS as rollapp" title="Try GRASS as rollapp"></a>
</div>
<div class="col-lg-6">
<p><b><a href="https://www.rollapp.com">rollApp</a></b> is a cloud platform for native applications which allows you to run GRASS directly in the web browser with the graphical user interface (GUI) and can be connected to cloud storages like Google Drive, Dropbox, OneDrive, or Box.
Click on the screenshot to get to the launch site.</p>
<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Note: You have to register (which is free) in order to launch a rollApp. <!--And as with CoCalc, only--> Note that only minimal compute resources are available in the free rollApp tier.
</div>
</div>

</div>
</div>

</div>
</div>
