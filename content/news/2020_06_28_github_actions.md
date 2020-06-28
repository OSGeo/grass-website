---
title: "New GRASS GIS source code analysis with GitHub Actions"
date: 2020-06-28T12:12:12+01:00
layout: "news"
author: GRASS Development Team
---

### New GRASS GIS source code analysis with GitHub Actions

After the successful migration from SVN to git earlier this year, a new feature has been implemented and enabled: [GRASS GIS source code analysis with GitHub Actions](https://github.com/OSGeo/grass/actions) to build (compile), test, and perform Python static code analysis.

The C and C++ source code is checked with GCC C/C++ standards check as well as additionally with gnu99 and c++11 tests. Python code is tested by a static code analysis/code quality check/linting using Flake8. The workflow builds and tests GRASS GIS on Ubuntu 16.04, 18.04 and Centos 7. An additional OSGeo4W workflow for GitHub Actions is currently in preparation. Success, errors and warnings are reported accordingly in the GitHub Actions interface for each pull request.

This code analysis has been set up as a continuous integration (CI) workflow, i.e. after each source code change - when submitting a "pull request" - it is triggered automatically.

Besides core GRASS GIS ([master](https://github.com/OSGeo/grass/) and [release_branch_7_8](https://github.com/OSGeo/grass/tree/releasebranch_7_8)) also the [addons repository](https://github.com/OSGeo/grass-addons/actions) has a minimalistic set of source code analysis enabled.
