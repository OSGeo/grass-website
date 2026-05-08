---
title: "GRASS 8.5.0 released"
date: 2026-05-08T12:00:00-04:00
layout: "news"
author: Vaclav Petras
---

## Two years in the making

<a href="/images/logos/grass-logo/grass-logo-gradient-transparent@2x.png">
<img src="/images/logos/grass-logo/grass-logo-gradient-transparent@2x.png"
  alt="GRASS logo"
  title="GRASS"
  width="30%" style="float:right;padding-left:25px;padding-bottom:25px">
</a>

GRASS 8.5.0 is here. This feature release contains more than **2515 changes**, the result of **two years of focused work** by the GRASS community. We deliberately postponed what would have been a 2025 release so that several interlocking pieces could land together: a new Python API, JSON output across dozens of tools, and a complete rewrite of the documentation. These changes are more useful together than they would have been in sequence, and they took time to do well.

This is also the first release under our refreshed branding, aligned with OSGeo's branding. The project has readopted its original name, **GRASS**, with a [new logo and visual identity](https://grass.osgeo.org/news/2025_04_29_grass_branding_update/).

## A step change for Python users

<a href="/images/news/i.hyper_example.jpg">
<img src="/images/news/i.hyper_example.jpg"
  alt="PRISMA SWIR-geology composite generated with i.hyper.import"
  title="PRISMA SWIR-geology composite generated with i.hyper.import"
  width="40%" style="float:left;padding-right:25px;padding-top:20px">
</a>

The biggest story in 8.5.0 is how much better GRASS feels from Python. Three changes, each substantial on their own, combine to transform the experience.

**A new Python API.** The [*grass.tools* subpackage](https://grass.osgeo.org/grass85/manuals/python_intro.html) presents GRASS tools as native Python functions, with direct NumPy array and raster pack I/O, smart return values, and proper exception handling. It was developed by Václav Petráš and Anna Petrášová in collaboration with [Natrx](https://www.natrx.io/), a company focused on coastal infrastructure. This is a good example of how commercial applications of GRASS can produce improvements that benefit the entire open-source community.

**JSON output, nearly everywhere.** Dozens of tools now support `format="json"`, including *g.list*, *g.region*, *r.info*, *r.univar*, *r.stats*, *r.report*, *v.info*, *v.what*, *v.db.connect*, and many more. The effort was led and reviewed by Anna Petrášová, Václav Petráš, Corey White, Edouard Choinière, Nicklas Larsson, and Markus Metz, with major contributions from Google Summer of Code participants Nishant Bansal and Kriti Birda, and others. Parsing GRASS output in Python used to mean string manipulation or custom wrappers. Now it is a single call to *json.loads*, or nothing at all, since *grass.tools* handles it internally.

**New documentation.** The entire user documentation has been rewritten in Markdown and rendered with MkDocs. Every tool's manual page now shows tabs for **Command line**, **Python (grass.tools)**, and **Python (grass.script)** usage: the same example, three ways. The work was done by Martin Landa, Markus Neteler, Corey White, Václav Petráš, Anna Petrášová, and a long list of contributors.

The net effect: someone coming to GRASS from the Python data-science ecosystem can now find a tool in the docs, copy a working Python snippet, call it as a function, and read the result as a structured object. Workflows that previously required a wrapper module or careful string parsing now compose with the rest of a Python script the way any other library does.

## More highlights

<!-- TODO: replace placeholder image with an 8.5.0 highlights screenshot -->
<a href="/images/news/grass840_gui_multiple_map_displays_and_history.png">
<img src="/images/news/grass840_gui_multiple_map_displays_and_history.png"
  alt="GRASS 8.5.0 (placeholder image — replace before publish)"
  title="Placeholder"
  width="45%" style="float:right;padding-left:25px;padding-top:20px">
</a>

**Parallelization.** *r.mapcalc* is now parallelized, which benefits the many tools built on top of it. *r.texture*, *r.horizon* in raster mode, and *v.surf.rst* cross-validation gained OpenMP support. The `nprocs` parameter has been extended to *r.blend*, *r.grow*, *r.mapcalc.simple*, and *i.image.mosaic*, letting these tools leverage the underlying parallelized algorithms. OpenMP-enabled tools now default to using all available cores.

**Multiple masks per mapset.** Masks are now driven internally by the *GRASS_MASK* environment variable, making it possible to use different masks concurrently in the same mapset. The change required modifications to the GRASS C libraries and unlocks cleaner parallel workflows. New *RegionManager* and *MaskManager* context managers in *grass.script* make scoped region and mask changes straightforward.

**Expanded *grass.jupyter*.** A query button and drawing of simple geometries in *InteractiveMap*, interactive computational region updates, parallelization in *TimeSeriesMap* and *SeriesMap*, and a *save()* method for *Map3D* are now part of the package.

**GUI improvements.** Projects can be added directly in the Data Catalog, column statistics can be computed on SQL-filtered or interactively selected rows in the attribute table manager, the Python editor is now dockable, the command history panel supports copying commands, and the Graphical Modeler variable syntax has changed from `%variable` to `%{variable}`. Major GUI work came from Martin Landa, Tomáš Zigo, Ondřej Pešek, Anna Petrášová, Linda Karlovská, and others.

<a href="/images/news/hydroflatten.webp">
<img src="/images/news/hydroflatten.webp"
  alt="r.hydroflatten addon"
  title="New r.hydroflatten addon tool"
  width="40%" style="float:left;padding-right:25px;padding-top:5px">
</a>

**New tools:** *r.smooth.edgepreserve* for edge-preserving raster smoothing and *r.mask.status* to report presence of 2D raster mask. **New addon tools:** *i.hyper*, *i.sam2*, *r.buildvrt.gdal*, *r.colors.qml*, *r.colors.toqml*, *r.curvenumber*, *r.earthworks*, *r.gravity.terrain*, *r.hand*, *r.hydrobasin*, *r.in.vect*, *r.lfp*, *r.manning*, *r.maxent.setup*, *r.runoff*, *r.slopeunits*, *r.stone*, *r.timeofconcentration*, *r.windfetch*, *t.stac*, and *v.surf.rst.cv*.

**Full CMake support.** Alongside the existing Autotools build, GRASS and its addons can now be built with CMake. This is the result of a multi-year effort led by Huidae Cho and Nicklas Larsson with several collaborators, building on initial work by Rashad Kanavath.

**MSVC build support.** GRASS can now be built on Windows with the Microsoft Visual C++ compiler. This work was led by Huidae Cho, also building on initial work by Rashad Kanavath.

**Security and updated requirements.** More than 500 security issues reported by Coverity Scan have been fixed. GRASS now requires GDAL 3.7+, PROJ 9.0+, C++17, Autoconf 2.72, Python 3.10+, and the CBLAS and LAPACKE C interfaces for BLAS and LAPACK.

The full list of changes is available in the [detailed announcement on GitHub](https://github.com/OSGeo/grass/releases/tag/8.5.0).

## Many hands

<a href="/images/news/NCSU_developer_summit_stairs.jpg">
<img src="/images/news/NCSU_developer_summit_stairs.jpg"
  alt="GRASS contributors group picture in Talley Student Center, NC State"
  title="GRASS contributors group picture"
  width="40%" style="float:right;padding-left:25px;padding-top:20px">
</a>

A release of this scale doesn't come from any one person or team. Across the two-year development cycle, over **70 people** contributed commits to the main repository. Over thirty first-time contributors are acknowledged in the release notes alone.

The top code contributors across the release, by commit count, were Edouard Choinière, Shubham Desai, Václav Petráš, Nicklas Larsson, Arohan Ajit, Anna Petrášová, Nishant Bansal, Markus Neteler, Ondřej Pešek, and Corey White. The top reviewers were Edouard Choinière, Anna Petrášová, Nicklas Larsson, Václav Petráš, and Stefan Blumentrath. Release management for 8.5.0 was led by Markus Neteler.

If this release feels like more than the sum of its parts, it's because the community coordinated deliberately to make it so. Two years of work is what made it possible for the Python API, the JSON outputs, and the rewritten documentation to reinforce each other rather than arrive one at a time, along with hundreds of smaller improvements across the GUI, parallelization, security, and build systems.

Translations continue in [Weblate](https://weblate.osgeo.org/projects/grass-gis/), which automatically opens pull requests with translated chunks. Thank you to the translators in every language for your ongoing contributions.

## Support the project

This release was supported in part by the U.S. National Science Foundation (awards [#2303651](https://grass.osgeo.org/news/2023_09_06_nsf_grant_awarded/) and [#2322073](https://grass.osgeo.org/news/2025_12_31_annual_report#development-activity)), along with sponsor contributions and individual donors. Yet many people contribute to GRASS without any dedicated financial support.

The project is now a [NumFOCUS Fiscally Sponsored Project](https://numfocus.org/sponsored-projects), alongside our long-standing status as an OSGeo Project. This provides a stable path for financial contributions to the project.

If you would like to help sustain this work, you can [**donate to GRASS through NumFOCUS**](https://numfocus.org/donate-to-grass). Financial support is what makes multi-year coordinated work like this release possible, and what will make [the next one](/about/roadmap/) quicker.

## Software download

<a href="/images/news/PXL_20240614_113252477.PORTRAIT.jpg">
<img src="/images/news/PXL_20240614_113252477.PORTRAIT.jpg"
  alt="GRASS contributors group picture next to Hunt Library, NC State"
  title="GRASS contributors group picture"
  width="60%" style="float:right;padding-left:25px;padding-top:20px">
</a>

**Packages and installers**

- [Windows](/download/windows/)
- [macOS](/download/mac/)
- [Linux](/download/linux/)
- [conda](/download/conda/) (new in 8.5.0)

Packaging for these platforms is underway.

**Source code and extras**

- From [GitHub](https://github.com/OSGeo/grass/releases/tag/8.5.0) or [download.osgeo.org](https://download.osgeo.org/grass/grass85/source/)
- [Explore and try in Binder](https://mybinder.org/v2/gh/OSGeo/grass/8.5.0?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fjupyter_example.ipynb)
- macOS local build script — backup for Intel hardware ([#4946](https://github.com/OSGeo/grass/issues/4946))
- DOI: [10.5281/zenodo.20083515](https://doi.org/10.5281/zenodo.20083515)

## More about GRASS

- Explore our [tutorials](https://grass-tutorials.osgeo.org/), covering both introductory material and advanced topics.
- See the [tool manual pages](https://grass.osgeo.org/grass85/manuals/) for details and examples.
- [Get in touch with us.](https://grass.osgeo.org/about/community/)
- Feel like supporting the project? [Donate](https://numfocus.org/donate-to-grass) or [sponsor us](https://grass.osgeo.org/about/sponsors/)!

Congratulations everyone on an exceptional release.

---

*This post was prepared by Václav Petráš on behalf of the GRASS community. The release itself is the work of a broad community of contributors, many of them acknowledged above, and many more visible on [GitHub](https://github.com/OSGeo/grass/graphs/contributors?from=7%2F27%2F2024&to=5%2F8%2F2026) and other places.*
