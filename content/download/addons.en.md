---
title: "Addons"
date: 2025-05-21T11:02:05+0600
description: "Download GRASS addon extension modules"
weight: 
categories: [nl]
layout: "addons"
---

### Quick links

[ [Overview](#overview) | [Beginner users](#beginner-users) | [Power users](#power-users) ]

## Overview {#overview}

There is a [growing list of GRASS addons](/grass8/manuals/addons/) available which are not (yet) part of the core software package. They can be easily installed.

## Beginner users {#beginner-users}

We recommend to use the [wxGUI](https://grasswiki.osgeo.org/wiki/WxGUI) [Extension Manager](https://grasswiki.osgeo.org/wiki/WxGUI#Extension_Manager) to install Addons.
In the main menu:

`Settings -> Addon extensions -> Install extensions from addons`

{{< figure
  src="/images/extension_manager_gui.png"
  alt="GRASS Extension Manager"
  caption="GRASS Extension Manager"
  class="ma0 w-80"
>}}

You can also use the command line, for example:

    g.extension extension=r.fuzzy.system

## Power users {#power-users}

The Addons source code is also hosted in [GitHub](https://github.com/OSGeo/grass-addons):

    git clone https://github.com/OSGeo/grass-addons 

To manually compile individual addons see the [compile and install wiki page](https://grasswiki.osgeo.org/wiki/Compile_and_Install#Addons).
