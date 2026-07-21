---
title: "Windows"
description: "Install GRASS on Windows with the OSGeo4W installer"
_build:
  render: never
  list: never
---

## Download GRASS for Windows

{{< grass-download os="Windows" data="windows" >}}

Install GRASS on Windows with the [OSGeo4W](#osgeo4w) installer. GRASS is also
available for Windows (64-bit) from conda-forge — see the **Conda** tab.

## Installation

---

### OSGeo4W {#osgeo4w}

OSGeo4W is an installer for a broad set of open source geospatial software
packages including GRASS as well as many other packages (QGIS, GDAL/OGR, and
more). Download the
[OSGeo4W v2 installer](https://download.osgeo.org/osgeo4w/v2/osgeo4w-setup.exe)
to install GRASS and other OSGeo software on Windows.

OSGeo4W v2 is the standard repository and does not include a 32-bit version.
The legacy v1 installers are only needed for 32-bit systems. Upgrading an
existing v1 installation by pointing it at the v2 repository is not supported —
do a fresh install or use a different install directory.

The following install modes are offered (see also the dedicated
[wiki page](https://grasswiki.osgeo.org/wiki/Installation_Guide#OSGeo4W_installer)
for further details):

#### Express desktop install mode

Run the downloaded installer as administrator and select the **grass** (stable)
or **grass-daily** (development) packages to install. All needed dependencies
(e.g. GDAL, common python packages) will be automatically downloaded.

#### Advanced install mode

All packages can be individually selected and additional useful packages
(e.g. python-pandas, msys) are available, too.

#### Command line installation

Installation can also be done through the command line:

{{< code-copy os="windows" installer="osgeo4w64" >}}

### GRASS in QGIS

In order to have GRASS support (also in QGIS-Processing) you need to install
the "qgis*-grass-plugin" packages.

## Contribute

Please consider a financial contribution to the GRASS project to help us improve and maintain the software.

{{< support-button text="Support Us" >}}
