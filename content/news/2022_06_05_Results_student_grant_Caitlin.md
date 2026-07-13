---
title: "Results of the GRASS GIS student grants - Part 2"
date: 2022-06-05T23:12:40+02:00
layout: "news"
author: Caitlin Haedrich and the GRASS Development Team
---


## Caitlin's path in her own words
### Enhancing GRASS GIS integration with Jupyter Notebooks

<a href="/images/news/grass_jupyter_combo_vis.png">
  <img src="/images/news/grass_jupyter_combo_vis.png"
   alt="grass.jupyter classes"
   title="grass.jupyter classes"
   width="65%" style="float:right;padding-left:20px;padding-top:10px">
</a>

I began contributing to GRASS GIS last year during Google Summer 
of Code (GSoC) 2021. As a second-year doctoral student at North Carolina 
State University [(NCSU)](https://www.ncsu.edu/) in the 
[GeoForAll Lab](https://geospatial.ncsu.edu/geoforall/), I was taking
a lot of courses that used GRASS GIS and other [OSGeo](https://www.osgeo.org/) software. 
I’m interested in geo-visualization, open-source software development
and making powerful geospatial tools accessible to everyone. 
So, applying to GSoC for the project entitled 
[*“Improved Integration of GRASS GIS and Jupyter Notebooks”*](https://trac.osgeo.org/grass/wiki/GSoC/2021/JupyterAndGRASS), 
was a natural fit. The project aimed to make GRASS GIS more accessible 
and intuitive to use within Jupyter Notebooks. 
Not only are Jupyter Notebooks standard in the scientific community now, 
but they are also increasingly popular in the classroom and for online 
educational resources. Improving the integration of GRASS GIS and Jupyter 
helps increase the accessibility of GRASS GIS to scientists, teachers, 
and students alike. Although GRASS GIS has an extensive Python API, 
managing GRASS sessions within a Notebook and visualizing data, e.g.
rendering maps in-line or interactively exploring a 
map by zooming in, was difficult.

During the GSoC project, my mentors (Vaclav Petras, Helena Mitasova and Stefan 
Blumentrath) and I developed **a new Python subpackage for GRASS GIS** called 
`grass.jupyter` that aimed to address some of these issues. By the end of 
GSoC last summer, we’d written an experimental version of `grass.jupyter` 
that contained a basic session initiation function and two visualization 
classes: *Map* (previously GrassRenderer) for creating simple in-line maps 
as PNG images and *InteractiveMap* for creating interactive maps with 
[folium](https://python-visualization.github.io/folium/index.html) 
(a leaflet library for Python). During GSoC, my coding improved 
significantly, and I learned a lot about GRASS GIS and 
how to contribute to open-source projects through GitHub.

<a href="/images/news/grass_jupyter_folium.png">
  <img src="/images/news/grass_jupyter_folium.png"
   alt="grass.jupyter and folium"
   title="grass.jupyter and folium"
   width="50%" style="float:left;padding-right:20px;padding-top:20px">
</a>

When the project ended, we realized there were still a lot of ways we 
could make the integration of GRASS GIS and Jupyter better, from small 
bug fixes in the existing classes to adding visualization classes for 
space-time datasets. That fall, Vaclav Petras wrote *Map3D*, a 3D sibling 
to *Map* for making simple in-line PNG renderings and further improved 
session handling.

Inspired by my GSoC experience and now with a list of things to improve, 
I applied for a [**GRASS Mini Grant**](https://grasswiki.osgeo.org/wiki/Student_Grants) 
with the goal of improving the GRASS-folium integration for interactive maps 
and adding visualization class(es) for space-time datasets (See project details 
[here](https://trac.osgeo.org/grass/wiki/GSoC/2021/JupyterAndGRASS/MiniGrant2022)). 
One of the features that makes GRASS GIS unique among GIS software packages 
is its framework for managing, processing and visualizing temporal data. 
In the GUI, temporal data is visualized with the `g.gui.animation` tool. 
We wanted to create a similar interactive visualization tool that would be 
part of a notebook. I worked on the grant during the first few months of 2022 
and by the end, we had a stable version of `grass.jupyter` that was officially 
released with **GRASS GIS version 8.2**. 
At the completion of the grant, *we had 4 different visualization classes:
Map, Map3D, TimeSeriesMap, and InteractiveMap* along with *a new folium 
API* that allows users to add GRASS raster maps and data to an existing folium 
map instance.

You can find GRASS GIS tutorials using `grass.jupyter` on GRASS GIS’s GitHub 
[repository](https://github.com/OSGeo/grass/tree/main/doc/notebooks).
In the GRASS GIS GitHub README, there’s also a link to 
[Binder](https://mybinder.org/v2/gh/OSGeo/grass/main?urlpath=lab%2Ftree%2Fdoc%2Fnotebooks%2Fbasic_example.ipynb)
where you can run the notebooks in the cloud – no installation needed. Further
details and documentation about `grass.jupyter` library can be found in the 
[manual](https://grass.osgeo.org/grass82/manuals/libpython/grass.jupyter.html) 
page.
