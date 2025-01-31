---
title: "Annual Report 2024"
date: 2025-01-27T13:12:00+05:00
layout: "news"
author: Anna Petrasova, Vaclav Petras
---

There has been a lot of activity in 2024, so let's recap the achievements and highlight the awesome community behind GRASS GIS!

### Community Meeting

<a href="/images/news/2024_community_meeting_collage.png">
  <img src="/images/news/2024_community_meeting_collage.png"
   alt="Annual Report for 2024"
   title="GRASS GIS community"
   width="45%" style="float:right;padding-left:25px;padding-top:15px">
</a>

The annual [GRASS GIS Community Meeting](/news/2024_08_02_Report_Community_Meeting_Prague_2024) was held once again in the Czech Republic, this time at the NC State European Center in Prague. The meeting brought together users, supporters, contributors, power users and developers to collaborate and chart the future of the project. Thanks to the support from the U.S. National Science Foundation (Award 2303651), OSGeo, FOSSGIS e.V., mundialis GmbH & Co. KG (Germany) and INBO Research Institute for Nature and Forest (Belgium) and individual donors, we were able to welcome 16 in-person participants from 9 countries on 3 continents. The meeting resulted in the release candidate (RC1) for GRASS GIS 8.4, alongside advancements like faster vector data imports via the rgrass R package, expanded parallel processing support, new tutorials, and first drafts of Markdown-based documentation. Additional achievements included resolving 80+ pull requests, debugging CI workflows, and adding Nix files for stable build environments.


### Development Activity
<a href="/images/news/GSoC_jupyter_region.png">

  <img src="/images/news/GSoC_jupyter_region.png"
   alt="GSoC: Setting computational region interactively in a notebook"
   title="GSoC: Setting computational region interactively in a notebook"
   width="33%" style="float:left;padding-right:25px;padding-top:15px">
   
</a>


In 2024, the maintainers published the [8.4.0](/news/2024_07_27_grass_gis_8_4_0_released/) feature release and a maintenance release ([8.3.2](/news/2024_03_07_grass_gis_8_3_2_released/)).
The feature release brought, among other things, improvements for data science workflows in Jupyter Notebooks, new programming style guide for contributor onboarding, new History browser in the graphical user interface and transition from *location* to *project* terminology.  Furthermore, [13 new addons](https://github.com/OSGeo/grass-addons/pulls?q=is%3Aclosed+is%3Apr+label%3A%22new+addon%22+merged%3A%3E2023-01-01) were added by 6 contributors.

Kudos to the GRASS GIS [top 5 code contributors](https://github.com/OSGeo/grass/graphs/contributors?from=2024-01-01&to=2024-12-31&type=c) (based on commits to the OSGeo/grass repository):
Edouard Choinière, Shubham Vasudeo Desai, Arohan Ajit, Anna Petrasova, and Vaclav Petras. In total, 48 people made contributions to the main repository. That's 13 more contributors than last year.
Many of these contributions focused on enhancing code security and documentation workflows. New tools, including Bandit, Coverity Scan, and a configured Cppcheck, were adopted to improve code quality in Python and C, with numerous issues resolved across these tools and CodeQL. A public GitHub project for GRASS security was launched, tracking 153 resolved and 5 in-progress items.
Efforts to improve manual page indexing included revising the sitemap, fixing robots.txt, restoring older manuals with canonical URLs, and optimizing server redirects. These changes ensured better search visibility and streamlined documentation workflows for improved accessibility.

During the summer, we mentored [3 Google Summer of Code participants](/news/2024_05_27_gsoc_2024_students) resulting in improved user experience in Jupyter Notebook,  JSON outputs to several tools in C, and EODAG support for satellite data download.
Additionally, Linda Karlovska finished her work on a new history browser panel in GRASS as part of the [GRASS Student Grants](https://grasswiki.osgeo.org/wiki/Student_Grants).


The end of the year brought big changes in the stewardship of the [rgrass package](https://github.com/OSGeo/rgrass), with Steven Pawley taking over as maintainer. Building on Roger Bivand's extraordinary contributions, Steven will ensure the package continues to support seamless integration of R and GRASS GIS for a wide range of applications.

### Community and Governance

<a href="/images/news/2024_08_11_new_psc_meeting.png">
  <img src="/images/news/2024_08_11_new_psc_meeting.png" 
   alt="Current, past, and new members of the GRASS GIS PSC" 
   title="Current, past, and new members of the GRASS GIS PSC"
   width="65%" style="float:right;padding-left:10px;padding-right:10px;padding-top:5px">
</a>

In the beginning of the year, Corey White, Vaclav Petras, and Anna Petrasova completed a 4-week NSF Innovation-Corps program, conducting over 70 interviews with GRASS GIS users and non-users to guide the project's future. The team shared preliminary results with the Project Steering Committee and developed a public [roadmap](/about/roadmap) to communicate GRASS GIS's future directions and priorities. 


The project conducted [Project Steering Committee (PSC) elections](/news/2024_10_11_refreshing_grass_psc), replacing or reelecting 4 of the members who lead the top-level decisions in the project. Kudos to Hernán De Angelis for taking on the role of Chief Returning Officer (CRO)!
To better communicate the project's governance, a new [governance](/about/governance) document clarifies procedures, checks and balances in the development process and project management. Additionally, OSGeo-followed [Code of Conduct](https://github.com/OSGeo/grass/blob/main/CODE_OF_CONDUCT.md) was added to the main repository.


We enhanced our communication channels to better connect with new and existing community members.
Connect with us professionally on the [GRASS LinkedIn page](https://www.linkedin.com/company/grass-gis/) and explore our refreshed Youtube channel ([@grass-gis](https://www.youtube.com/@grass-gis)) with new playlists and updated branding. Thanks to Veronica Andreo and others who maintain the project's social presence.
The grass-dev mailing list was transitioned to [OSGeo Discourse](https://discourse.osgeo.org/c/grass/developer/61), featuring a modern, user-friendly interface that enhances community interaction and collaboration while preserving access to past discussions. The user mailing list will follow in 2025. 


Our science community maintains GRASS GIS [Google Scholar profile](https://scholar.google.com/citations?hl=en&user=gJ0ZB0cAAAAJ) (around 30 new records from 2024) and a new [Zenodo community](https://zenodo.org/communities/grass).

### Conferences and Workshops in 2024

<a href="/images/news/2024_12_04_foss4g_brazil_keynote.jpg">
  <img src="/images/news/2024_12_04_foss4g_brazil_keynote.jpg"
   alt="Veronica Andreo presenting at FOSS4G Brazil 2024"
   title="Veronica Andreo presenting at FOSS4G Brazil 2024"
   width="40%" style="float:left;padding-right:25px;padding-top:15px">
</a>

GRASS GIS was represented at many events with talks or workshops led by community members, here are the highlights:

During summer, Veronica Andreo was busy at FOSS4G Europe in Tartu, delivering a workshop [Let's combine GRASS, Python and R: Satellite time series data for species distribution modeling](https://veroandreo.github.io/grass_foss4geu_2024/) and a talk on [State of GRASS GIS project](https://veroandreo.github.io/grass-gis-talks/foss4gEU2024.html#/), and continued with her talk on [Boosting Spatial Data Science Workflows with GRASS GIS and R](https://veroandreo.github.io/grass-gis-talks/useR2024.html#/) at useR conference in Salzburg.

At FOSS4G NA in St. Louis, Missouri, Vaclav Petras delivered [State of GRASS GIS](https://wenzeslaus.github.io/grass-gis-talks/foss4gna2024.html) talk, Huidae Cho talked about the [Evolution of GRASS GIS](https://htmlpreview.github.io/?https://github.com/HuidaeCho/grass-talks/blob/main/foss4g-na-2024.html) and introduced his [OpenMP Algorithm for Delineating a Large Number of Watersheds](https://grass.osgeo.org/grass-stable/manuals/addons/r.hydrobasin.html). Corey White gave a workshop on [Developing Web-Applications with GRASS GIS](https://github.com/OpenPlainsInc/foss4gna-2024-workshop) and a talk on GRASS GIS as a Geospatial Computational Engine.

<a href="/images/news/2024_12_09_GRASS_GIS_booth_AGU24.jpg">
  <img src="/images/news/2024_12_09_GRASS_GIS_booth_AGU24.jpg"
   alt="GRASS Booth at AGU24"
   title="GRASS Booth at AGU24"
   width="40%" style="float:right;padding-left:25px;padding-top:15px">
</a>

The end of the year got busy with FOSS4G in Belém, Brazil, featuring a keynote on Veronica Andreo's [Journey of Open Source Discovery and Nurturing a New Generation of Contributors](https://veroandreo.github.io/grass-gis-talks/foss4g2024_keynote.html) and [State of GRASS](https://veroandreo.github.io/grass-gis-talks/foss4g2024_state_of_grass.html#/Front%20page) talk. Shortly after, Markus Neteler gave a keynote at FOSS4G Asia [celebrating four decades of innovation of the GRASS GIS project](https://htmlpreview.github.io/?https://github.com/neteler/grass-gis-talks-markus/blob/main/foss4g_asia2024.html).
During the same time GRASS GIS was prominently featured at the AGU24 Annual Meeting in Washington, D.C. through a booth in the Exhibit Hall, showcasing Tangible Landscape setup to demonstrate GRASS capabilities. Vaclav Petras, Anna Petrasova, Corey White, Caitlin Haedrich, Pratikshya Regmi and Huidae Cho authored and co-authored over 10 talks and posters covering a variety of topics including hydrology, participatory modeling, and open science. Caitlin even highlighted GRASS GIS in her [talk](https://www.youtube.com/watch?v=oCwNH-kSZ2k) delivered on the NASA Hyperwall!



### Looking Ahead

<a href="/images/news/NCSU_developer_summit_venue_2025_collage.jpg">
  <img src="/images/news/NCSU_developer_summit_venue_2025_collage.jpg"
   alt="Venue for GRASS developer summit 2025 at NCSU"
   title="Venue for GRASS developer summit 2025 at NCSU"
   width="40%" style="float:left;padding-right:25px;padding-top:15px">
</a>

What is coming in 2025? Major updates to documentation, the transition to CMake, and the addition of a Conda package are underway. We have also launched a new, modern platform for [tutorials](https://grass-tutorials.osgeo.org/) with several new tutorials contributed by Veronica Andreo. With the help from the community, we will be adding new ones.
With the support of the U.S. National Science Foundation, [this year's community meeting](https://grasswiki.osgeo.org/wiki/GRASS_Developer_Summit_Raleigh_2025) will be in Raleigh, North Carolina, USA. See you there!

Congratulations everyone on a great year!!

*Anna Petrasova* (North Carolina State University),\
*Vaclav (Vashek) Petras* (North Carolina State University)\
with input from the community



