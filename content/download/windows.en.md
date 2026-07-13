---
title: "Windows"
date: 2026-05-08T11:02:05+02:00
description: "Download GRASS installers for Windows"
weight: 2
layout: "os"
---

[ [**GRASS {{< grassVersion version="current" type="short">}} (current)**](#current) | [**GRASS {{< grassVersion version="preview" type="short">}} (preview)**](#preview) | [**GRASS {{< grassVersion version="legacy" type="short">}} (legacy)**](#legacy) | [**OSGeo4W**](#OSGeo4W) ]

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> Install GRASS on Windows with the <a href="#OSGeo4W">OSGeo4W</a> installer. Windows <a href="/download/conda/">conda</a> packages are coming soon.
</div>

<hr>


### <span id="current"> GRASS {{< grassVersion version="current" >}} (current)</span>

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> <em>Current stable release</em>, see the <a href="https://github.com/OSGeo/grass/releases/tag/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}">release announcement</a> for more information.</div>

*  {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> OSGeo4W installer
</a>
{{< /donateDialog  >}} &mdash; select the <b>grass</b> package (see <a href="#OSGeo4W">OSGeo4W</a> below)
*  [conda](/download/conda/) &mdash; Windows packages coming soon

<hr>

### <span id="preview"> GRASS {{< grassVersion version="preview" >}} (preview)</span>

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> Active <em>development</em> and <em>experimental</em> <b>GRASS</b> version.
</div>

*  {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> OSGeo4W installer
</a>
{{< /donateDialog  >}} &mdash; select the <b>grass-daily</b> package (see <a href="#OSGeo4W">OSGeo4W</a> below)

<hr>

### <span id="legacy"> GRASS {{< grassVersion version="legacy" >}} (legacy)</span>

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> <em>Old stable release</em>, see the <a href="https://github.com/OSGeo/grass/releases/tag/{{< legacyVersion.inline  >}}{{- .Site.Data.grass.legacy_version -}}{{</legacyVersion.inline >}}">release announcement</a> for more information.
</div>

*  {{< donateDialog isToggle=true >}}
<a href="https://grass.osgeo.org/grass84/binary/mswindows/native/WinGRASS-8.4.2-1-Setup.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> Standalone installer (64-bit)
</a>
{{< /donateDialog  >}}
*  {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> OSGeo4W installer
</a>
{{< /donateDialog  >}} &mdash; see <a href="#OSGeo4W">OSGeo4W</a> below

<hr>


### <span id="OSGeo4W"> OSGeo4W  </span>

OSGeo4W is an installer for a broad set of open source geospatial software packages including GRASS as well as many other packages (QGIS, GDAL/OGR, and more).

*   {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> Download OSGeo4W v2
</a>
{{< /donateDialog  >}}


OSGeo4W v2 is the standard repository and does not include a 32-bit version. The legacy v1 installer below is only needed for 32-bit systems. Upgrading an existing v1 installation by pointing it at the v2 repository is not supported &mdash; do a fresh install or use a different install directory.

Legacy download (OSGeo4W v1)

*  {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v1/osgeo4w-setup-x86_64-v1.exe" target="_blank" rel="noopener">
<i class="fa fa-download"></i> Download OSGeo4W 64bit version 1
</a>
{{< /donateDialog  >}}
*  {{< donateDialog isToggle=true >}}
<a href="https://download.osgeo.org/osgeo4w/v1/osgeo4w-setup-x86-v1.exe" target="_blank" rel="noopener">
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
