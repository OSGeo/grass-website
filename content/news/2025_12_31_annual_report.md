---
title: "GRASS Annual Report 2025"
date: 2025-12-31T13:12:00+05:00
layout: "news"
author: Anna Petrasova, Vaclav Petras
---

<a href="/images/news/grass_devs_on_the_grass.JPG">
<img src="/images/news/grass_devs_on_the_grass.JPG"
  alt="People with GRASS swag on grass"
  title="GRASS community (GRASS Developer Summit 2025)"
  width="50%" style="float:right;padding-left:30px;">
</a>

It's been another exciting year for the GRASS project! From improved interfaces for Python users to modernized documentation and a major developer gathering in North Carolina, the year 2025 brought significant advances on multiple fronts. Let's take a look back at what our community accomplished.

### Development Activity

A major theme of 2025 was improving how users interact with GRASS across different interfaces. This work touched everything from tool outputs to Python APIs to documentation, creating a more cohesive and accessible experience.

The **new GRASS Python API**, available in the [grass.tools](https://grass.osgeo.org/grass-devel/manuals/python_intro.html) module, was developed by Vaclav Petras and Anna Petrasova as part of a collaboration with [Natrx](https://natrx.io)—a company focused on coastal infrastructure solutions—funded through an NSF SBIR Phase II grant (award 2322073). The API presents GRASS tools as native Python functions with automatic JSON parsing, smart return values, proper exception handling, and seamless NumPy integration. This is a great example of how commercial applications of GRASS can result in improvements that benefit the entire open-source community. We organized a [webinar on the new Python API](https://www.youtube.com/watch?v=6VI9bfglP3c) to introduce these capabilities.

Complementing the new API, we continued adding **JSON outputs** to tools as part of our [roadmap](/about/roadmap) item *Integration into data science pipelines*. This effort standardizes output settings through a *format* parameter, with some tools also supporting CSV or plain text. During the summer, Google Summer of Code (GSoC) contributor Nishant Bansal [added JSON output to several tools in C](https://grasswiki.osgeo.org/wiki/GRASS_GSoC_2025_Add_JSON_output_to_different_tools_in_C), continuing this important work. The work was led and reviewed by Anna Petrasova, Vaclav Petras, Corey White, Edouard Choinière, Nicklass Larson, and Markus Metz.

The API work also introduced [**RegionManager**](https://grass.osgeo.org/grass-devel/manuals/libpython/grass.script.html#grass.script.RegionManager)
and [**MaskManager**](https://grass.osgeo.org/grass-devel/manuals/libpython/grass.script.html#grass.script.MaskManager)—context managers that make resource handling clean and Pythonic. A particularly significant change is the new ability to concurrently use multiple 2D raster masks in the same mapset, which required modifications to GRASS's C libraries. Previously, only one mask named MASK could exist per mapset, limiting parallelization possibilities. The mask improvements benefit all GRASS scripting interfaces, not just Python.

<a href="/images/news/new_documentation.png">
<img src="/images/news/new_documentation.png"
  alt="New GRASS documentation example"
  title="New GRASS documentation example"
  width="45%" style="float:left;padding-right:25px;">
</a>

The **GRASS Markdown documentation project** resulted in a complete redesign of our user documentation. The [modernized documentation](https://grass.osgeo.org/grass85/manuals/index.html) integrates access to user and developer web pages, incorporates Python syntax into tool manuals, and features numerous improvements including better indexing and search. Each tool's manual page now shows tabs for Command line, Python (*grass.script*), and Python (*grass.tools*) usage, making it easier for users to find the right syntax for their preferred interface. The work was done by Martin Landa, Markus Neteler, Corey White, Vaclav Petras, Anna Petrasova and others.

We also made progress on **parallelization**, with *r.mapcalc* for raster algebra now parallelized—benefiting the many other tools that depend on it.

Background refactoring of Python code for project and session handling contributed to broader interdependent ongoing efforts led by Huidae Cho and Nicklas Larsson on **CMake build**, **Filesystem Hierarchy Standard (FHS) compliance**, and the upcoming **conda package**—work that will make GRASS easier to install and integrate into data science workflows.

For macOS users, the [GRASS App for Mac is now notarized](/news/2025_02_11_mac_app_notarized/), representing a significant improvement in both security and user convenience. Thanks to Nicklas Larsson's work, users no longer face the security warnings that previously complicated installation.

<a href="/images/news/i.hyper_example.jpg">
<img src="/images/news/i.hyper_example.jpg"
  alt="PRISMA SWIR-geology composite generated with i.hyper.import"
  title="PRISMA SWIR-geology composite generated with i.hyper.import"
  width="44%" style="float:right;padding-left:25px;">
</a>

The year also saw an impressive roster of [**new addons**](https://grass.osgeo.org/grass-stable/manuals/addons/) contributed by community members: the *i.hyper* toolset for hyperspectral imagery processing by Alen Mangafić and Tomaž Žagar; hydrology tools *r.timeofconcentration*, *r.runoff*, and *r.curvenumber* by Abdullah Azzam; *r.lfp* by Huidae Cho; *r.gravity.terrain* by David Farris; *r.earthworks* for terrain modeling by Brendan Harmon; *i.sam2* and *v.surf.rst.cv* by Corey White; *r.stone* by Fausto Guzzetti, Massimiliano Alvioli, and Andrea Antonello; and *r.slopeunits* by Ivan Marchesini, Massimiliano Alvioli, Markus Metz, and Carmen Tawalika.

Laurent Courty developed an [Xarray backend for GRASS](https://github.com/lrntct/xarray-grass), further expanding GRASS integration with the Python data science ecosystem. The [**rgrass**](https://github.com/OSGeo/rgrass) R package, maintained by Steven Pawley,  moved to the OSGeo GitHub organization, ensuring the infrastructure is community-maintained rather than depending on specific individuals.

Kudos to our [top 5 code contributors](https://github.com/OSGeo/grass/graphs/contributors?from=1%2F1%2F2025&to=12%2F31%2F2025) based on commits to the main repository: Edouard Choinière (205), Shubham Vasudeo Desai (155), Vaclav Petras (144), Anna Petrasova (91), and Nicklas Larsson (90). In total, 44 people made contributions to the main repository this year.

In the role of release manager, Markus Neteler led preparation and publishing of maintenance releases [8.4.1](/news/2025_03_02_grass_gis_8_4_1_released/) and [8.4.2](/news/2025_11_27_grass_gis_8_4_2_released/), keeping the stable branch updated with bug fixes and improvements. The 8.5.0 feature release was postponed to 2026 so that all the improvements to documentation, JSON outputs, parallelization, and the new Python API can be part of the release.

### Community Meetings

<a href="/images/news/grass_devs_talley_stairs.JPG">
<img src="/images/news/grass_devs_talley_stairs.JPG"
  alt="GRASS Developer Summit 2025 participants"
  title="GRASS Developer Summit 2025 participants"
  width="45%" style="float:left;padding-right:25px;">
</a>

The [GRASS Developer Summit 2025](/news/2025_05_27_grass_dev_summit_report/) **brought together more than 30 contributors** from around the world for six days of focused collaboration at North Carolina State University in Raleigh. Held May 19–24, the event was made possible through the generous support of the U.S. National Science Foundation (award 2303651), Bohannan Huston, Inc., and the Center for Geospatial Analytics at NC State.

The **week-long event** featured a mix of hands-on hacking, roadmap discussions, and topic-based working sessions. Participants explored a wide range of ideas—from improving access to GRASS tools and simplifying color table workflows, to adding support for hyperspectral data, creating a GRASS backend for xarray, and integrating Jupyter into the GRASS GUI. Other sessions focused on translation and documentation strategies, the contribution process for new users, and how to better support scientific and educational use cases. Contributors also worked on parallelization of algorithms, development of new addons, continuous integration, conda packaging, CMake build, and tutorials for our [new tutorials website](https://grass-tutorials.osgeo.org/).

<a href="/images/news/NCSU_GRASS_Developer_Summit_Natrx.JPG">
<img src="/images/news/NCSU_GRASS_Developer_Summit_Natrx.JPG"
  alt="Person presenting slides"
  title="GRASS Lightning Talks"
  width="40%" style="float:right;padding-left:25px;">
</a>

As part of our outreach to the local geospatial community, the [Center for Geospatial Analytics](https://cnr.ncsu.edu/geospatial/) hosted an evening of **lightning talks** highlighting the diverse capabilities of GRASS. Presenters from industry, government, and academia covered trench planning for optical cables, elevation-derived hydrography, coastal erosion assessments, urban growth modeling, species distribution, continental-scale hydrology, and agricultural runoff modeling with [Tangible Landscape](https://tangible-landscape.github.io/). These talks are now [available on YouTube](https://www.youtube.com/watch?v=jwMir7Rd73k&list=PLycBDiXWmuxm6UCZSWJWrBpLWJYQITIma).
Later in the year, a **local GRASS meetup** was also [held at NC State](https://grasswiki.osgeo.org/wiki/Local_GRASS_Meetup_at_NC_State_Center_for_Geospatial_Analytics_2025), bringing together the regional geospatial community.

### Community and Governance

This year brought important changes to how GRASS presents itself to the world. We aligned our [branding](/about/brand) with [OSGeo](https://osgeo.org) and simplified our name: we're now officially just **GRASS**, not "GRASS GIS"—returning to the project's original name while reflecting how the community has referred to it colloquially for years. We've also launched an official [GRASS Project Swag Shop](https://www.redbubble.com/people/grassgis/shop) featuring 17 designs with the new logo and branding as well as the old one.

On the organizational front, the GRASS project is now using **NumFOCUS as a fiscal sponsor**. This provides a lightweight way to create invoices for sponsors—with the first invoice created and paid this year. In the long term, we aim to build a budget that directly supports ongoing maintenance.
The best way to contribute financially directly to GRASS is now through [NumFOCUS](https://numfocus.org/donate-to-grass).
GRASS continues to present itself as an OSGeo Project while also being a NumFOCUS Fiscally Sponsored Project.

Our [YouTube channel](https://www.youtube.com/@grass-gis) had a productive year, publishing 11 new videos and organizing 50 videos from other sources into playlists. We now have 3.09K subscribers, following the channel renewal last year! The [Wiki main page](https://grasswiki.osgeo.org/wiki/GRASS-Wiki) was also redesigned and optimized for its most common uses: governance, events, and organization of resources.

### Workshops and Tutorials

<a href="/images/news/examples_of_tutorials.png">
<img src="/images/news/examples_of_tutorials.png"
  alt="Examples of GRASS tutorials"
  title="Examples of GRASS tutorials"
  width="50%" style="float:left;padding-right:25px;">
</a>


Our [tutorial platform](https://grass-tutorials.osgeo.org) grew significantly this year, with **20 new tutorials** bringing the total to over 50. The new additions include 2 tutorial collections, 2 translations into Portuguese, and several externally linked tutorials from community blogs. Highlights include tutorials on [NumPy integration with Landlab](https://grass-tutorials.osgeo.org/content/tutorials/numpy_integration/grass_numpy_integration.html) by Anna Petrasova, series of tutorials on [spatio-temporal data handling](https://grass-tutorials.osgeo.org/content/tutorials/time_series/time_series_home.html) by Veronica Andreo, [hydro-flattening DEMs](https://grass-tutorials.osgeo.org/content/tutorials/hydro_flattening/hydro_flatenning.html) by Doug Newcomb, [generating and modeling terrain](https://grass-tutorials.osgeo.org/content/tutorials/earthworks/earthworks.html) by Brendan Harmon, [introductory geospatial tutorials](https://grass-tutorials.osgeo.org/content/tutorials/remote_sensing_visualization/GRASS_remotesensing.html) by Michael Barton, and [species distribution modeling](https://ecodiv.earth/TutorialsNotes/sdmingrassgis/) by Paulo van Breugel.

The community delivered **workshops** at several events throughout the year. A workshop on physically-based hydrologic modeling using GRASS was delivered by Huidae Cho and Nelson Kandel at the New Mexico State University in January. Michael Barton and Eunice Villaseñor Iribe taught *Beyond the GIS Map: Open Source Tools for Geospatial Research* at Arizona State University in March. Vaclav Petras and Corey White co-lead a workshop on [*Geospatial Data Science with GRASS*](https://github.com/ncsu-geoforall-lab/grass-data-science-ncgis-2025#readme) at the NCGIS conference. Caitlin Haedrich helped lead workshops introducing GRASS in Jupyter notebooks to different communities throughout the spring and summer—at [IALE–North America](https://github.com/ncsu-geoforall-lab/iale-2025-workshop-tl) in April with Anna Petrasova, at the [CSDMS Annual Meeting](https://github.com/ncsu-geoforall-lab/csdms-grass-2025) in May with Pratikshya Regmi, and at the [Geomorphometry](https://github.com/ncsu-geoforall-lab/geomorphometry2025_workshop) conference in June with Corey White.
At FOSS4G North America, Corey White and Caitlin delivered a [workshop on GRASS addon tool development](https://github.com/cwhite911/FOSS4GNA-2025-workshop) with Python. At NCSU GIS Week in November, Anna Petrasova and Vaclav Petras led [*Getting Started in GRASS with Python, Pixels, and Pigs*](https://github.com/ncsu-geoforall-lab/gis-week-grass-2025).


### Conferences and Research

GRASS continues to be well-cited in scientific literature. **DOI-based references** to GRASS software in publications have more than [doubled in 2025](https://www.fair4g.org/grass.html), indicating a positive shift towards acknowledging open source software in publications. GRASS' [Google Scholar](https://scholar.google.com/citations?user=gJ0ZB0cAAAAJ) account, tracking publications that have used GRASS, reached **51K citations**—a testament to the impact of GRASS in research and scientific applications.

<a href="/images/news/Auckland_state_of_GRASS.jpg">
<img src="/images/news/Auckland_state_of_GRASS.jpg"
  alt="State of GRASS talk at FOSS4G 2025"
  title="State of GRASS talk at FOSS4G 2025"
  width="45%" style="float:right;padding-left:15px;padding-top:15px;padding-bottom:15px">
</a>

Community members represented GRASS at **conferences around the globe**. At FOSS4G New Zealand in November, Alen Mangafić and Tomaž Žagar presented on [hyperspectral imagery processing with *i.hyper*](https://youtu.be/8xg8kQaGAbo) and [scalable impervious land mapping](https://youtu.be/5IJokFcEouo), Luca Delucchi delivered the [State of GRASS](https://youtu.be/in1ybHN1ebk), and Tim Barnes demonstrated [tree shadow modeling with QGIS and GRASS](https://youtu.be/2CNv1P0bkz0). At FOSS4G NA, Corey White presented the State of GRASS alongside the addon development workshop. Vaclav Petras got [Into the Weeds with GRASS](https://wenzeslaus.github.io/grass-talks/ncgis2025.html) at NCGIS in March.

The FOSS4G Europe conference in Mostar featured Alen Mangafić's comprehensive [State of GRASS talk](https://talks.osgeo.org/foss4g-europe-2025/talk/C89KXN/), covering everything from our new governance structure and NumFOCUS fiscal hosting to technical advances like the CMake transition and conda packaging. State of GRASS presentations were also delivered at [FOSS4G.NL by Paulo van Breugel](https://ecodiv.earth/share/foss4gnl2025/), at FOSS4G.be by Moritz Lennert, and at [FOSSGIS-Konferenz by Markus Neteler](https://htmlpreview.github.io/?https://github.com/neteler/grass-gis-talks-markus/blob/main/fossgis_grass_LT_2025.html).

At IALE–North America in April, Anna Petrasova and Caitlin Haedrich presented on [building geospatial models from Python workflows to Tangible Landscape](https://github.com/ncsu-geoforall-lab/iale-2025-workshop-tl). Vaclav Petras highlighted how well [code curation and reusability of research code works in GRASS](https://wenzeslaus.github.io/grass-talks/iale-na2025.html), questioning the current common practices in science. Corey White presented work on *Topographic Impacts of Hurricane Helene in Western NC* which heavily used GRASS and was followed by Pratikshya Regmi’s related poster on a multi-sensor geospatial analysis in western North Carolina at American Geophysical Union Annual Meeting in December.

### Looking Ahead

The upcoming 8.5.0 release will bring the new Python API, JSON outputs, and documentation improvements to users, and the conda package will simplify installation for data scientists.
This work also prepared the ground for future improvements, such as subcommand interfaces and no-project processing, which will, however, require new funding to move forward.

We look forward to this year’s Google Summer of Code and to welcoming new contributors, including those who make careful and responsible use of generative AI. Check out our [contributor guidelines](https://github.com/OSGeo/grass/blob/main/CONTRIBUTING.md) and [good first issues](https://github.com/OSGeo/grass/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22).

If you want to see continued development in 2026, consider hiring one of our [commercial support providers](/support/commercial) or [contributing financially](https://numfocus.org/donate-to-grass) to the project.

Congratulations everyone on a great year!

---

With input from the community, this report was prepared by *Anna Petrasova* and *Vaclav Petras* (North Carolina State University) as part of their work on U.S. National Science Foundation (NSF #2303651).