---
title: "GRASS 8.4.2 released"
date: 2025-11-25T10:42:00+01:00
layout: "news"
author: Markus Neteler and the GRASS Development Team
---

### What's new in a nutshell

The GRASS GIS 8.4.2 release provides more than **35 improvements and bug fixes** compared to
version 8.4.1. The changes span core GIS modules, GUI, Python support, packaging, and
build infrastructure — making GRASS more stable, reliable, and polished for day-to-day use.

Most importantly, since the
[8.4.0 release](https://grass.osgeo.org/news/2024_07_27_grass_gis_8_4_0_released/):
_location_ is now _project_: The Python API, command line, and graphical
user interface are using _project_ instead of _location_ for the main
component of the data hierarchy while maintaining backward compatibility.

### Highlights

- `g.region` now correctly respects rows and cols when saving a computational region.
- `v.overlay` will now remove collapsed (zero-length) lines after snapping.
- A new `srtm_percent` color table is available, improving visualization workflows.
- The Simple Python Editor now supports scripts without required parameters.
- The GraphicalModeler preserves previously defined “where” option values, improving usability and consistency.

### Full list of changes and contributors

For all changes, see our detailed announcement with the full list of
features and bugs fixed at
[GitHub / Releases / 8.4.2](https://github.com/OSGeo/grass/releases/tag/8.4.2).

Thanks to all contributors and financial supporters!

<a href="/images/news/i_sam2_addon.jpg">
  <img src="/images/news/i_sam2_addon.jpg"
   alt="GRASS 8.4.2: segmentation of orthoimagery with text prompts using SamGeo"
   title="GRASS 8.4.2: segmentation of orthoimagery with text prompts using SamGeo"
   width="65%" style="float:right;padding-left:15px;padding-top:15px">
</a>

## Software download

#### Binaries/Installers download

- Windows
  - [64bit standalone installer](https://grass.osgeo.org/grass84/binary/mswindows/native/WinGRASS-8.4.2-1-Setup.exe)
- macOS
  - [Official notarized application bundle](https://cmbarton.github.io/grass-mac/download/)
- Linux
  - [Debian](https://tracker.debian.org/pkg/grass)
  - [Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable/+packages?field.name_filter=grass)
  - [Fedora/Centos/EPEL](https://packages.fedoraproject.org/pkgs/grass/grass/)
  - [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)
  - [AUR](https://aur.archlinux.org/packages/grass)
  - [Nix](https://search.nixos.org/packages?channel=unstable&show=grass&size=1&type=packages&query=grass+gis)

Further binary packages for other platforms and distributions will follow shortly,
please check at [software downloads](/download/software/).

#### Source code download

- <https://grass.osgeo.org/grass84/source/>
- <https://grass.osgeo.org/grass84/source/grass-8.4.2.tar.gz>
- [From GitHub](https://github.com/OSGeo/grass/releases/tag/8.4.2)
- DOI: [10.5281/zenodo.5176030](https://doi.org/10.5281/zenodo.5176030)

Thank you to everyone — contributors, translators, packagers, testers, and the community — for your continued support.

### More about GRASS

- First time users may explore our list of [tutorials](https://grass-tutorials.osgeo.org).
- See GRASS [tools manual pages](https://grass.osgeo.org/grass-stable/manuals/index.html) for details and examples.
- [Get in touch with us](https://grass.osgeo.org/support/community/).
- Feel like supporting the project? [Donate or sponsor us!](https://opencollective.com/osgeo/projects/grass/contribute)

_The GRASS Dev Team_
