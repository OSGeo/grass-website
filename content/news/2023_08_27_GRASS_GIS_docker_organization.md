---
title: "New Docker images for GRASS GIS"
date: 2023-08-27T11:42:00+03:00
layout: "news"
author: GRASS Development Team
---

### Moving GRASS GIS Docker Images to the OSGeo Repository

In the field of open source software development and deployment, the
accessibility and maintenance of resources is of paramount importance.
To this end, there has been a major change in the repository structure
for the GRASS GIS Docker images.

<a href="https://hub.docker.com/r/osgeo/grass-gis/">
  <img src="https://grass.osgeo.org/images/logos/grass-Docker.jpg"
   alt="GRASS GIS Docker images"
   title="GRASS GIS Docker images"
   width="20%" style="float:right;padding-left:25px;padding-top:5px">
</a>

In the past years, these Docker images have been maintained and hosted under
the mundialis organisation's repository. The company
[mundialis](https://www.mundialis.de) has played a crucial role in providing
and maintaining these images, ensuring their availability and stability for
the wider GIS community. The GRASS GIS development community extends
its sincere appreciation to mundialis for their technical expertise and
consistent support over the years.

In a strategic move, the **GRASS GIS Docker images have now been shifted**
to the OSGeo organisation's repository on Docker Hub. They can be accessed
under OSGeo GRASS GIS on Docker Hub:

[https://hub.docker.com/r/osgeo/grass-gis/](https://hub.docker.com/r/osgeo/grass-gis/tags?page=1&ordering=-name)

This migration is not just a change of repository location. The move to
the OSGeo repository has been accompanied by a systematic clean-up and
reorganisation of the tags associated with the GRASS GIS Docker images.
This restructuring is intended to improve clarity, streamline
versioning and optimise the user experience when selecting appropriate
image tags for deployment.

**Migrating to the new structure**

Now there are four different types of tags, while `{{ os }}` can be replaced
with "alpine", "debian" or "ubuntu" (and for more recent versions also with
"ubuntu_wxgui"):

- `latest` for latest release (at this time 8.3) and with ubuntu operating system
- `current-{{ os }}` for current releasebranch (at this time 8.3), e.g `current-ubuntu`
- `{{ branch }}-{{ os }}` for all configured branches, e.g. `releasebranch_8_3-alpine`,  `main-debian`
- `{{ tag }}-{{ os }}` for all published releases. e.g. `8.3.0-alpine`

While naming of branches and tags is still the same, it adds `current-{{ os }}`
and abandons deprecated naming style `latest-{{ os }}` and `stable-{{ os }}`.
Also content of `latest` tag was changed from `main` branch to latest release.

If `mundialis/grass-py3-pdal:latest-{{ os }}` was used containing the latest
development version, it should now be replaced with `osgeo/grass-gis:main-{{ os }}`.
For `mundialis/grass-py3-pdal:stable-{{ os }}` (which was formerly build upon
`releasebranch_7_8`) a switch to the current stable releasebranch
`osgeo/grass-gis:current-{{ os }}` is recommended or the usage of a specific
releasebranch `releasebranch_8_3-{{ os }}`. Old GRASS GIS Docker images with
version 7.8 can still be found at mundialis/grass-py3-pdal.

In summary, as we moved the repository from mundialis to the OSGeo
organisation, we took the opportunity to clean up the Docker tags.

Related docker build configuration changes can be found here:

- [docker: Update dockerhub organization](https://github.com/OSGeo/grass/pull/3001)
- [docker: CI update and simplification](https://github.com/OSGeo/grass/pull/3075)

_Carmen Tawalika (mundialis), Markus Neteler and The GRASS Dev Team_
