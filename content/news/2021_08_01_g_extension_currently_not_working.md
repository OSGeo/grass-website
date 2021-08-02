---
title: "Installing GRASS GIS extensions currently failing on some systems"
date: 2021-08-01T00:00:00+00:00
layout: "news"
author: GRASS Development Team
---

Due to a [re-structuring](https://github.com/OSGeo/grass-addons/issues/528) 
of the [addon repository](https://github.com/OSGeo/grass-addons),
the installation of addons through `g.extension` is currently not working
on UNIX-like systems. 
Installation of addons with the current stable version GRASS GIS 7.8.5 
on [OSGeo4W (Version 1)](https://download.osgeo.org/osgeo4w/osgeo4w-setup-x86-v1.exe)
is not affected.

All the necessary changes in 
[g.extension](https://grass.osgeo.org/grass-stable/manuals/g.extension.html) 
have been implemented, merged and back-ported.
The functionality will be back to normal very soon with 
the upcoming GRASS 7.8.6 and 8.0.0 releases.

In the meantime,  you have two options:

1. [Compile and install addons](https://grasswiki.osgeo.org/wiki/Compile_and_Install#Addons) manually after fetching the addon source code from [github](https://github.com/OSGeo/grass-addons).
1. [Compile and install GRASS GIS](https://grasswiki.osgeo.org/wiki/Compile_and_Install) from source, either `releasebranch_7_8` or `master`, where g.extension changes have been applied.

<br>
For the case of python addons, just download and run them as regular python
scripts.

Thanks for your patience! 