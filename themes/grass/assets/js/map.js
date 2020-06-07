
(function ($) {
  var oldfeat;
  var vecturl='/geojson/user.geojson';
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
      url: vecturl,
      format: new ol.format.GeoJSON()
  });
  
  var vectorLayer = new ol.layer.Vector({
    source: vsource,
    style: defaultStyle,
    title: 'Users'
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
      var mycontent = '<p>';
      var userurl = feat.get('url')
      var userimage = feat.get('image')
      if (userimage) {
        mycontent += '<image src="' + userimage + '" width="75px">'
      }
      if (userurl) {
        mycontent += '<a href="' + userurl + '" target="_blank">' + feat.get('name') + '</a></p>';
      } else {
        mycontent += feat.get('name') + '</p>';
      }
      var userdesc = feat.get('description')
      if (userdesc) {
        mycontent += '<p><small>' + userdesc + '</small></p>';
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
  $("input[name='layers']").each( function () {
      //console.log($(this)[0]);
      $(this)[0].addEventListener('change', function () {
        var ingeojson = $(this).val();
        vecturl = '/geojson/' + ingeojson + '.geojson'
        vsource = new ol.source.Vector({
            url: vecturl,
            format: new ol.format.GeoJSON(),
        });
        vectorLayer.setSource(vsource);
        vectorLayer.getSource().refresh();
        vectorLayer.getSource().changed();        
      })
  });
})(jQuery);