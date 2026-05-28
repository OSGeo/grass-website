---
title: "GRASS on conda-forge for every major platform"
date: 2026-06-01T12:00:00-04:00
layout: "news"
author: Vaclav Petras
---

<img src="/images/logos/grass-logo/grass-logo-gradient-transparent@2x.png"
  alt="GRASS logo"
  title="Gradient version of the GRASS logo"
  width="15%" style="float:right;padding-left:25px;padding-bottom:25px">

Full conda support for GRASS is finally here!
You can now install GRASS 8.5.0 *on conda* on *Windows*, *Linux*,
*macOS on Intel*, and *macOS on Apple Silicon*, simply by running:

```bash
conda install -c conda-forge grass
```

## From soft launch to full rollout

<img src="/images/news/ncsu_grass_developer_summit_cho.jpg"
  alt="Huidae Cho presenting on hydrologic parameter computation at the 2025 GRASS Developer Summit"
  title="Huidae Cho presenting at the 2025 GRASS Developer Summit"
  width="40%" style="float:right;padding-left:25px;padding-top:10px">

GRASS was soft-launched on conda with the 8.4.2 release, with packages for Linux
(`linux-64`) and macOS on Intel (`osx-64`). Now Windows (`win-64`) and macOS on
Apple Silicon (`osx-arm64`) are both fully supported, providing full coverage of
every major platform starting with GRASS 8.5.0.

This work was led by [Huidae Cho](https://github.com/HuidaeCho), who carried conda packaging from early
experiments to a complete, multi-platform release on the
[conda-forge grass feedstock](https://github.com/conda-forge/grass-feedstock).
Reaching Windows in particular required the broader build-system modernization
in 8.5.0, including
[full CMake support and MSVC build support](/news/2026_05_08_grass_8_5_0_released/).

## What is conda anyway?

[conda](https://docs.conda.io/) is a package manager that installs software and
all its dependencies into isolated, reproducible environments across Windows,
macOS, and Linux. The community-run [conda-forge](https://conda-forge.org/)
channel hosts thousands of scientific and geospatial packages, including GDAL,
PROJ, NumPy, pandas, and Jupyter — and now
[GRASS](https://anaconda.org/conda-forge/grass), on every major platform.

<img src="/images/news/grass_tools_jupyter_watershed.png"
  alt="A few lines of Python using grass.tools to compute a watershed and flow accumulation, with the result shown in an interactive grass.jupyter map"
  title="grass.tools and grass.jupyter in a notebook: watershed and flow accumulation"
  width="40%" style="float:right;padding-left:25px;padding-top:5px">

For GRASS users, that means installing GRASS alongside the rest of the stack
with one command, and capturing the whole environment in a single
`environment.yml` that recreates identically on any machine. It pairs
especially well with
[*grass.tools*](https://grass.osgeo.org/grass-stable/manuals/python_intro.html)
and
[*grass.jupyter*](https://grass.osgeo.org/grass-stable/manuals/jupyter_intro.html).

## Install GRASS today

Create a fresh environment and install in one step:

```bash
conda create -n grass -c conda-forge grass
conda activate grass
grass
```

The same works with [mamba](https://mamba.readthedocs.io/) for faster
dependency resolution. The conda download page has environment files, Python
usage, and more.

<div align="center">
  <a href="/download/conda/" class="btn btn-download">
    More conda options
  </a>
</div>

<br>

## Daily snapshots for developers

Beyond the official conda-forge releases, there is an experimental channel,
[grass-conda](https://grass-conda.isnew.info/), that builds GRASS from source
and publishes *daily development snapshots* for `noarch`, `linux-64`,
`osx-64`, `osx-arm64`, and `win-64`. It offers `grass` (the latest release) and
`grass-dev` (a daily development snapshot), which is handy for testing the
current development version before it lands in a release. For example, with
[micromamba](https://mamba.readthedocs.io/):

```bash
micromamba create -n grass -yc https://grass-conda.isnew.info/ grass-dev c-compiler
micromamba run -n grass grass
```

See [grass-conda.isnew.info](https://grass-conda.isnew.info/) for full setup
instructions on each platform, recipes, and build details. For everyday use,
the official [conda-forge](/download/conda/) packages are the recommended route.

## Support the project

<img src="/images/news/prague_meeting_2023.jpg"
  alt="GRASS contributors collaborating around laptops at the 2023 GRASS Community Meeting in Prague"
  title="GRASS contributors at the 2023 Community Meeting in Prague"
  width="45%" style="float:right;padding-left:25px;padding-top:10px">

The modernization of the GRASS build system, including the transition to CMake,
Windows MSVC support, and conda packaging, was supported in part by the U.S.
National Science Foundation (NSF) POSE program
([award #2303651](/news/2023_09_06_nsf_grant_awarded/)). That funding got us
across all platforms on conda. Keeping these packages building, current, and
reliable now becomes ongoing maintenance that needs continued support.

The fastest way to help is a direct donation through
[NumFOCUS](https://numfocus.org/donate-to-grass); for more options, including
corporate sponsorship and invoicing, see the
[Sponsoring page](/contribute/sponsoring/).

<div align="center">
  <a href="https://numfocus.org/donate-to-grass" target="_blank" rel="noopener" class="btn btn-download">
    Donate via NumFOCUS
  </a>
  &nbsp;
  <a href="/contribute/sponsoring/" class="btn btn-download">
    More sponsoring options
  </a>
</div>

<br>

## Learn GRASS

- [Tutorials](https://grass-tutorials.osgeo.org/): guided introductions and worked examples, from first steps to advanced workflows.
- [Tool manual pages](https://grass.osgeo.org/grass-stable/manuals/): reference for every GRASS tool, with command-line, *grass.tools*, and *grass.script* usage on each page.
- [*grass.tools*](https://grass.osgeo.org/grass-stable/manuals/python_intro.html): call GRASS tools as native Python functions with NumPy and JSON I/O.
- [*grass.jupyter*](https://grass.osgeo.org/grass-stable/manuals/jupyter_intro.html): use GRASS in Jupyter notebooks with interactive 2D and 3D maps.
- Ready-made notebooks on Binder: the [GRASS tutorial](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fjupyter_tutorial.ipynb) and the [hydrology example](https://mybinder.org/v2/gh/OSGeo/grass/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}?urlpath=lab%2Ftree%2Fdoc%2Fexamples%2Fnotebooks%2Fhydrology.ipynb), with more on the [Try GRASS online](/learn/tryonline/) page.

Thanks to Huidae Cho and everyone who worked on the conda-forge feedstock for
getting GRASS onto every major platform.

---

*This post was prepared by Vaclav Petras on behalf of the GRASS community.*
