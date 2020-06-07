
(function ($) {
  var oldfeat;
  var container = document.getElementById('popup');
  var content = document.getElementById('popup-content');
  var closer = document.getElementById('popup-closer');

  /**
   * Create an overlay to anchor the popup to the map.
   */
  var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  });
  
  
  /**
   * Add a click handler to hide the popup.
   * @return {boolean} Don't follow the href.
   */
  closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    if (oldfeat) {
      oldfeat.setStyle(defaultStyle);
      oldfeat = null;
    }
    return false;
  };
  
  var defaultStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 4,
      fill: new ol.style.Fill({
        color: 'rgb(255, 255, 255)'
      }),
      stroke: new ol.style.Stroke({
        color: '#088B36',
        width: 2
      })
    })
  });
  
  var highlightStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 8,
      fill: new ol.style.Fill({
        color: 'rgb(255, 255, 255)'
      }),
      stroke: new ol.style.Stroke({
        color: '#088B36',
        width: 3
      })
    })
  });
  
  var vsource = new ol.source.Vector({
      url: '/geojson/user.geojson',
      format: new ol.format.GeoJSON()
  });
  
  var vectorLayer = new ol.layer.Vector({
    source: vsource,
    style: defaultStyle
  });
  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    target: 'map',
    overlays: [overlay],
    controls: ol.control.defaults({
    	  attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      })
    }),
    view: new ol.View({
      center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
      zoom: 2
    })
  });
  map.on('click', function(evt) {
    var coordinate = evt.coordinate;
    feat = map.forEachFeatureAtPixel(evt.pixel,
      function(feature, vectorLayer) {
        return feature
      }
    )
    if (feat) {
      feat.setStyle(highlightStyle);
      oldfeat = feat;
      var mycontent = '';
      var userurl = feat.get('url')
      if (userurl) {
        mycontent += '<p><a href="' + userurl + '" target="_blank">' + feat.get('name') + '</a></p>';
      } else {
        mycontent += '<p>' + feat.get('name') + '</p>';
      }
      content.innerHTML = mycontent
  overlay.setPosition(coordinate);
    } else {
      if (oldfeat) {
        oldfeat.setStyle(defaultStyle);
        oldfeat = null;
      }
    }
  })
})(jQuery);