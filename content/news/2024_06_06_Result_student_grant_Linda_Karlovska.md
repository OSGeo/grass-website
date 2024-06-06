---
title: "Results of the GRASS GIS student grant"
date: 2024-06-06T13:12:52+02:00
layout: "news"
author: Linda Karlovska and the GRASS Development Team
---

## Linda´s work in her own words
### Easy command history navigation through the History browser panel

During my master's studies, I began contributing to the enhancement of the GRASS GIS user interface. 
My main goal was to increase user-friendliness, making GRASS accessible not only to experienced
users with scripting knowledge but also to GIS beginners. 
Over the years, I have worked on several projects, including 
[*"Creation of a new GRASS GIS startup mechanism"*](https://trac.osgeo.org/grass/wiki/GSoC/2020/StartupWindow), 
[*"First steps towards a new GRASS GIS Single-Window GUI "*](https://trac.osgeo.org/grass/wiki/GSoC/2021/SingleWindowLayout), 
[*"Redesigning a map display status bar combo box into a new settings dialog "*](https://trac.osgeo.org/grass/wiki/wxGUIDevelopment/RedesigningStatusbar), 
and [*"Improving Single-Window GUI user experience"*](https://trac.osgeo.org/grass/wiki/wxGUIDevelopment/ImprovingSingleWindowUX).

<a href="/images/gallery/gui/grass8_history_panel.png">

  <img src="/images/gallery/gui/grass8_history_panel.png"
   alt="Enhanced command history panel"
   title="Enhanced command history panel"
   width="45%" style="float:right;padding-left:20px;padding-top:20px">
   
</a>

In the summer of 2023, during the community sprint in Prague, we recognized the need for a brand-new feature to our graphical interface - the History panel, which tracks the history of executed commands. This idea instantly excited me, and by the end of the sprint, I had already developed a basic prototype that displayed a command history tree and by double-clicking a command, users could open a module window with pre-filled values, making it easy to re-edit and re-execute previously run commands.

Fast forward to the end of 2024, as a PhD student, I applied for a GRASS Mini project to make command history navigation easier through the History pane. The project proposal was well received, and I began the implementation. The main task I set was to switch from storing command history in a plain-text format to using a more flexible JSON format. This change allowed to save additional important details, such as execution time, duration, status (successful, failed, running, aborted), and region settings at the time of command execution.

Once the data was reliably stored in JSON format, the next step was to display it effectively in the GUI. To achieve this, the History pane was divided into two sections: a tree view of the commands at the top and an information panel at the bottom. During the project, the tree was enhanced by sorting commands under time intervals and by adding icons that visualize their status.

Besides showing details of the selected command, the information panel includes one interesting feature - users can update their current computational region settings to match those used during the command execution if they differ.

Although there is still room for improvement,
I believe that the new History pane makes the command management quicker and easier.
Detailed information about the project can be found on the project
[wiki](https://trac.osgeo.org/grass/wiki/wxGUIDevelopment/EasyCommandHistoryNavigation).



