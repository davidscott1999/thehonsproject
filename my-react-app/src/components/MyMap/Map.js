import '../MyMap/Map.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import tt from '@tomtom-international/web-sdk-maps';

import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import munroData from '../Data/munroData';

const Map = ({ className, onPopupClick, featuredMunroId }) => {
  const SCOTLAND = [-6, 57];
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const [map, setMap] = useState({});
  const [mapCenter, setMapCenter] = useState(SCOTLAND);
  const [mapZoom, setMapZoom] = useState(6);
  const mapElement = useRef();
  const { currentUser } = useAuth();
  const [completedMunros, setCompletedMunros] = useState([]);
  const { uid } = currentUser ?? {};

  useEffect(() => {
    if (uid === undefined) {
      return;
    }
    const queryRef = query(
      collection(db, "completedMunros"),
      where("uid", "==", uid)
    );

    const getCompletedMunros = async () => {
      const data = await getDocs(queryRef);
      setCompletedMunros(data.docs.map((values) => values.data().smcid));
    };
    getCompletedMunros();
  }, [uid]);

  useEffect(() => {
    if (!featuredMunroId) return;

    const munro = munroData.find((munro) => munro.smcid === featuredMunroId);
    setMapCenter([munro.latlng_lng, munro.latlng_lat]);
    setMapZoom(12);
  }, [featuredMunroId]);

  useEffect(() => {
    //Initializes TomTom map with an id set to the 'map' and style, zoom and center position
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      center: mapCenter,
      scrollZoom: true,
      zoom: mapZoom,
    });

    // Slow down trackpad zoom
    map.scrollZoom.setZoomRate(1 / 150);
    // Slow down mouse wheel zoom
    map.scrollZoom.setWheelZoomRate(1 / 450);

    const southWest = new tt.LngLat(-11, 50);
    const northWest = new tt.LngLat(2, 61);
    const llb = new tt.LngLatBounds(southWest, northWest);
    map.setMaxBounds(llb);

    //Open Weather Map API Source for Clouds
    const cloudSource = {
      type: "raster",
      tiles: [
        `http://maps.openweathermap.org/maps/2.0/weather/CL/{z}/{x}/{y}?appid=${apiKey}`,
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap,Org",
    };

    //Open Weather Map API Source for Accumulated precipitation - rain
    const rainSource = {
      type: "raster",
      tiles: [
        `http://maps.openweathermap.org/maps/2.0/weather/PAR0/{z}/{x}/{y}?appid=${apiKey}`,
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap.Org",
    };

    //Open Weather Map API Source for Accumulated precipitation - snow
    const snowSource = {
      type: "raster",
      tiles: [
        `http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?appid=${apiKey}`,
      ],
      tileSize: 256,
      minZoom: 0,
      MAX_ZOOM: 12,
      attribution: "OpenWeatherMap.Org",
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

    //Tile Layer for Snow
    const snowLayer = {
      id: "snow_layer",
      type: "raster",
      source: "snow_source",
      layout: { visibility: "visible" },
    };

    //Load Source & Layer from open weather map for TomTom Map
    map.on("load", function () {
      map.addSource("rain_source", rainSource);
      map.addSource("cloud_source", cloudSource);
      map.addSource("snow_source", snowSource);

      map.addLayer(cloudLayer);
      map.addLayer(rainLayer);
      map.addLayer(snowLayer);
    });

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());

    setMap(map);

    //Munro Marker
    const addMarker = ({ className, latlng_lat, latlng_lng, name, smcid }) => {
      const markerElement = document.createElement("div");
      markerElement.className = className;

      const htmlContent = document.createElement("div");
      htmlContent.innerHTML = `<div className="popup-container popup-container .name"><div className="name">${name}</div></div>`;

      new tt.Marker({
        draggable: false,
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

    munroData.forEach((munro) => {
      const isCompleted = completedMunros.includes(munro.smcid);
      if (isCompleted) {
        console.log("found a completed munro");
      }
      const className = isCompleted ? "marker-done" : "marker";
      addMarker({ className: className, ...munro });
    });

    return () => map.remove();
  }, [apiKey, mapCenter, mapZoom, onPopupClick, completedMunros]);

  return <>{map && <div ref={mapElement} className={className} />}</>;
};

export { Map };
