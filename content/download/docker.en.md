---
title: "Docker"
date: 2022-06-13T10:12:05+02:00
description: "Download GRASS GIS Docker images"
weight: 4
layout: "os"
---

  
#### Quick links

[ [**GRASS GIS {{< grassVersion version="current" type="short">}} (current)**](#GRASS-GIS-current) | [**GRASS {{< grassVersion version="legacy" type="short">}} (legacy)**](#GRASS-GIS-old) | [**GRASS {{< grassVersion version="preview" type="short">}} (preview)**](#GRASS-GIS-devel) ]

<div class="alert rounded-0 alert-default">
<i class="fa fa-arrow-right"></i> GRASS GIS <b>Docker images</b> provided and maintained by <a href="https://www.mundialis.de/en/" target="_blank">mundialis</a>.
</div>

For a version matrix (GRASS GIS, PROJ, GDAL, PDAL), see [here](https://github.com/OSGeo/grass/blob/main/docker/README.md)

<hr>

### <a name="GRASS-GIS-current"></a> GRASS GIS {{< grassVersion version="current" >}} (current)

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch_8_2</b></div>

*   {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=alpine){{< /donateDialog  >}} (<small>190 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:8.2.0-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=debian){{< /donateDialog  >}} (<small>1.2 GB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:8.2.0-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 20.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=ubuntu){{< /donateDialog  >}}  (<small>1.3 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:8.2.0-ubuntu</code></pre>


<hr>


### <a name="GRASS-GIS-old"></a> GRASS GIS {{< grassVersion version="legacy" >}} (legacy)

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch_7_8</b> (<a href="https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures78">GRASS GIS 7.8 new features</a>)</div>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=alpine){{< /donateDialog  >}}  (<small>190 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:7.8.7-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=debian){{< /donateDialog  >}}  (<small>1.2 GB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:7.8.7-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 20.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=ubuntu){{< /donateDialog  >}}  (<small>1.3 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:7.8.7-ubuntu</code></pre>

<hr>


### <a name="GRASS-GIS-devel"></a> GRASS GIS {{< grassVersion version="preview" >}} (preview)

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS main branch</b>
</div>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=alpine){{< /donateDialog  >}} (<small>190 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=debian){{< /donateDialog  >}} (<small>1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 20.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=ubuntu){{< /donateDialog  >}} (<small>1.3 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:latest-ubuntu</code></pre>

 {{< donateDialog >}}  
 {{< /donateDialog >}}  