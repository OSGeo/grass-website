---
title: "R package rgrass7 to be retired in October, 2023"
date: 2023-06-05T12:23:41+02:00
layout: "news"
author: Roger Bivand and the GRASS Development Team
---

### Users are encouraged to migrate to the succesor `rgrass` package

The R package `rgrass7` interfacing R and GRASS GIS **will be removed**
from active availability on the Comprehensive R Archive Network (CRAN)
during **October 2023**; it will be archived on CRAN. 
This is because the **successor `rgrass` package** has been available 
since mid-2022, and because the `rgdal` package on which `rgrass7` 
depends for exchanging files between R and GRASS GIS will also be 
archived in October 2023, as described in R-spatial evolution 
[project](https://www.r-consortium.org/all-projects/awarded-projects/2021-group-2#Preparing%20CRAN%20for%20the%20Retirement%20of%20rgdal,%20rgeos%20and%20maptools) 
[reports](https://r-spatial.org/r/2023/05/15/evolution4.html) 
(latest providing links to earlier). The main change between `rgrass7`
and `rgrass` is that `terra` is used in place of `rgdal` for file 
transfer between R and GRASS. `rgrass7` functions have been marked as 
deprecated for almost a year now, and maintainers of packages using 
`rgrass7` have been notified. Please also refer to 
https://rsbivand.github.io/foss4g_2022/modernizing_220822.html 
for more details.


<a href="/images/news/grass8_and_rstudio_with_rgrass.png">
  <img src="/images/news/grass8_and_rstudio_with_rgrass.png"
   alt="GRASS 8 and RStudio with rgrass"
   title="GRASS 8 and RStudio with rgrass"
   width="70%">
</a>


*Roger Bivand and the GRASS Development Team, June 2023*