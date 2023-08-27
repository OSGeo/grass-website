---
title: "New docker images for GRASS GIS"
date: 2023-08-27T11:42:00+03:00
layout: "news"
author: GRASS Development Team
---

### Moving GRASS GIS Docker Images to the OSGeo Repository

In the field of open source software development and deployment, the
accessibility and maintenance of resources is of paramount importance.
To this end, there has been a major change in the repository structure
for the GRASS GIS docker images.

<a href="https://hub.docker.com/r/osgeo/grass-gis/">
  <img src="https://grass.osgeo.org/images/logos/grass-Docker.jpg"
   alt="GRASS GIS docker images"
   title="GRASS GIS docker images"
   width="20%" style="float:right;padding-left:25px;padding-top:5px">
</a>

Historically, these docker images have been maintained and hosted under
the mundialis organisation's repository. The company mundialis
(https://www.mundialis.de) has played a crucial role in providing and
maintaining these images, ensuring their availability and stability for
the wider GIS community. The GRASS GIS development community extends
its sincere appreciation to mundialis for their technical expertise and
consistent support over the years.

In a strategic move, the Docker images have now been moved to the OSGeo
organisation's repository on Docker Hub. They can be accessed under
OSGeo GRASS GIS on Docker Hub:

[https://hub.docker.com/r/osgeo/grass-gis/](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&ordering=-name)

This migration is not just a change of repository location. The move to
the OSGeo repository has been accompanied by a systematic clean-up and
reorganisation of the tags associated with the GRASS GIS docker images.
This restructuring is intended to improve clarity, streamline
versioning and optimise the user experience when selecting appropriate
image tags for deployment.

In summary, as we have phased out the repository under mundialis, we
anticipate robust development, improved maintenance and a more
streamlined user experience for GRASS GIS docker images within the
OSGeo framework.

**About GRASS GIS**

The Geographic Resources Analysis Support System
([https://grass.osgeo.org/](/)), commonly referred to as GRASS GIS, is
an Open Source Geographic Information System providing powerful raster,
vector and [geospatial processing capabilities](https://grass.osgeo.org/learn/overview/).
It can be used either as a stand-alone application, as backend for other
software packages such as QGIS and R, or in the cloud. It is
distributed freely under the terms of the GNU General Public License (GPL).
GRASS GIS is a founding member of the Open Source Geospatial Foundation (OSGeo).

_The GRASS Dev Team_
