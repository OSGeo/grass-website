---
title: "Installing GRASS GIS extensions currently failing"
date: 2021-08-01T00:00:00+00:00
layout: "news"
author: GRASS Development Team
---

Due to a [re-structuring](https://github.com/OSGeo/grass-addons/issues/528) 
of the [addon repository](https://github.com/OSGeo/grass-addons),
the installation of addons is currently not working.
All the necessary changes in 
[g.extension](https://grass.osgeo.org/grass-stable/manuals/g.extension.html) 
have been implemented, merged and back-ported.
The functionality will be back to normal very soon with 
the upcoming GRASS 7.8.6 and 8.0.0 releases.

In the meantime, you can 
[compile and install](https://grasswiki.osgeo.org/wiki/Compile_and_Install) 
from source, either `releasebranch_7_8` or `master` where 
g.extension changes have been applied or, for the case of 
python addons, just download and run them as regular python
scripts.

Thanks for your patience! 