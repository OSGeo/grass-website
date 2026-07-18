// Community map (/about/map). OpenLayers is loaded as its standalone UMD build
// (window.ol) from footer.html. Do NOT convert this to `import ... from 'ol/...'`
// bundled by Hugo's js.Build: esbuild breaks OL's internal `instanceof` checks
// (View, Style, ...), which crashes the map at construction.

if (!window.ol) {
  console.warn('OpenLayers (window.ol) was not loaded; community map disabled.');
} else {
  const ol = window.ol;
  const container = document.getElementById('popup');
  const content = document.getElementById('popup-content');
  const closer = document.getElementById('popup-closer');

  if (container && content && closer) {
    // Work in [lon, lat] so raw GeoJSON coordinates render without reprojection.
    ol.proj.useGeographic();

    let oldfeat = null;
    let vecturl = '/geojson/user.geojson';

    // #088B36 mirrors $gs-primary-dark-color in _community_map.scss (JS can't read Sass).
    const markerStyle = (radius, width) =>
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius,
          fill: new ol.style.Fill({ color: 'rgb(255, 255, 255)' }),
          stroke: new ol.style.Stroke({ color: '#088B36', width: width }),
        }),
      });
    const defaultStyle = markerStyle(4, 2);
    const highlightStyle = markerStyle(8, 3);

    const overlay = new ol.Overlay({
      element: container,
      autoPan: { animation: { duration: 250 } },
    });

    function removePopup() {
      if (oldfeat) {
        oldfeat.setStyle(defaultStyle);
        oldfeat = null;
      }
      overlay.setPosition(undefined);
      closer.blur();
    }

    closer.onclick = function () {
      removePopup();
      return false;
    };

    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({ url: vecturl, format: new ol.format.GeoJSON() }),
      style: defaultStyle,
    });

    const map = new ol.Map({
      target: 'community-map',
      layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
      overlays: [overlay],
      controls: ol.control.defaults.defaults({
        attributionOptions: { collapsible: false },
      }),
      view: new ol.View({ center: [0, 5], zoom: 2 }),
    });

    // Feature properties come from community-edited GeoJSON: never inject as HTML.
    function isHttpUrl(value) {
      if (!value) return false;
      try {
        const parsed = new URL(value, window.location.origin);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch (e) {
        return false;
      }
    }

    function renderPopup(feature) {
      content.replaceChildren();
      const name = feature.get('name') || '';
      const url = feature.get('url');
      const image = feature.get('image');
      const description = feature.get('description');

      const line = document.createElement('p');
      if (isHttpUrl(image)) {
        const img = document.createElement('img');
        img.src = image;
        img.width = 75;
        img.alt = name;
        line.appendChild(img);
      }
      if (isHttpUrl(url)) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = name;
        line.appendChild(link);
      } else {
        line.appendChild(document.createTextNode(name));
      }
      content.appendChild(line);

      if (description) {
        const desc = document.createElement('p');
        const small = document.createElement('small');
        small.textContent = description;
        desc.appendChild(small);
        content.appendChild(desc);
      }
    }

    map.on('click', function (evt) {
      removePopup(); // reset any previously highlighted feature first
      const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f);
      if (!feature) return;
      feature.setStyle(highlightStyle);
      oldfeat = feature;
      renderPopup(feature);
      overlay.setPosition(evt.coordinate);
    });

    document.querySelectorAll("button[name='layers']").forEach(function (button) {
      button.addEventListener('click', function () {
        removePopup();
        vecturl = '/geojson/' + button.value + '.geojson';
        vectorLayer.setSource(
          new ol.source.Vector({ url: vecturl, format: new ol.format.GeoJSON() })
        );
      });
    });
  }
}
