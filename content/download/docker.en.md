---
title: "Docker"
date: 2023-10-03T10:12:05+02:00
description: "Download GRASS GIS Docker images"
weight: 4
layout: "os"
---


#### Quick links

[ [**GRASS GIS {{< grassVersion version="current" type="short">}} (current)**](#GRASS-GIS-current) | [**GRASS {{< grassVersion version="legacy" type="short">}} (legacy)**](#GRASS-GIS-old) | [**GRASS {{< grassVersion version="preview" type="short">}} (preview)**](#GRASS-GIS-devel) ]

For a list of GRASS GIS versions, see the [docker tag list](https://hub.docker.com/r/osgeo/grass-gis/tags).

<hr>

### <span id="GRASS-GIS-current"> GRASS GIS {{< grassVersion version="current" >}} (current)</span>

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch {{< grassVersion version="current" type="short">}}</b></div>

*   {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=alpine){{< /donateDialog  >}} (<small>233 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull osgeo/grass-gis:releasebranch_{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version_underscore -}}{{</currentVersion.inline >}}-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=debian){{< /donateDialog  >}} (<small>1.2 GB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull osgeo/grass-gis:releasebranch_{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version_underscore -}}{{</currentVersion.inline >}}-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 22.04 based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=ubuntu){{< /donateDialog  >}}  (<small>1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull osgeo/grass-gis:releasebranch_{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version_underscore -}}{{</currentVersion.inline >}}-ubuntu</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 22.04 based with GUI support](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=ubuntu_wxgui){{< /donateDialog  >}}  (<small>1.3 GB, with wxPython, Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull osgeo/grass-gis:releasebranch_{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version_underscore -}}{{</currentVersion.inline >}}-ubuntu_wxgui</code></pre>

```bash
docker pull osgeo/grass-gis:releasebranch_{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version_underscore -}}{{</currentVersion.inline >}}-ubuntu
```
<hr>


### <span id="GRASS-GIS-old"> GRASS GIS {{< grassVersion version="legacy" >}} (legacy)</span>

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS releasebranch_7_8</b> (<a href="https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures{{< legacyVersionNoDots.inline  >}}{{- .Site.Data.grass.legacy_version_nodots -}}{{</legacyVersionNoDots.inline >}}">GRASS GIS {{< grassVersion version="legacy" type="short">}} new features</a>)</div>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=alpine){{< /donateDialog  >}}  (<small>184 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:{{< legacyVersion.inline  >}}{{- .Site.Data.grass.legacy_version -}}{{</legacyVersion.inline >}}-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=debian){{< /donateDialog  >}}  (<small>1.2 GB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:{{< legacyVersion.inline  />}}-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 20.04 based](https://hub.docker.com/r/mundialis/grass-py3-pdal/tags?page=1&name=ubuntu){{< /donateDialog  >}}  (<small>1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull mundialis/grass-py3-pdal:{{< legacyVersion.inline  />}}-ubuntu</code></pre>

<hr>


### <span id="GRASS-GIS-devel"> GRASS GIS {{< grassVersion version="preview" >}} (preview)</span>

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> The following Docker images are generated from the <b>GRASS GIS main branch</b>
</div>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Alpine based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=alpine){{< /donateDialog  >}} (<small>236 MB, with Python 3 and PDAL</small>)
    <pre><code class="dockerfile">docker pull osgeo/grass-gis:main-alpine</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Debian 10 based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=debian){{< /donateDialog  >}} (<small>1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull osgeo/grass-gis:main-debian</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 22.04 based](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=ubuntu){{< /donateDialog  >}} (<small>1.2 GB, with Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull osgeo/grass-gis:main-ubuntu</code></pre>

*  {{< donateDialog isToggle=true isMarkdown=true >}}[<i class="fa fa-download"></i> Ubuntu 22.04 based with GUI support](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&name=ubuntu_wxgui){{< /donateDialog  >}}  (<small>1.3 GB, with wxPython, Python 3 and PDAL</small>)
   <pre><code class="dockerfile">docker pull osgeo/grass-gis:main-ubuntu_wxgui</code></pre>


 {{< donateDialog >}}
 {{< /donateDialog >}}
