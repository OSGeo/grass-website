---
title: "Windows"
date: 2025-05-21T11:02:05+02:00
description: "Download GRASS installers for Windows"
weight: 2
layout: "os"
---


#### Quick links

[ [**Standalone installers**](#standalone-installers) | [**OSGeo4W**](#OSGeo4W) ]

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Install GRASS on Windows using a standalone installer or OSGeo4W. </div>

<hr>


### <span id="standalone-installers"> Standalone installers </span>

Standalone installer: install GRASS with the required support packages.

#### <span id="GRASS-GIS-current"> GRASS {{< grassVersion version="current" >}} (current)</span>

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> <u>New stable release</u>, see the <a href="https://github.com/OSGeo/grass/releases/tag/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}">release announcement</a> for more information.</div>

 
*  {{< donateDialog isToggle=true >}}  
<a href="/grass{{< currentVersionNoDots.inline  >}}{{- .Site.Data.grass.current_version_nodots -}}{{</currentVersionNoDots.inline >}}/binary/mswindows/native/WinGRASS-{{< currentVersion.inline  />}}-1-Setup.exe" target="blank">
<i class="fa fa-download"></i> Download 64bit 
</a>
{{< /donateDialog  >}} 
 


<hr>

#### <span id="GRASS-GIS-old"> GRASS {{< grassVersion version="legacy" >}} (legacy)</span>

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> <u>Old stable release</u>, see <a href="https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures{{< legacyVersionNoDots.inline  >}}{{- .Site.Data.grass.legacy_version_nodots -}}{{</legacyVersionNoDots.inline >}}">GRASS {{< grassVersion version="legacy" type="short">}} new features</a> and <a href="https://github.com/OSGeo/grass/releases/tag/{{< legacyVersion.inline  >}}{{- .Site.Data.grass.legacy_version -}}{{</legacyVersion.inline >}}">GRASS {{< grassVersion version="legacy" >}} announcement</a> for more information.
</div>

*  {{< donateDialog isToggle=true >}}  
<a href="/grass{{< legacyVersionNoDots.inline  />}}/binary/mswindows/native/x86_64/WinGRASS-{{< legacyVersion.inline  />}}-3-Setup-x86_64.exe" target="blank">
<i class="fa fa-download"></i> Download 64bit
</a>
{{< /donateDialog  >}} 

<!--
*  [<i class="fa fa-download"></i> Download 32bit](/grass78/binary/mswindows/native/x86/WinGRASS-7.8.6-3-Setup-x86_64.exe)
-->

<hr>

#### <span id="GRASS-GIS-devel"> GRASS {{< grassVersion version="preview" >}} (preview)</span>

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> Active <u>development</u> and <u>experimental</u> <b>GRASS</b> version.
</div>

*  {{< donateDialog isToggle=true >}}  
<a href="https://wingrass.fsv.cvut.cz/grass{{< previewVersionNoDots.inline  >}}{{- .Site.Data.grass.preview_version_nodots -}}{{</previewVersionNoDots.inline >}}/" target="blank">
<i class="fa fa-download"></i> Download 64bit
</a>
{{< /donateDialog  >}}

<hr>


### <span id="OSGeo4W"> OSGeo4W  </span>

OSGeo4W is an installer for a broad set of open source geospatial software packages including GRASS as well as many other packages (QGIS, GDAL/OGR, and more).

*   {{< donateDialog isToggle=true >}}  
<a href="https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe" target="blank">
<i class="fa fa-download"></i> Download OSGeo4W v2
</a>
{{< /donateDialog  >}}


**NOTE FOR EXISTING USERS**: OSGeo4W v2 is now the regular repository. OSGeo4W v2 does not include a 32-bit version. If you need 32-bit support, use the version 1 download (See below). 

**CAUTION**: Upgrades of old (v1) setups using the new repository are not supported. You need to do a fresh install or use a different install directory.

Legacy download (OSGeo4W v1)

*  {{< donateDialog isToggle=true >}}  
<a href="https://download.osgeo.org/osgeo4w/v1/osgeo4w-setup-x86_64-v1.exe" target="blank">
<i class="fa fa-download"></i> Download OSGeo4W 64bit version 1
</a>
{{< /donateDialog  >}}
*  {{< donateDialog isToggle=true >}}  
<a href="https://download.osgeo.org/osgeo4w/v1/osgeo4w-setup-x86-v1.exe" target="blank">
<i class="fa fa-download"></i> Download OSGeo4W 32bit version 1
</a>
{{< /donateDialog  >}}


The following install modes are offered (see also the dedicated [wiki page](https://grasswiki.osgeo.org/wiki/Installation_Guide#OSGeo4W_installer) for further details):

##### Express Desktop Install mode:

Run the downloaded installer as administrator and select the **grass** (stable) or **grass-daily** (development) packages to install. All needed dependencies (e.g. GDAL, common python packages) will be automatically downloaded.

##### Advanced Install mode:
All packages can be individually selected and additional useful packages (e.g. python-pandas, msys) are available, too.

##### Command line mode:
Installation can also be done through command line, as shown below:

<pre style="background-color:#CCCCCC">
osgeo4w-setup.exe -q -k -P grass -s https://download.osgeo.org/osgeo4w/v2/x86_64/
</pre>

##### QGIS users:
In order to have GRASS support (also in QGIS-Processing) you need to install the "qgis*-grass-plugin" packages.


 {{< donateDialog >}}  
 {{< /donateDialog >}}  
