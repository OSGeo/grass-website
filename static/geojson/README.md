# GRASS GIS map

In this folder you can find geographical data related to GRASS GIS community. The data are provided in GeoJSON format.

## User map

The [user.geojson file](https://github.com/OSGeo/grass-website/static/geojson/user.geojson) contain the position of GRASS GIS users.
The [provider.geojson file](https://github.com/OSGeo/grass-website/static/geojson/provider.geojson) contain the position of any companies,
research center, university providing activities (specially development and courses) related to GRASS GIS.

## Add new record

If you want to add a new record to one of the GeoJSON files you have to ways

### User without Git/Github experience

* You need to create a [Github account](https://github.com/join)
* Sign in and move to https://github.com/OSGeo/grass-website/ repository
* Choose the file to modify into [GeoJSON files](https://github.com/OSGeo/grass-website/static/geojson/)
* Click the pencil button to modify the file
* Add a new feature copying the feature template in the bottom of the page 
* When you save the file, select `Create a new branch for this commit and start a pull request.`

### Git/Github advanced user

* Fork the https://github.com/OSGeo/grass-website/ repository
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