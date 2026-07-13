---
title: "Developing and updating GRASS GIS addons"
date: 2023-06-18T23:12:41+02:00
layout: "news"
author: Luis Moreira de Sousa and the GRASS Development Team
---

### The r.mblend experience

<a href="https://grass.osgeo.org/grass-stable/manuals/addons/edges.png">
  <img src="https://grass.osgeo.org/grass-stable/manuals/addons/edges.png"
   alt="r.mblend screenshot"
   title="r.mblend screenshot"
   width="40%" style="float:right;padding-left:25px;padding-top:5px">
</a>

In 2017, I had the opportunity to implement a DEM blending algorithm that had
been theorised earlier by my colleague João Leitão. It was somewhat natural to
develop it as a GRASS add-on, since I have long relied on it for map algebra 
and other geo-spatial computations. That is how the 
[r.mblend](https://grass.osgeo.org/grass-stable/manuals/addons/r.mblend.html) 
add-on was born.

Five years passed without me committing again to 
[r.mblend](https://grass.osgeo.org/grass-stable/manuals/addons/r.mblend.html). 
In the meantime many important things changed, GRASS version 8 was released 
and code management moved from SVN to git/GitHub.

<a href="https://grasswiki.osgeo.org/w/images/GRASS-smiles.jpg">
  <img src="https://grasswiki.osgeo.org/w/images/GRASS-smiles.jpg"
   alt="Updating r.mblend during GRASS Community Meeting"
   title="Updating r.mblend during GRASS Community Meeting"
   width="30%" style="float:left;padding-right:30px">
</a>

During the [**GRASS GIS Community Meeting**](https://grasswiki.osgeo.org/wiki/GRASS_Community_Meeting_Prague_2023) 
I planned to revisit r.mblend and updated it to GRASS 8. 
It ended up being much easier than I expected, the add-on had been maintained
all this time by the community, and was still running without errors on the 
latest GRASS version. A couple of tweaks were necessary to account for new 
behaviour in core modules, but for the best part *r.mblend* kept usable and 
useful all these years.

This experience attests to the 
**effectiveness of GRASS GIS as an environment to host and develop scientific geo-spatial algorithms**. 
Your code is immersed in an ecosystem that evolves together with 
contributions from a wider community, avoiding the pitfalls of 
stand-alone repositories demanding constant maintenance from a
small number of contributors.

_Luis Moreira de Sousa and the GRASS Development Team_