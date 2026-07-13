---
title: "Try GRASS online"
date: 2026-05-12T11:02:05+02:00
layout: "general"
---

<!--
#### Quick links

[ [**Jupyter notebooks with GRASS GIS on Binder**](#try-grass-in-your-browser-with-jupyter-notebooks) | [**GRASS GIS in CoCalc**](#GRASSGISCoCalc) | [**GRASS GIS as rollapp**](#try-grass-as-rollapp) ]
-->

# Try GRASS online

There are several ways to try **GRASS** in your browser without installing it locally, either with [Binder](#try-grass-in-your-browser-with-jupyter-notebooks) or [rollApp](#try-grass-as-rollapp).
If you're comfortable scripting in Python, start with Binder; for a point-and-click interface, choose rollApp.
Trying GRASS online is a great way to get a quick feel for what it can do,
but the full experience—including add-ons, your own data, and the best performance—comes with a [local install](/download/).

## Try GRASS in your browser with Jupyter notebooks

<a href="https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fjupyter_tutorial.ipynb" target="_blank">
<img src="/images/other/GRASS_mybinder_jupyter_intro.png"
  alt="GRASS Jupyter intro"
  title="GRASS Jupyter intro"
  width="45%" style="float:right;padding-left:20px">
</a>

Drive GRASS through Python notebooks in your browser, with no installation, no account, and no setup required.
In notebooks, you use the GRASS Python API alongside other scientific Python libraries, and the notebooks from the official GRASS repository are ready to launch on Binder for quick prototyping and sharing.
[Binder](https://mybinder.org) hosts a fresh, temporary environment for each session and resets when you're done; sessions are short-lived and have limited compute, so they're best for trying things out and sharing demos.

<p>
  <a href="https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fjupyter_tutorial.ipynb" class="inl btn btn-primary" target="_blank">Start the GRASS tutorial on Binder</a>
</p>

Other example notebooks on Binder:
[buffer analysis](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fjupyter_example.ipynb),
[hydrology](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fhydrology.ipynb),
[viewshed analysis](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fviewshed_analysis.ipynb),
[solar potential](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fsolar_potential.ipynb).

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

## Try GRASS as rollApp

<a href="https://www.rollapp.com/app/grassgis" target="_blank">
<img src="/images/other/GRASS_rollapp.png"
  alt="Try GRASS as rollApp"
  title="Try GRASS as rollApp"
  width="35%" style="float:right;padding-left:20px">
</a>

Use the full GRASS desktop interface in your browser through [rollApp](https://www.rollapp.com), a cloud platform that runs native applications online.
You can connect a rollApp session to cloud storage like Google Drive, Dropbox, OneDrive, or Box for loading and saving data.

You have to register (which is free) to launch a rollApp, and only minimal compute resources are available in the free tier.
rollApp currently runs GRASS 8.2.
The GRASS project does not control when rollApp upgrades to a newer version.

<p style="clear:both">
  <a href="https://www.rollapp.com/app/grassgis" class="inl btn btn-primary" target="_blank">Launch GRASS on rollApp</a>
</p>
