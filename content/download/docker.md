---
title: "Docker"
date: 2018-12-29T11:02:05+06:00
description: "Download GRASS GIS Docker images."
weight: 4
layout: "os"
---

  
#### Quick links

[ [**GRASS GIS 7.8.x (new stable)**](#GRASS-GIS-new-stable) | [**GRASS 7.6.x (old stable)**](#GRASS-GIS-old-stable) | [**GRASS 7.9.x (unstable)**](#GRASS-GIS-devel) ]

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> GRASS GIS <b>Docker images</b> provided and maintained by <a href="https://www.mundialis.de/en/" target="_blank">mundalis GmbH</a>.
</div>

<hr>

### <a name="GRASS-GIS-new-stable"></a> GRASS GIS 7.8.x (new stable)

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch_7_8</b>. (<a href="(https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures78 ">GRASS GIS 7.8.2 new features</a>)</div>

*  [<i class="fa fa-download"></i> GRASS GIS 7.8 stable, Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>release branch, grass78, 320 MB, with Python 3 and PDAL</small>)
    <pre><code class=dockerfile">docker pull mundialis/grass-py3-pdal:stable-alpine</code></pre>

*  [<i class="fa fa-download"></i> GRASS GIS 7.8 stable, Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>release branch, grass78, 1.2 GB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:stable-debian</code></pre>

*  [<i class="fa fa-download"></i> GRASS GIS 7.8 stable, Ubuntu 18.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>release branch, grass78, 1.3 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:stable-ubuntu</code></pre>


<hr>


### <a name="GRASS-GIS-old-stable"></a> GRASS GIS 7.6.1 (old stable)

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch_7_6</b>. (<a href="(https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures76">GRASS GIS 7.6.1 new features</a>)
</div>

*  [<i class="fa fa-download"></i> GRASS GIS 7.6 stable, Ubuntu 18.04 based](https://hub.docker.com/r/mundialis/grass-gis-stable) (<small style="display:inline-block;margin-bottom:1em;">old stable, grass76, 730 MB, with Python 2</small>)
   <pre><code class=dockerfile">docker pull mundialis/grass-gis-stable</code></pre>


<hr>


### <a name="GRASS-GIS-devel"></a> GRASS GIS 7.9 devel (unstable)

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS master branch</b>. (... )
</div>

*  [<i class="fa fa-download"></i> GRASS GIS 7.9 development, Ubuntu 18.04 based](https://hub.docker.com/r/neteler/grassgis7/) (<small>git master, grass79, 520 MB, with Python 3</small>)
    <pre><code class=dockerfile">docker pull neteler/grassgis7</code></pre>

*  [<i class="fa fa-download"></i> GRASS GIS 7.9 development, Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>git master, grass79, 320 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-alpine</code></pre>

*  [<i class="fa fa-download"></i> GRASS GIS 7.9.x development Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>git master, grass79, 1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-debian</code></pre>

*  [<i class="fa fa-download"></i> GRASS GIS 7.9.x development Ubuntu 18.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal) (<small>git master, grass79, 1.3 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-ubuntu</code></pre>
