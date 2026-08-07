# GRASS Styling Documentation

## Bootstrap and Sass Integration

The GRASS theme leverages Bootstrap for responsive design and layout.
The Bootstrap styles are integrated via Dart Sass, allowing for
customization and optimization.

Hugo Integration Documentation:
[https://gohugo.io/functions/css/sass/#dart-sass](https://gohugo.io/functions/css/sass/#dart-sass)

## File Structure

- `assets/sass/main.scss`: The main Sass file that imports Bootstrap and other styles.
- `assets/sass/_styles.scss`: Contains custom styles specific to the GRASS theme.
- `assets/sass/_colors.scss`: Contains color variables used throughout the theme.
- `assets/sass/_fonts.scss`: Contains font variables used throughout the theme.
- `assets/sass/_variables.scss`: Contains additional Sass variables for customization.
- `assets/sass/_community_map.scss`: Contain additional Sass variable for community
  map
- `layouts/partials/head.html`: The HTML partial that includes the compiled CSS
  files in the site head.

## Dead-code passes: what "unused" does not mean

Several selector families have no matches in layouts or content but are
injected or consumed at runtime. Do not remove them on grep evidence alone:

- `.hljs*` (highlight.js applies these to fenced code blocks)
- `.ol-*` and `#community-map` (OpenLayers, community map page)
- `.ext`, `.int`, `.gis`, `.gallery`, `.gallery-toggler`, `.mt-95`,
  `.grass-os-download-button` (added or read by `assets/js/script.js`)
- Bootstrap component classes redefined here (`.card`, `.btn*`, `.badge`,
  `.pagination`, `.navbar*`, `.nav-tabs`, ...): Bootstrap generates the
  markup even when no template mentions the class
- Bootstrap variable overrides in `_variables.scss` (for example
  `$nav-tabs-link-active-color`): unused by our SCSS, consumed by Bootstrap
- the `--gs-*` custom properties from `_css-variables.scss`: a published
  token API consumed outside this repository (see that file's header)
- classes referenced only from raw HTML in `content/` (for example the
  Bootstrap 3 `.panel*` and `.glyphicon*` markup in the history pages)
