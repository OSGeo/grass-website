---
title: "Growing GRASS GIS with NSF Support: Progress and Next Steps"
date: 2024-09-24T13:12:00+05:00
layout: "news"
author: Anna Petrasova, Vaclav Petras
---


In 2023, our team of researchers from four U.S. universities started a project
with support from an NSF grant (award
[2303651](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2303651)). This
project aims to modernize and expand the GRASS GIS platform, strengthen its role
as a key geospatial processing engine, and build a diverse, vibrant global
community of users and developers. We are excited to share the progress we have
made so far toward these goals.

## Growing the GRASS community
<a href="/images/news/2024_community_meeting_collage.png">
  <img src="/images/news/2024_community_meeting_collage.png"
   alt="GRASS GIS Community Meeting in Prague, 2024"
   title="GRASS GIS Community Meeting in Prague, 2024"
   width="55%" style="float:left;padding-right:15px;padding-top:15px">
</a>

A core part of our mission is to build a diverse community around GRASS GIS. We
have launched several initiatives to grow the user and contributor base:

**Mentoring activities:** We’ve established a [mentoring
program](/news/2023_10_11_mentoring_program_announced/) for developers and
researchers, helping them integrate GRASS GIS into their workflows or gain the
skills needed to contribute to and innovate within the GRASS GIS ecosystem.
Mentees typically come from academia and federal agencies. We also provided
mentoring for the [GRASS Student Grant
program](/news/2023_11_09_student_grants_announced/) awardee and
[GSoC](/news/2024_05_27_gsoc_2024_students/) participants.

**Workshops and presentations:** Through talks and workshops at conferences such
as FOSS4GNA, FOSS4G Asia, FOSS4G Europe, useR!, and AGU, we introduced new
audiences to GRASS GIS and introduced a new image of GRASS GIS. GRASS GIS was
also featured in courses for advanced audiences: [coastal dynamics
workshop](https://github.com/ncsu-geoforall-lab/csdms-grass-2024) for Community
Surface Dynamic Modeling System
([CSDMS](https://csdms.colorado.edu/wiki/Main_Page)) community lead by
Caitlin Haedrich,  [Geocomputation & Machine Learning for Environmental
Applications](https://spatial-ecology.net/docs/build/html/COURSESAROUNDTHEWORLD/course_geocomp_ml_04-05_2024.html)
course, and
[GEO-OPEN-HACK-2024](https://spatial-ecology.net/docs/build/html/COURSESAROUNDTHEWORLD/course_GEO-OPEN-HACK-2024_06_2024.html)
big geospatial data hackathon lead by Giuseppe Amatulli.

**Community meeting:** We organized a [GRASS GIS Community
Meeting](/news/2024_08_02_report_community_meeting_prague_2024) that brought
together users, supporters, contributors, power users and developers to
collaborate and chart the future of the project.


## Documentation
<a href="/images/news/screenshot_tutorials_vscatterplot.png">
  <img src="/images/news/screenshot_tutorials_vscatterplot.png"
   alt="Tutorial on making plots with GRASS GIS"
   title="Tutorial on making plots with GRASS GIS"
   width="35%" style="float:right;padding-left:15px;padding-top:0px">
</a>

Comprehensive and up-to-date documentation is one of the priorities of this
project. Veronica Andreo and others developed new, modern-looking **tutorials**
for GRASS beginners, data scientists, and researchers, that will be available
soon on a platform powered by Quarto. We encourage the community to contribute
tutorials from their discipline to cover a wide range of topics. Alongside the
tutorials, we are also developing localized datasets.

Onboarding contributors, developers and maintainers got easier thanks to the new
[Programming Style
Guide](https://github.com/OSGeo/grass/blob/main/doc/development/style_guide.md).
Contributing to GRASS addons is now easier too, with a [Cookiecutter-powered
addon template](https://github.com/petrasovaa/cookiecutter-grass-addon).


## Software infrastructure improvements

A key focus of the grant has been to modernize and improve the GRASS GIS
software infrastructure.

Together with other contributors, we have addressed many **code quality and
security issues** in Python, C and C++ code that were reported by Flake8,
Coverity Scan, and Cppcheck. Resolving these issues will enable us to apply more
strict automated checks on new code contributions, resulting in easier
maintenance and high quality code. Several reviewers, not supported by the NSF
POSE project, played crucial roles in reviewing the pull requests. Given GRASS's
large code base, this work will continue into the year ahead to tackle as many
issues as we can.

Thanks to the efforts of Huidae Cho, his team and several GRASS community
members, we are close to introducing [CMake
build](https://github.com/OSGeo/grass/pull/3621). CMake, a modern system for
building code, will simplify building GRASS GIS with other projects and will
make build system maintenance easier. **Recipe for conda**, a popular package
manager for Python and R, is also on the way, bringing easier distribution of
GRASS GIS to researchers and data scientists.


## Sustainability

As part of the NSF project, we are actively working to ensure the long-term
sustainability of GRASS GIS, focusing on both community and financial aspects.
Through our participation in the NSF POSE Innovation Corps program, an
entrepreneurial training initiative focused on open-source ecosystems, our team
lead by Corey White conducted over 70 interviews with geospatial professionals.
These insights and other community discussions helped shape several actions,
such as adopting a [Code of
Conduct](https://github.com/OSGeo/grass/blob/main/CODE_OF_CONDUCT.md),
formalizing our [governance](/about/governance/) model, developing a
[roadmap](/about/roadmap/), and clarifying our relationship with OSGeo. To
further support sustainability, we are also addressing ways to reduce the
overall maintenance burden by streamlining workflows, automating repetitive
tasks, and lowering the complexity of ongoing development. Additionally, we are
documenting the current infrastructure and release procedures to ensure
knowledge is shared broadly and not dependent on individual developers. These
efforts aim to create a more sustainable and resilient future for GRASS GIS.

## Looking ahead
We maintain a detailed overview of the project efforts on [GRASS
wiki](https://grasswiki.osgeo.org/wiki/NSF_POSE_Project_2023-2025_Timeline#Other_sustainability_activities).
Over the next year, we will:

* Organize a [developer
  summit](https://grasswiki.osgeo.org/wiki/GRASS_Developer_Summit_Raleigh_2025)
  in Raleigh, North Carolina, May 19 - May 24, 2025.
* Continue engaging with a wider community through more workshops,
  presentations, and outreach events.
* Support contributions from new developers and scientists through mentorship
  and training opportunities.
* Modernize the GRASS build system and distribution through transitioning to
  CMake builds and finalizing a conda recipe.
* Improve documentation of tools through modern documentation infrastructure
  taking advantage of state-of-the-art static site generator making
  documentation more accessible and searchable.



We are grateful for the continued support of the NSF and the global GRASS GIS
community. Special thanks to community members who are helping our team by
reviewing PRs, development, improving documentation and tutorials!




*Anna Petrasova* (North Carolina State University),\
*Vaclav (Vashek) Petras* (North Carolina State University)



