---
title: "Report from the GRASS Community Meeting 2024"
date: 2024-08-02T10:42:00+01:00
layout: "news"
author: Veronica Andreo, Vaclav Petras, Anna Petrasova and the GRASS Dev Team
---

The annual **GRASS GIS Community Meeting** was held once again in the Czech Republic, this time at the [NC State European Center](https://prague.ncsu.edu/about/) in Prague from June 14 to 19. The meeting brought together users, supporters, contributors, power users and developers to collaborate and chart the future of the project.

<a href="/images/news/2024_community_meeting_collage.png">
  <img src="/images/news/2024_community_meeting_collage.png"
   alt="GRASS GIS Community Meeting in Prague, 2024"
   title="GRASS GIS Community Meeting in Prague, 2024"
   width="65%" style="float:right;padding-left:15px;padding-top:15px">
</a>

Thanks to the generous funding from the **U.S. National Science Foundation** (Award 2303651), the **Open Source Geospatial Foundation** (OSGeo), **FOSSGIS e.V.**, and individual donors, we were able to welcome **16 in-person participants** from 9 countries on 3 continents, plus 2 remote participants. The event was meticulously planned, with efforts made in fundraising, budgeting, venue selection, promotion, virtual meeting organisation, social media communication, and social activities. In addition to the financial contributions mentioned above, staff time and other costs were covered by [mundialis](https://www.mundialis.de/en/) GmbH & Co. KG, (Germany) and [INBO](https://www.vlaanderen.be/inbo/home/) Research Institute for Nature and Forest (Belgium). On top of that, many participants made a special effort to keep costs down by reducing their own expenses.

Participants discussed and worked together on various aspects of GRASS GIS, including project’s mission and roadmap, Python API, parallelization, reproducibility, documentation and website navigation improvements. The Google Summer of Code students attended the meeting virtually and presented their projects and progress to the broader community. The GRASS PSC held a special meeting to discuss this year's election date and to define the voter list and seats to be replaced. There was also a video call with Nyall Dawson from QGIS to follow up on last year's conversation and [discuss](https://github.com/OSGeo/grass/discussions/3898) future collaboration plans to strengthen QGIS-GRASS integration. Some known issues in the GRASS data provider were fixed during the call! 🤓

Other relevant results from the meeting are:

* Release candidate (RC1) for version 8.4 released and highlight notes prepared (this was the last step before releasing the 8.4.0 version which is now, at the time of writing, [already out!](https://grass.osgeo.org/news/2024_07_27_grass_gis_8_4_0_released/))  
* GDAL-GRASS driver implemented in *rgrass* R package for reading vector data, increasing import velocity by 3-4 times  
* New tutorials on working with GRASS GIS and Jupyter in Windows and lidar data  
* Support for parallel processing in more tools: r.texture, v.surf.rst and r.horizon.  
* New unit tests for v.out.ogr and r.out.gdal  
* New [repository](https://github.com/OSGeo/grass-addon-cookiecutter) with addons template using cookiecutter to simplify the creation and contribution of new tools  
* New CI workflows plus debugging of existing ones to ensure smooth and efficient integration of new code  
* Huge efforts on resolving PRs in grass, grass-addons and grass-website repositories: we merged or closed around 80 PRs in 6 days and tested or revised many others  
* First draft version of the new Markdown documentation implemented - [it looks great](https://github.com/OSGeo/grass/pull/3849)!  
* New Nix files added to the core GRASS repository to build GRASS GIS without local installation - see the [post](https://grass.osgeo.org/news/2024_06_07_nix_environment_and_package_added/) about this cool new way to work with and develop GRASS GIS!
   
For more details on the meeting, sponsorship, and participants’ individual reports, please visit the GRASS Community Sprint Prague 2024 [wiki](https://grasswiki.osgeo.org/wiki/Talk:GRASS\_Community\_Meeting\_Prague\_2024) page, and follow us on social media ([X](https://twitter.com/grassgis), [mastodon](https://fosstodon.org/@grassgis)), join the chat channel in [Gitter](https://gitter.im/grassgis/community) or the user [mailing list](https://lists.osgeo.org/mailman/listinfo/grass-user) to stay updated on future news and events. 

If you would like to see more developments like this in the future, consider sponsoring GRASS GIS through [Open Collective](https://opencollective.com/osgeo/projects/grass/contribute).


_Veronica Andreo, Vaclav Petras, Anna Petrasova and the GRASS Dev Team_