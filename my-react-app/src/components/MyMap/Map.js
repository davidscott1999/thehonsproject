import '../MyMap/Map.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import tt from '@tomtom-international/web-sdk-maps';

import munroData from '../Data/munroData';

const Map = ({ className, onPopupClick }) => {
  const [map, setMap] = useState({});
  const mapElement = useRef();

  useEffect(() => {
    const SCOTLAND = [-6, 57];

    //Initializes TomTom map with an id set to the 'map' and style, zoom and center position
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      center: SCOTLAND,
      scrollZoom: false,
      zoom: 6.5,
    });

    const southWest = new tt.LngLat(-11, 50);
    const northWest = new tt.LngLat(2, 61);
    const llb = new tt.LngLatBounds(southWest, northWest);
    map.setMaxBounds(llb);

    //Open Weather Map API Source for Clouds
    const cloudSource = {
      type: "raster",
      titles: [
        "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=process.env.REACT_APP_OPEN_WEATHER_KEY",
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap",
    };

    //Open Weather Map API Source for Precipitation
    const rainSource = {
      type: "raster",
      titles: [
        "https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=process.env.REACT_APP_OPEN_WEATHER_KEY",
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap",
    };

    //Open Weather Map API Source for Wind
    const windSource = {
      type: "raster",
      titles: [
        "https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=process.env.REACT_APP_OPEN_WEATHER_KEY",
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap",
    };

    //Tile Layer for Clouds
    const cloudLayer = {
      id: "cloud_layer",
      type: "raster",
      source: "cloud_source",
      layout: { visibility: "visible" },
    };

    //Tile Layer for Rain
    const rainLayer = {
      id: "rain_layer",
      type: "raster",
      source: "rain_source",
      layout: { visibility: "visible" },
    };

    //Tile Layer for Wind
    const windLayer = {
      id: "wind_layer",
      type: "raster",
      source: "wind_source",
      layout: { visibility: "visible" },
    };

    //Load Source & Layer from open weather map for TomTom Map
    map.on("load", function () {
      map.addSource("cloud_source", cloudSource);
      map.addSource("rain_source", rainSource);
      map.addSource("wind_source", windSource);

      map.addLayer(cloudLayer);
      map.addLayer(rainLayer);
      map.addLayer(windLayer);
    });

    map.addControl(new tt.NavigationControl());

    setMap(map);

    //Munro Marker
    const addMarker = ({ className, latlng_lat, latlng_lng, name, smcid }) => {
      const markerElement = document.createElement("div");
      markerElement.className = className;

      const htmlContent = document.createElement("div");
      htmlContent.innerHTML = `div class="popup-container">div class="name">${name}</div></div>`;

      new tt.Marker({
        element: markerElement,
      })
        .setLngLat([latlng_lng, latlng_lat])
        .setPopup(
          new tt.Popup()
            .setOffset({ bottom: [0, -25] })
            .setDOMContent(htmlContent)
            .on("open", () => onPopupClick(smcid))
        )
        .addTo(map);
    };

    munroData.forEach((munroData) =>
      addMarker({ className: "marker", ...munroData })
    );

    return () => map.remove();
  }, [onPopupClick]);

  return <>{map && <div ref={mapElement} className={className} />}</>;
};

export { Map };
