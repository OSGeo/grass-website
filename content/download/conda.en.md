---
title: "conda"
date: 2026-02-20T10:00:00+00:00
description: "Install GRASS with conda from conda-forge"
weight: 5
layout: "conda"
---

<i class="fa fa-arrow-right"></i> The `grass` package is available on
[conda-forge](https://anaconda.org/conda-forge/grass)
for **Linux** (64-bit) and **macOS** (Intel and Apple Silicon).
See the
[conda-forge grass feedstock](https://github.com/conda-forge/grass-feedstock)
for packaging details.

### Install with conda

Create a new environment and install GRASS:

```bash
conda create -n grass -c conda-forge grass
conda activate grass
```

Or install into an existing environment:

```bash
conda install -c conda-forge grass
```

### Install with mamba

For faster dependency resolution, use [mamba](https://mamba.readthedocs.io/):

```bash
mamba create -n grass -c conda-forge grass
mamba activate grass
```

### Environment file

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

### Usage

#### Python

To use GRASS in Python scripts, add the GRASS Python package path
to `sys.path`:

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
