---
title: "Addons"
date: 2026-07-21
description: "Download GRASS addon extension modules"
weight: 
categories: [nl]
layout: "addons"
---

There is a [growing list of GRASS addons](/grass-devel/manuals/addons/)
available which are not (yet) part of the core software package.
They can be easily installed.

## Install with the GRASS GUI

We recommend to use the [wxGUI](https://grasswiki.osgeo.org/wiki/WxGUI)
[Extension Manager](https://grasswiki.osgeo.org/wiki/WxGUI#Extension_Manager)
to install Addons.
In the main menu:

`Settings -> Addon extensions -> Install extensions from addons`

{{< figure
  src="/images/extension_manager_gui.png"
  alt="GRASS Extension Manager"
  caption="GRASS Extension Manager"
  class="ma0 w-60"
>}}

## Install from the command line

    g.extension extension=r.fuzzy.system

## Install with Python

Addons can also be installed from the Python using either the `grass.script`
or `grass.tools` modules. For example, to install the `r.fuzzy.system`
addon with `grass.script`:

    import grass.script as gs
    gs.extension(extension='r.fuzzy.system')

or with `grass.tools`:

    from grass.tools import Tools
    tools = Tools()
    tools.g_extension(extension='r.fuzzy.system')

## Install from source

The Addons source code is also hosted in [GitHub](https://github.com/OSGeo/grass-addons):

    git clone https://github.com/OSGeo/grass-addons 

To manually compile individual addons see the [compile and install wiki page](https://grasswiki.osgeo.org/wiki/Compile_and_Install#Addons).
