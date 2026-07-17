var oldfeat;
var vecturl = '/geojson/user.geojson';
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
var feat;

if (!window.ol || !container || !content || !closer) {
  console.warn('OpenLayers map assets were not loaded correctly.');
} else {
  /**
   * Create an overlay to anchor the popup to the map.
   */
  window.ol.proj.useGeographic();
  const overlay = new window.ol.Overlay({
    element: container,
    autoPan: {
      animation: {
        duration: 250
      }
    }
  });

  /**
   * Function to remove popup and set default style
   */
  function remove_popup() {
    if (oldfeat) {
      oldfeat.setStyle(defaultStyle);
      oldfeat = null;
    }
    overlay.setPosition(undefined);
    closer.blur();
  }

  /**
   * Add a click handler to hide the popup.
   * @return {boolean} Don't follow the href.
   */
  closer.onclick = function () {
    remove_popup();
    return false;
  };

  const defaultStyle = new window.ol.style.Style({
    image: new window.ol.style.Circle({
      radius: 4,
      fill: new window.ol.style.Fill({
        color: 'rgb(255, 255, 255)'
      }),
      stroke: new window.ol.style.Stroke({
        color: '#088B36',
        width: 2
      })
    })
  });

  var highlightStyle = new window.ol.style.Style({
    image: new window.ol.style.Circle({
      radius: 8,
      fill: new window.ol.style.Fill({
        color: 'rgb(255, 255, 255)'
      }),
      stroke: new window.ol.style.Stroke({
        color: '#088B36',
        width: 3
      })
    })
  });

  var vsource = new window.ol.source.Vector({
    url: vecturl,
    format: new window.ol.format.GeoJSON()
  });

  var vectorLayer = new window.ol.layer.Vector({
    source: vsource,
    style: defaultStyle,
    title: 'Users'
  });

  const map = new window.ol.Map({
    layers: [
      new window.ol.layer.Tile({
        source: new window.ol.source.OSM()
      }),
      vectorLayer
    ],
    target: 'community-map',
    overlays: [overlay],
    controls: window.ol.control.defaults.defaults({
      attributionOptions: {
        collapsible: false
      }
    }),
    view: new window.ol.View({
      center: window.ol.proj.transform([0, 5], 'EPSG:4326', 'EPSG:3857'),
      zoom: 2
    })
  });

  map.on('click', function (evt) {
    var coordinate = evt.coordinate;
    feat = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });

    if (feat) {
      feat.setStyle(highlightStyle);
      oldfeat = feat;
      var mycontent = '<p>';
      var userurl = feat.get('url');
      var userimage = feat.get('image');
      if (userimage) {
        mycontent += '<img src="' + userimage + '" width="75px">';
      }
      if (userurl) {
        mycontent += '<a href="' + userurl + '" target="_blank">' + feat.get('name') + '</a></p>';
      } else {
        mycontent += feat.get('name') + '</p>';
      }
      var userdesc = feat.get('description');
      if (userdesc) {
        mycontent += '<p><small>' + userdesc + '</small></p>';
      }
      content.innerHTML = mycontent;
      overlay.setPosition(coordinate);
    } else {
      remove_popup();
    }
  });

  document.querySelectorAll("button[name='layers']").forEach(function (button) {
    button.addEventListener('click', function () {
      remove_popup();
      var ingeojson = button.value;
      vecturl = '/geojson/' + ingeojson + '.geojson';
      vsource = new window.ol.source.Vector({
        url: vecturl,
        format: new window.ol.format.GeoJSON()
      });
      vectorLayer.setSource(vsource);
      vectorLayer.getSource().refresh();
      vectorLayer.getSource().changed();
    });
  });
}
