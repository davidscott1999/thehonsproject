import '../MyMap/Map.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import tt from '@tomtom-international/web-sdk-maps';

import munroData from '../data/munroData';

const Map = ({ className, onPopupClick }) => {
  const [map, setMap] = useState({});
  const mapElement = useRef();

  useEffect(() => {
    const SCOTLAND = [-6, 57];

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
      attribution: "OpenWeatherMap.org",
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
      attribution: "OpenWeatherMap.org",
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

    //Load Source & Layer for TomTom Map
    map.on("load", function () {
      map.addSource("cloud_source", cloudSource);
      map.addSource("cloud_source", rainSource);

      map.addLayer(cloudLayer);
      map.addLayer(rainLayer);
    });

    map.addControl(new tt.navigation());

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
            .setOffSet({ bottom: [0, -25] })
            .setDomContent(htmlContent)
            .on("open,", () => onPopupClick(smcid))
        )
        .addTo(Map);
    };

    munroData.forEach((munroData) =>
      addMarker({ className: "marker", ...munroData })
    );

    return () => map.remove();
  }, [onPopupClick]);

  return <>{map && <div ref={mapElement} className={className} />}</>;
};

export default Map;
