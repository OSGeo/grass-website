---
title: "Addons"
date: 2020-04-13T11:02:05+0600
description: "Download GRASS GIS addon extension modules"
weight: 
categories: [nl]
layout: "addons"
---

#### Quick links

[ [**Overview of addons**](#Overview) | [**Beginner users**](#Common-user) | [**Power users/developers**](#Power-user) ]

### <a name="Overview"></a>Overview of addons

There is a [growing list of GRASS GIS addons](/grass8/manuals/addons/) available which are not (yet) part of the core software package. They can be easily installed.

### <a name="Common-user"></a>Beginner users

We recommend to use the [wxGUI](https://grasswiki.osgeo.org/wiki/WxGUI) [Extension Manager](https://grasswiki.osgeo.org/wiki/WxGUI#Extension_Manager) to install Addons.
In the main menu: `Settings -> Addon extensions -> Install extensions from addons`

<img src="/images/extension_manager_gui.png" width="80%" alt="Extension Manager">

You can also use the command line, for example:

    g.extension extension=r.fuzzy.system


### <a name="Power-user"></a>Power users/developers

The Addons source code is also hosted in <a href="https://github.com/OSGeo/grass-addons" target="_blank"><i class="fab fa-github"></i> Github</a>:
<p class="command"><a href="https://github.com/OSGeo/grass-addons"> $ git clone https://github.com/OSGeo/grass-addons </a></p>

To manually compile individual addons see the [compile and install wiki page](https://grasswiki.osgeo.org/wiki/Compile_and_Install#Addons). 
