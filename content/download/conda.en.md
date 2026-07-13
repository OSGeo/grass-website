---
title: "conda"
date: 2026-02-20T10:00:00+00:00
description: "Install GRASS with conda from conda-forge"
weight: 5
layout: "conda"
---

<i class="fa fa-arrow-right"></i> The `grass` package is available on
[conda-forge](https://anaconda.org/conda-forge/grass)
for **Windows** (64-bit), **Linux** (64-bit), and
**macOS** (Intel and Apple Silicon).
See the
[conda-forge grass feedstock](https://github.com/conda-forge/grass-feedstock)
for packaging details.

### Install with conda

Add into an existing environment:

```bash
conda install -c conda-forge grass
```

If you don't have an environment yet, create a new environment and install in one step:

```bash
conda create -n grass -c conda-forge grass
conda activate grass
```

### Install with mamba

The same works with [mamba](https://mamba.readthedocs.io/) for faster dependency resolution:

```bash
mamba install -c conda-forge grass
```

### Environment file with conda

To create a reproducible environment, save the following as `environment.yml`:

```yaml
name: grass
channels:
  - conda-forge
dependencies:
  - grass
```

Then create the environment with:

```bash
conda env create -f environment.yml
conda activate grass
```

### Install with pixi

For faster dependency across multiple platforms, support for `pyproject.toml` and `environment.yml`, and global installation of tools use [pixi](https://pixi.prefix.dev/):

```bash
# Installing grass as part of a workspace
pixi init name-of-my-project-using-grass
cd name-of-my-project-using-grass
pixi add grass
# Activates a shell where grass is accessible
pixi shell
```

If you want to install GRASS as a globally available tool across your system without having to activate an environment:

```bash
pixi global install grass
```

### Environment file with pixi

By default, dependencies for the workspace are stored in the `pixi.toml` file. The `pixi.lock` file is the machine-readable file that lists all of the dependencies for your workspace.

If you're using pixi and want to share your environment with conda or mamba users:

```bash
pixi workspace export conda-environment environment.yml
```

### Usage

#### Python

To use GRASS from a Python script in an active conda environment,
add the GRASS Python package path to `sys.path`:

```python
import subprocess
import sys

result = subprocess.run(["grass", "--config", "python_path"],
                        check=True, text=True, capture_output=True)
sys.path.append(result.stdout.strip())

import grass.script as gs
```

#### Command line

After activating the conda environment, start GRASS from the command line:

```bash
grass
```
