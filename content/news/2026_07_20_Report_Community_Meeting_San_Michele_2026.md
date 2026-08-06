---
title: "GRASS Community Meeting 2026 Report"
date: 2026-07-20T18:00:00+02:00
layout: "news"
author: Veronica Andreo, Vaclav Petras, Anna Petrasova and the GRASS Dev Team
---

The **GRASS Community Meeting 2026** was held at [Fondazione Edmund Mach](https://fmach.it/) (FEM) in San Michele all'Adige, Trentino, Italy, from July 11 to 19. The event brought together users, supporters, contributors, power users and developers from around the world for a week of focused, in-person collaboration.

<a href="/images/news/grass_community_meeting_20260715.webp">
  <img src="/images/news/grass_community_meeting_20260715.webp"
   alt="GRASS Community Meeting in San Michele all'Adige, 2026"
   title="GRASS Community Meeting in San Michele all'Adige, 2026"
   width="65%" style="float:right;padding-left:15px;padding-top:15px">
</a>

As is tradition for these meetings, a large part of the week went into maintenance that simply doesn't happen at the same pace when the team is scattered across time zones: reviewing, testing, and merging or closing pull requests and issues, following up on stale discussions, and cleaning up long-standing rough edges across the GRASS repositories. On top of that, the group tracked down and fixed several bugs, merged new addons, and pushed forward a number of core and infrastructure improvements, including a technology bump for the website. Last but not least, **5 participants made their first contribution** to GRASS!

Highlights from the week include:

* **Heavy maintenance push** — pull requests and issues were reviewed, tested, and merged or closed across the grass, grass-addons, grass-website, and grass-tutorials repositories, including a batch of CodeQL-flagged fixes and a broader migration of module tests to pytest.
* **5 new contributors** joined and got up to speed quickly — including a very promising almost-15-year-old newcomer! Two of them are close to landing a full hyperspectral data processing chain in the *i.hyper* addon (EnMAP and EMIT data import, atmospheric correction, spectral resampling), while the others added test coverage to addons and helped get GRASS addons building on Windows in CI.

<a href="/images/news/grass_community_meeting_20260717.webp">
  <img src="/images/news/grass_community_meeting_20260717.webp"
   alt="Authors of i.hyper.* addons after a presentation during the GRASS Community Meeting in San Michele all'Adige, 2026"
   title="Authors of i.hyper.* addons after a presentation during the GRASS Community Meeting in San Michele all'Adige, 2026"
   width="40%" style="float:left;padding-right:25px;padding-top:15px">
</a>

* **Bugs found and fixed**, including `v.proj` reprojection issues, an orphaned wxGUI drag-image bug on macOS, and a temporal framework metadata bug caught while reviewing this year's GSoC temporal framework project.
* **New addons**, with `t.rast.vi`, `r.surf.volcano`, `r.barplot`, `t.rast.aggregate.seasons`, and `t.rast.climatologies` merged during the week and `r.soils.rosetta` right behind it in review, plus new pytest-based test coverage merged for several existing addons (`r.clip`, `r.centroids`, `v.median`).
* **Tutorials refreshed** — grass-tutorials grew with a new visibility analysis (`r.viewshed`) tutorial, and a getting-started guide for conda, while existing tutorial categories were reduced and consolidated for easier browsing.
* **Website technology bump** — the frontend was migrated from Bootstrap 3 to Bootstrap 5 with Sass-Dart, the CI build and deployment pipeline was split into dedicated build/deploy jobs and now publishes from a CI-built release artifact, dependencies were pinned for supply-chain security, and the sitemap was fixed for better SEO. A new interactive **community map**, showing GRASS users and providers around the world, landed this week.
* **Core GRASS progress** — continued work on the CMake build system transition, a new Windows installer built with GitHub Actions (with the first successful CI compilation of addons on Windows!), markdown-based documentation and man page conversion, reduced Sphinx warnings, and SBOM (CycloneDX) and SPDX license-header work in the pipeline for better supply-chain transparency.
* **Jupyter notebooks in the GUI** — after a long development cycle that started as an idea at the 2025 Dev Summit, the [GUI-Jupyter notebook integration](https://github.com/OSGeo/grass/blob/main/gui/wxpython/docs/wxGUI.jupyter.md) PR was merged this week, and will be shipped with the upcoming 8.6 release.
* Preparation for the upcoming **PSC elections**, with voter lists compiled from contribution history across repositories.  

## By the numbers

Pull requests and issues opened and closed across the four main GRASS repositories between 2026-07-11 and 2026-07-19:

| Repository | PRs opened | PRs closed | Issues opened | Issues closed |
| --- | --- | --- | --- | --- |
| [OSGeo/grass](https://github.com/OSGeo/grass) | 85 | 80 | 11 | 20 |
| [OSGeo/grass-addons](https://github.com/OSGeo/grass-addons) | 18 | 23 | 2 | 0 |
| [OSGeo/grass-website](https://github.com/OSGeo/grass-website) | 34 | 36 | 4 | 5 |
| [OSGeo/grass-tutorials](https://github.com/OSGeo/grass-tutorials) | 2 | 5 | 1 | 0 |
| **Total** | **139** | **144** | **18** | **25** |

For more details on the meeting, sponsorship, and participants' individual reports, please visit the GRASS Community Meeting San Michele 2026 [wiki](https://grasswiki.osgeo.org/wiki/Talk:GRASS_Community_Meeting_San_Michele_2026) page, and follow us on [LinkedIn](https://www.linkedin.com/company/grass-gis), or join the conversation on OSGeo Discourse ([users](https://discourse.osgeo.org/c/grass/user/70), [developers](https://discourse.osgeo.org/c/grass/developer/61)) to stay updated on future news and events.

<a href="/images/news/grass_community_meeting_20260716.webp">
  <img src="/images/news/grass_community_meeting_20260716.webp"
   alt="GRASS Community Meeting in San Michele all'Adige, 2026"
   title="GRASS Community Meeting in San Michele all'Adige, 2026"
   width="45%" style="float:right;padding-left:15px;padding-top:15px">
</a>

None of this would have been possible without the generous support of the **Open Source Geospatial Foundation** (OSGeo), **Bohannan Huston, Inc.**, and **FOSSGIS e.V.**, whose funding helped bring the group together in person. We're also grateful to the companies and institutions that supported the meeting by donating their employees' time to travel and work with us for the week. A huge thank you to [Fondazione Edmund Mach](https://fmach.it/) for hosting and welcoming us on their beautiful campus, and especially to our local organizer **Luca Delucchi**, whose work behind the scenes made the whole week run smoothly.

Finally, thank you to everyone who traveled to San Michele all'Adige, and to those who joined remotely, for another week of great collaboration. If you would like to see more developments like this in the future, consider sponsoring GRASS through [NumFOCUS](https://numfocus.org/donate-to-grass); for more options, such as invoicing or corporate sponsorship, see the [Sponsoring page](/contribute/sponsoring/).

**See you next year!**

*Veronica Andreo, Vaclav Petras, Anna Petrasova and the GRASS Dev Team*
