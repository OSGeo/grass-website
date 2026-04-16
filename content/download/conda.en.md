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

To update an existing environment after editing `environment.yml`:

```bash
conda env update --file environment.yml
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
