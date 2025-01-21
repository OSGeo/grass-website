---
title: "GRASS GIS 8.4.0 released"
date: 2024-07-27T10:42:00+01:00
layout: "news"
author: Markus Neteler and the GRASS Development Team
---

### What's new in a nutshell

The GRASS GIS 8.4.0 release contains more than **520 changes**
compared to 8.3.2. This new minor release includes
**important fixes and improvements** to the GRASS GIS tools, libraries and the
graphical user interface (GUI), making it even more stable and robust for daily work.

Most importantly: _location_ becomes _project_: The Python API, command line,
and graphical user interface are now using _project_ instead of _location_
for the main component of the data hiearchy while maintaining backward compatibility.

Further relevant changes:

- Python: the creation of new projects in Python has been greatly simplified (no more
  chicken and egg problems) - also for Jupyter notebooks.
- GUI: easy command history navigation through the new **History browser panel**.
- New [GRASS GIS Programming Style Guide](https://github.com/OSGeo/grass/blob/main/doc/development/style_guide.md).
- For r.univar, the computation extended statistics is now parallelized.
- JSON output format support (format="json") has been added in multiple tools
  (e.g., r.report, r.info, v.db.select, t.rast.list, etc.).
- A new support vector machine image classification (SVM) has been added in i.svm.

Translations continue in
[Weblate](https://weblate.osgeo.org/projects/grass-gis/), which
automatically creates pull requests with the translated chunks.
We'd like to **thank the translators of all languages** for their
ongoing support!

### Full list of changes and contributors

For all 520 changes, see our detailed announcement with the full list of
features and bugs fixed at
[GitHub / Releases / 8.4.0](https://github.com/OSGeo/grass/releases/tag/8.4.0).

Thanks to all contributors and financial supporters!

<a href="/images/news/grass840_gui_multiple_map_displays_and_history.png">
  <img src="/images/news/grass840_gui_multiple_map_displays_and_history.png"
   alt="GRASS GIS 8.4.0"
   title="GRASS GIS 8.4.0"
   width="65%" style="float:right;padding-left:15px;padding-top:15px">
</a>

## Software download

#### Binaries/Installers download

- Windows
  - [64bit standalone installer](https://grass.osgeo.org/grass84/binary/mswindows/native/WinGRASS-8.4.0-1-Setup.exe)
- macOS
  - [Official Application Bundle](https://cmbarton.github.io/grass-mac/download/)
- Linux
  - [Debian](https://tracker.debian.org/pkg/grass)
  - [Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable/+packages?field.name_filter=grass)
  - [Fedora/Centos/EPEL](https://src.fedoraproject.org/rpms/grass)
  - [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)
  - [AUR](https://aur.archlinux.org/packages/grass)
  - [Nix](https://search.nixos.org/packages?channel=unstable&show=grass&size=1&type=packages&query=grass+gis)

Further binary packages for other platforms and distributions will follow shortly,
please check at [software downloads](/download/software/).

#### Source code download

- <https://grass.osgeo.org/grass84/source/>
- <https://grass.osgeo.org/grass84/source/grass-8.4.0.tar.gz>
- [From GitHub](https://github.com/OSGeo/grass/releases/tag/8.4.0)
- DOI: [10.5281/zenodo.13102854](https://doi.org/10.5281/zenodo.13102854)


### More about GRASS GIS

- First time users may explore our list of [tutorials](https://grass-tutorials.osgeo.org).
- See GRASS [tools manual pages](https://grass.osgeo.org/grass-stable/manuals/index.html) for details and examples.
- [Get in touch with us](https://grass.osgeo.org/support/community/).
- Feel like supporting the project? [Donate or sponsor us!](https://opencollective.com/osgeo/projects/grass/contribute)

_The GRASS Dev Team_
