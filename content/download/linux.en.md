---
title: "Linux"
date: 2022-08-15T11:02:05+02:00
description: "Download GRASS GIS packages for your favorite Linux distribution"
weight: 1
layout: "os"
---

#### Quick links

[ [**GRASS GIS {{< grassVersion version="current" type="short">}} (current)**](#GRASS-GIS-current) | [**GRASS {{< grassVersion version="legacy" type="short">}} (legacy)**](#GRASS-GIS-old) | [**GRASS {{< grassVersion version="preview" type="short">}} (preview)**](#GRASS-GIS-devel) ]

The packaging status does not work
<!-- <i class="fa fa-arrow-right"></i> Install <tt>grass</tt> package on your Linux distribution. Have a look at 
{{< donateDialog isToggle=true isMarkdown=true >}}[Repology](https://repology.org/project/grass/versions){{< /donateDialog  >}} for an extended
list of GRASS GIS packages or directly check the 
<a href="https://repology.org/badge/vertical-allrepos/grass.svg?exclude_unsupported=1&exclude_sources=modules,site&minversion={{< grassVersion version="current" >}}&columns=3" class="btn btn-primary">Packaging Status</a>
to quickly know which GRASS GIS version is currently available for your distro. -->

*  {{< donateDialog isToggle=true isMarkdown=true >}}[Arch Linux](https://aur.archlinux.org/packages/grass/){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[Debian](https://packages.debian.org/grass){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[EPEL](https://src.fedoraproject.org/rpms/grass){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[Fedora](https://src.fedoraproject.org/rpms/grass){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[Mageia](https://madb.mageia.org/package/show/name/grass/){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[openSUSE](https://build.opensuse.org/package/show/Application:Geo/grass){{< /donateDialog  >}}
*  {{< donateDialog isToggle=true isMarkdown=true >}}[Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable){{< /donateDialog  >}} (ubuntugis-unstable)

<hr>

### <span id="GRASS-GIS-current"> GRASS GIS {{< grassVersion version="current" >}} (current)</span>

<div class="alert rounded-0 alert-success">
<i class="fa fa-info-circle"></i> <u>Current stable release</u>, see the <a href="https://github.com/OSGeo/grass/releases/tag/{{< currentVersion.inline  >}}{{- .Site.Data.grass.current_version -}}{{</currentVersion.inline >}}">release announcement</a> for more information.</div>

* {{< donateDialog isToggle=true isMarkdown=true >}}[Arch Linux](https://aur.archlinux.org/packages/grass/){{< /donateDialog  >}}
* {{< donateDialog isToggle=true isMarkdown=true >}}[Debian](https://packages.debian.org/grass){{< /donateDialog  >}}
* {{< donateDialog isToggle=true >}}<a href="/grass{{< currentVersionNoDots.inline  >}}{{- .Site.Data.grass.current_version_nodots -}}{{</currentVersionNoDots.inline >}}/binary/linux/snapshot" target="blank">Generic 64bit</a>{{< /donateDialog  >}} (weekly binary snapshot)
* {{< donateDialog isToggle=true isMarkdown=true >}}[Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass){{< /donateDialog  >}}
* {{< donateDialog isToggle=true isMarkdown=true >}}[EPEL8](https://src.fedoraproject.org/rpms/grass){{< /donateDialog  >}} (RHEL8/Centos8)
* {{< donateDialog isToggle=true isMarkdown=true >}}[Fedora](https://src.fedoraproject.org/rpms/grass){{< /donateDialog  >}} and {{< donateDialog isToggle=true isMarkdown=true >}}[Fedora-COPR](https://copr.fedorainfracloud.org/coprs/neteler/grass{{< currentVersionNoDots.inline  />}}/){{< /donateDialog  >}}
* {{< donateDialog isToggle=true isMarkdown=true >}}[openSUSE](https://build.opensuse.org/package/show/Application:Geo/grass){{< /donateDialog  >}}
* {{< donateDialog isToggle=true isMarkdown=true >}}[Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable){{< /donateDialog  >}} (ubuntugis-unstable)

<hr>

### <span id="GRASS-GIS-old"> GRASS GIS {{< grassVersion version="legacy" >}} (legacy)</span>

<div class="alert rounded-0 alert-warning">
<i class="fa fa-info-circle"></i> <u>Old stable release</u>, see <a href="https://trac.osgeo.org/grass/wiki/Grass7/NewFeatures{{< legacyVersionNoDots.inline  >}}{{- .Site.Data.grass.legacy_version_nodots -}}{{</legacyVersionNoDots.inline >}}">GRASS GIS {{< grassVersion version="legacy" type="short">}} new features</a> and  <a href="https://github.com/OSGeo/grass/releases/tag/{{< legacyVersion.inline  >}}{{- .Site.Data.grass.legacy_version -}}{{</legacyVersion.inline >}}">GRASS GIS {{< grassVersion version="legacy" >}} announcement</a> for more information.
</div>

* {{< donateDialog isToggle=true  >}} <a href="/grass{{< legacyVersionNoDots.inline  >}}{{- .Site.Data.grass.legacy_version_nodots -}}{{</legacyVersionNoDots.inline >}}/binary/linux/snapshot" target="blank">Generic 64bit</a>{{< /donateDialog  >}}  (weekly binary snapshot)
* {{< donateDialog isToggle=true isMarkdown=true >}}[Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass) {{< /donateDialog  >}} 
* {{< donateDialog isToggle=true isMarkdown=true >}}[EPEL8](https://src.fedoraproject.org/rpms/grass) {{< /donateDialog  >}}  (RHEL8/Centos8)
* {{< donateDialog isToggle=true isMarkdown=true >}}[Fedora](https://src.fedoraproject.org/rpms/grass) {{< /donateDialog  >}} 
* {{< donateDialog isToggle=true isMarkdown=true >}}[openSUSE](https://build.opensuse.org/package/show/Application:Geo/grass)  {{< /donateDialog  >}} 
* {{< donateDialog isToggle=true isMarkdown=true >}}[Ubuntu](https://launchpad.net/~ubuntugis/+archive/ubuntu/ubuntugis-unstable) {{< /donateDialog  >}}  (ubuntugis-unstable)

<hr>

### <span id="GRASS-GIS-devel"> GRASS GIS {{< grassVersion version="preview" >}} (preview)</span>

<div class="alert rounded-0 alert-info">
<i class="fa fa-info-circle"></i> Active <u>development</u>, <u>experimental</u> <b>GRASS GIS</b> version.
</div>

*  {{< donateDialog isToggle=true  >}}
  <a href="/grass{{< previewVersionNoDots.inline  >}}{{- .Site.Data.grass.preview_version_nodots -}}{{</previewVersionNoDots.inline >}}/binary/linux/snapshot/" target="blank">Generic 64bit </a>{{< /donateDialog  >}}  (weekly binary snapshot)
*  {{< donateDialog isToggle=true isMarkdown=true >}}  [Gentoo](https://packages.gentoo.org/packages/sci-geosciences/grass)
 {{< /donateDialog  >}} 

<!-- *  [Ubuntu ](https://launchpad.net/~grass/+archive/ubuntu/grass-devel)  (ubuntugis-unstable) -->

<!-- <pre><code class="shell">sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable -->
<!-- sudo add-apt-repository ppa:grass/grass-devel -->
<!-- sudo apt-get update -->
<!-- sudo apt-get install grass-daily</code></pre> -->


 {{< donateDialog >}}  
 {{< /donateDialog >}}  
