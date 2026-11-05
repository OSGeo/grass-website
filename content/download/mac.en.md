---
title: "macOS"
description: "Download bundled GRASS binaries for your Mac"
_build:
  render: never
  list: never
---

## Download GRASS for macOS

{{< grass-download os="macOS" url="https://cmbarton.github.io/grass-mac/download/" >}}

Find GRASS binary installers for current, legacy, and preview releases on
[GRASS for the Mac](https://cmbarton.github.io/grass-mac/download/).

## Installation

---

{{< installers os="mac" >}}

See this brief
[introduction](https://grasswiki.osgeo.org/wiki/Compiling_on_macOS_using_MacPorts)
on using MacPorts. GRASS is also available for macOS (Intel and Apple Silicon)
from conda-forge — see the **Conda** tab.

## FAQ

---

### GRASS quits on launch with a `StopIteration` error

If the Terminal window that opens with GRASS ends with a traceback like

```text
File ".../grass/app/data.py", line 47, in get_possible_database_path
    for subdir in next(os.walk(candidate))[1]:
StopIteration
```

macOS is blocking access to your Documents folder. At startup GRASS looks
for an existing `grassdata` folder in your home and Documents folders, and
it cannot read Documents until you allow it.

To grant access, open **System Settings > Privacy & Security > Files and
Folders**, select **Terminal**, and turn on **Documents Folder**. Then
launch GRASS again. If Terminal is not listed, grant it **Full Disk
Access** in the same Privacy & Security pane instead.

As a workaround, you can also create the default database folder in your
home directory so GRASS does not need to look in Documents:

```bash
mkdir ~/grassdata
```

A fix is tracked in [OSGeo/grass#8027](https://github.com/OSGeo/grass/issues/8027).

## Contribute

Please consider a financial contribution to the GRASS project to help us improve and maintain the software.

{{< support-button text="Support Us" >}}
