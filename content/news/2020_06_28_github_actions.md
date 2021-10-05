---
title: "New GRASS GIS source code analysis with GitHub Actions"
date: 2020-06-28T12:12:12+01:00
layout: "news"
author: GRASS Development Team
---

### New GRASS GIS source code analysis with GitHub Actions

After the successful migration from SVN to git earlier this year ([here](/news/2019_05_17_svn_to_github_migration_started/) and [here](/news/2020_01_23_grass_gis_issues_now_on_github/)), a new feature has been implemented and enabled: [GRASS GIS source code analysis with GitHub Actions](https://github.com/OSGeo/grass/actions) to build (compile), test, and perform Python static code analysis, in order to improve the overall quality, maintainability and standard compliance of our code.

The C and C++ source code is checked with GCC C/C++ checks including GNU C11 and C++11. For Python code, an initial static code analysis/code quality check/linting using Flake8 has been implemented. The workflow builds and tests GRASS GIS on Ubuntu 16.04, 18.04, Centos 7 as well as OSGeo4W. Success, errors and warnings are reported accordingly in the GitHub Actions interface for each pull request.

This code analysis has been set up as a continuous integration (CI) workflow, i.e. after each source code change - when submitting a "pull request" - it is triggered automatically.

Besides core GRASS GIS ([master](https://github.com/OSGeo/grass/) and [release_branch_7_8](https://github.com/OSGeo/grass/tree/releasebranch_7_8)) also the [addons repository](https://github.com/OSGeo/grass-addons/actions) has a minimalistic set of source code analysis enabled.

We seek contributors for extending our tests! Please don't hesitate to submit comments or code editions [here](https://github.com/OSGeo/grass/tree/master/.github/workflows). 
