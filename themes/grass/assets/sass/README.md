# GRASS Sytyling Documentation

## Bootstrap ans Sass Integration

The GRASS theme leverages Bootstrap for responsive design and layout. The Bootstrap styles are integrated via Dart Sass, allowing for customization and optimization.

Hugo Integration Documentation: [https://gohugo.io/functions/css/sass/#dart-sass](https://gohugo.io/functions/css/sass/#dart-sass)

## File Structure

- `assets/sass/main.scss`: The main Sass file that imports Bootstrap and other styles.
- `assets/sass/_styles.scss`: Contains custom styles specific to the GRASS theme.
- `assets/sass/_colors.scss`: Contains color variables used throughout the theme.
- `assets/sass/_fonts.scss`: Contains font variables used throughout the theme.
- `assets/sass/_variables.scss`: Contains additional Sass variables for customization.
- `layouts/partials/head.html`: The HTML partial that includes the compiled CSS files in the site head.
