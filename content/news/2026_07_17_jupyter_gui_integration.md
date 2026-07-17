---
title: "Jupyter notebook integration in GUI"
date: 2026-07-17T12:00:00+02:00
layout: "news"
author: Linda Karlovska and the GRASS Dev Team
---

### Jupyter notebooks can now be launched from the GRASS GUI

The GRASS development branch now includes built-in Jupyter integration, 
planned for the upcoming GRASS 8.6 release (not released yet).
The idea was presented at the [GRASS Community Summit](https://grasswiki.osgeo.org/wiki/GRASS_Developer_Summit_Raleigh_2025) 
in Raleigh and, after a longer development cycle, was merged this week.
It provides one of the most direct ways to work with Jupyter notebooks in GRASS, 
which is especially useful for teaching and for presenting reproducible workflows.

<a href="/images/news/jupyter_startup_dialog.png">
  <img src="/images/news/jupyter_startup_dialog.png"
   alt="Jupyter Startup Dialog"
   title="Jupyter notebook configuration via Startup window"
   width="53%" style="float:right;padding-left:25px;padding-top:0px">
</a>

To launch Jupyter from the GUI, go to **File -> Jupyter Notebook** or 
click the Jupyter button in the top Tools toolbar of the GRASS window.
This opens the Startup dialog, where you can configure your notebook environment. 
Choose where to store your notebooks, and if you want ready-to-use examples, 
check the **Create Welcome Notebook** option.
When selected, GRASS creates a template notebook with simple analysis examples 
using the Tools API, which has been the recommended scripting approach since version 8.5.
Each notebook storage location runs on its own Jupyter server and GRASS manages it automatically,
so you do not need to worry about server instances.

Once configured, you can choose between two ways how to interact with the notebooks: Browser mode or Integrated mode.

In **Browser mode**, Jupyter opens in your default web browser while staying connected
to the GUI session. The GUI shows the server URL, PID, and notebook storage path, and provides
quick actions to reopen the browser or stop the server.

In **Integrated mode**, notebooks open as native GUI tabs. 
You can create new notebooks, import/export, undock panels, and stop the server directly
from the interface.

<a href="/images/news/jupyter_integration_mode.png">
  <img src="/images/news/jupyter_integration_mode.png"
   alt="Jupyter Integration Mode"
   title="Integrated Mode - Jupyter embedded directly in GRASS GUI"
   width="100%" style="float:right;padding-left:25px;padding-top:5px">
</a>

For full details, see the [Jupyter in GUI guide](https://github.com/OSGeo/grass/blob/main/gui/wxpython/docs/wxGUI.jupyter.md).

This feature extends existing ways of working with notebooks in GRASS. 
To try GRASS without local installation, you can use Binder:
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/OSGeo/grass/main?labpath=doc%2Fexamples%2Fnotebooks%2Fjupyter_tutorial.ipynb).
For local setup, see the [Get started](https://grass-tutorials.osgeo.org/content/tutorials/get_started/fast_track_grass_and_python.html) tutorial 
and the [Windows-specific tutorial](https://grass-tutorials.osgeo.org/content/tutorials/get_started/JupyterOnWindows_OSGeo4W_Tutorial.html). 
For cloud setup, check out the [Google Colab tutorial](https://grass-tutorials.osgeo.org/content/tutorials/get_started/grass_gis_in_google_colab.html).

Along with Jupyter integration, the upcoming 8.6 release will also bring more GUI improvements, 
including Data Catalog enhancements for spatio-temporal datasets and computational regions. 
Stay tuned!

*Linda Karlovska (Czech Technical University in Prague) and the GRASS Dev Team*





