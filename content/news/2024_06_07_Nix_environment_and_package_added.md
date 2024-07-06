---
title: "Nix development environment and package"
date: 2024-07-06T12:00:00+02:00
layout: "news"
author: Ivan Mincik and the GRASS Dev Team
---

### You can now develop and run GRASS with Nix

A new option for creating a GRASS development environment and a unique way
of running GRASS directly from the Git source code was implemented using the 
[Nix package manager](https://nixos.org/). This idea was presented by
[Ivan Mincik](https://github.com/imincik) during the
[GRASS GIS Community Meeting](https://grasswiki.osgeo.org/wiki/GRASS_Community_Meeting_Prague_2024)
in Prague.

The Nix development environment provides a stable and reproducible environment
for all developers and can significantly simplify the onboarding process of new
contributors.

To start hacking on GRASS, run `nix develop` command in source code root
directory to create a temporary shell environment containing all build
dependencies with instructions how to build and test the code.

```
$ nix develop

Welcome to a GRASS development environment !
Build GRASS using following commands:

 1.  ./configure --prefix=$(pwd)/app
 2.  make -j16
 3.  make install

Run tests:

 1.  export PYTHONPATH=$(app/bin/grass --config python_path):$PYTHONPATH
 2.  export LD_LIBRARY_PATH=$(app/bin/grass --config path)/lib:$LD_LIBRARY_PATH
 3.  pytest

Note: run 'nix flake update' from time to time to update dependencies.

Run 'dev-help' to see this message again. 
```  

On the other hand, possibility to run GRASS directly from a Git
source code improves feedback loop during development and will allow to install
GRASS on any Linux distribution immediately when new version is out.

To run latest development version of GRASS directly from a Git source code, run
`nix run github:OSGeo/grass#grass` command which will compile (if needed) and
run GRASS in one step.

<a href="/images/news/nix-run-grass.png">
  <img src="/images/news/nix-run-grass.png" alt="nix run grass" title="Nix running GRASS"
   width="70%" style="float:center;padding-left:10px;padding-top:20px">
</a>

To install it, run `nix profile install github:OSGeo/grass#grass`.

Check out [How to use Nix](https://github.com/OSGeo/grass/blob/main/NIX.md) for more instructions.

*Ivan Mincik and Veronica Andreo*
