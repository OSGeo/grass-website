---
title: "GRASS GIS 5.0 LZW compression deprecated"
date: 2001-01-18T11:36:11+01:00
layout: "news"
author: Admin
---


### Important change information for GRASS 5.0 beta 11 (and later) users

------------------------------------------------------------------------

This will affect all GRASS 5 versions later than beta10 (CVS was
updated Jan 18 2001)

Because of the **UNISYS patent (http://www.unisys.com/unisys/lzw/) on
the LZW compression algorithm**, on January 18 2001, GRASS 5 library
code no longer uses this method to compress floating point rasters and
G3D files. Unfortunately, this creates an incompatible change for
persons using earlier versions of GRASS 5.0 (GRASS 5 beta1 to beta10
users).

**Note:** This LZW removal does **NOT** affect

-   GRASS 5 CELL type raster maps or
-   Persons just now upgrading from GRASS 4.x. (GRASS 4.x was not using
    LZW) to GRASS 5beta11 or later.

------------------------------------------------------------------------

How to migrate your GRASS 5 floating point raster maps:

Generally the conversion is a two-step procedure (see below for one
step):

1.  **Before** installing newer GRASS libraries and binaries (beta11
    and later) you *must* uncompress all floating point raster maps.
    Again: In order to make your data readable you *must* uncompress all
    floating point rasters **before** installing newer GRASS libraries
    and binaries. The command "r.compress -u" will do the job (see
    below for a script to assist).
2.  **After** installing the new binaries you may recompress your
    rasters with "r.compress" which will use the DEFLATE method
    available in [libz (zlib)](http://www.info-zip.org/pub/infozip/zlib/) (this
    compression library is usually installed by default on your system,
    otherwise install it).

How to migrate your GRASS 5 G3D raster voxel maps:

-   Unfortunately, any LZW compressed G3D files must be dumped with
    r3.out.ascii, and then reimported with r3.in.ascii.

The GRASS 5.0 Development Team apologizes for this inconvenience.

------------------------------------------------------------------------

We provide two ways to convert your data:

**1. Two-step conversion**: Requires old and new GRASS.

-   [fp_uncompress.sh](../demos/fp_uncompress.sh): uncompress all
    raster maps. Save and run within your **old** GRASS 5:
    `  sh fp_uncompress.sh`
    This scripts will decompress all maps within a location.

    Run this within **all** locations you have!

-   Finished with all GRASS 5 locations you have? O.k., now upgrade to
    the non-LZW GRASS 5 (beta11 or later as well as GRASS CVS
    version).
-   [fp_recompress.sh](../demos/fp_recompress.sh): recompress all
    raster maps with DEFLATE. Save and run within new GRASS 5:
    `sh fp_recompress.sh`
    This scripts will compress back all maps within a location in
    zlib/flate compression.

That's it. Welcome to the patent-free GRASS 5.

**2. One-step conversion**: Does not require old GRASS, simply run in
new GRASS 5beta11 (or later). So you don't need the old GRASS 5:

   r.lzw2z changes the compression on-the-fly **within** the new GRASS
5.0beta11 (or later):


-   The [r.lzw2z sources](http://pweb.jps.net/~egm2/r.lzw2z/r.lzw2z.tar.gz).
-   Here is the [documentation of
    r.lzw2z](http://pweb.jps.net/~egm2/r.lzw2z/r.lzw2z.html).
-   [precompiled Linux binaries](r.lzw2z_linuxbin.tar.gz) (run within
    GRASS 5beta11 (or later version) to change your existing GRASS 5
    locations)
-   [precompiled SGI/Irix binaries](r.lzw2z_irixbin.tar.gz) (run within
    GRASS 5beta11 (or later version) to change your existing GRASS 5
    locations)
-   [precompiled SUN/Solaris binaries](r.lzw2z_sun_solarisbin.tar.gz)
    (run within GRASS 5beta11 (or later version) to change your existing
    GRASS 5 locations)

------------------------------------------------------------------------

Proceed to Download latest GRASS 5.0.x


So: Did you read above? Did you download r.lzw2z or the fp_*.sh
scripts if you are already using GRASS 5? If so, please proceed:

-   [GRASS 5.0.x source code](../grass5/source/)
-   [GRASS 5.0.x precompiled binaries](../grass5/binary)

------------------------------------------------------------------------

Jan 18 2001, &copy; GRASS Development Team, last update: June 12, 2001
