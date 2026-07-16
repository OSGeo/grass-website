# GRASS community map

In this folder you can find geographical data related to the GRASS community. The data are provided in GeoJSON format.

## User map

The [user.geojson file](https://github.com/OSGeo/grass-website/static/geojson/user.geojson) contains the positions of GRASS users and community members who willingly added themselves.
The [provider.geojson file](https://github.com/OSGeo/grass-website/static/geojson/provider.geojson) contains the position of companies,
research centers and universities offering support related to GRASS, i.e., commercial support, new features development and implementations, courses, etc.

## Add new records to the map

### User without Git/Github experience

* Create a [Github account](https://github.com/join)
* Sign in and move to <https://github.com/OSGeo/grass-website/> repository
* Choose which file to modify from the [GeoJSON files](https://github.com/OSGeo/grass-website/static/geojson/)
* Click the pencil button to modify the file
* Add a new feature copying the feature template in the bottom of the page
* When saving the file, select `Create a new branch for this commit and start a pull request.`

### Git/Github advanced user

* Fork the <https://github.com/OSGeo/grass-website/> repository
* Create a new branch
* Add a new feature copying the feature template in the bottom of the page
* Commit, push the modified file
* Create a pull request

## Templates

### User

    {
      "type": "Feature",
      "properties": {
        "name": "NAME_SURNAME",
        "url": "YOUR_URL_NOT_REQUIRED",
        "image": "URL_TO_YOUR_IMAGE_NOT_REQUIRED"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          LONGITUDE,
          LATITUDE
        ]
      }
    }

### Provider

    {
      "type": "Feature",
      "properties": {
        "name": "NAME_SURNAME",
        "url": "YOUR_URL_NOT_REQUIRED",
        "image": "URL_TO_YOUR_IMAGE_NOT_REQUIRED",
        "description": "SHORT_DESCRIPTION_YOUR_ACTIVITY_IN_GRASS"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          LONGITUDE,
          LATITUDE
        ]
      }
    }
