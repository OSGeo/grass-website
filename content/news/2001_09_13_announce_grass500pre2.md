---
title: "GRASS GIS 5.0.0pre2 released 13 September 2001"
date: 2001-09-13T11:36:11+01:00
layout: "news"
author: GRASS Development Team
---


The GRASS Development Team announces: GRASS GIS 5.0.0pre2 released 13 September 2001
====================================================================================

The Geographic Resources Analysis Support System, commonly referred to
as GRASS GIS, is a Geographic Information System (GIS) used for data
management, image processing, graphics production, spatial modelling,
and visualization of many types of data. It is free software released
unter GNU General Public [GPL](http://www.gnu.org) (GNU General Public
License).

Platforms supported by GRASS:
Linux, Sun Solaris, Sun Solaris/Intel, Silicon Graphics Irix, HP-UX,
DEC-Alpha, PowerPC, MacOS X, AIX, BSD, CRAY and other UNIX compliant
platforms (32/64bit), experimentally Windows NT/2000 running
Cygnus

Where to get the new release:
[http://grass.itc.it](http://grass.itc.it/download.html)
[http://www.baylor.edu/grass/](http://www.baylor.edu/grass/download.html)
and on the [mirrors](../grass.mirrors.html) (Australia (local only) |
Belgium | Croatia | Italy | Japan | Germany | Poland | Slovakia |
South Korea | Taiwan | Thailand)

The new source code is available, selected binaries will be build the
next days.

The general focus of this release is stability and reliability beside
improving the functionality. Proposed major changes in vector and
attribute management are scheduled for GRASS 5.1.

For details on GRASS software capabilities please refer to:
[http://grass.itc.it/general.html](../general.html)
The full [ChangeLog](../grass5/source/ChangeLog) is also
available.

What's new in GRASS 5.0.0pre2:

-   Details: please read [NEWS](../grass5/source/NEWS.html)
-   30 GIS modules fixed or updated/added
-   improved module documentation
-   Source Code improvements (excerpt only):
-   -   improved the new library "gmath": wrapper to support
        LAPACK/BLAS
        routines, centralized more numerical functions here
    -   NVIZ: ability to support 3D hardware accelerated video
        cards
    -   Xdriver improved
    -   portability improved

**GRASS Upgrade NOTE:** In case you upgrade from GRASSbeta1..beta11,
you have to convert the floating point raster data. Due to a copyright
violation we had to change the internal raster compression format.
Luckily the tool "r.lzw2z" exists which allows to automatically
convert a complete location. [Find more information
here!](announce_lzw_removal.html). If you face a raster map reading
problem in GRASS 5.0.0pre2, you have to update the floating point raster
maps with "[r.lzw2z](announce_lzw_removal.html)".
Again: this change is only needed if you upgrade from GRASSbeta1..beta11
to the current version. GRASS 4.x data can be read directly, consider to
run "r.support" and v.support".

We hope you enjoy the ongoing development.

In case you are interested to join the developers team, and/or share
algorithm or
ideas with the GRASS community, don't hesitate to contact us!
<http://grass.itc.it/grassdevel.html>
<http://www.baylor.edu/~grass/grassdevel.html>
 

On behalf of the GRASS Development Team

[Markus Neteler](mailto:grass-web(at)lists.osgeo.org)

------------------------------------------------------------------------

ITC-irst (SSI/MPA group), Via Sommarive, 18, 38050 Trento (Povo), Italy
Date: 19 Sept. 2001 (last changed)
