import React, { useState, useRef } from "react";
import MapGL, { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import RoomIcon from "@material-ui/icons/Room";
import MarkerPoint from "../../models/MarkerPoint";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const mapboxgl = require("mapbox-gl");
mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true // Lazy load the plugin
);

interface MapProps {
  lat: number;
  lon: number;
  zoom?: number;
  isEditable: boolean;
  onMarkerChanged?: (marker: MarkerPoint) => void;
}

interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

export const Map: React.FC<MapProps> = (props) => {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState<ViewPort>({
    latitude: props.lat,
    longitude: props.lon,
    zoom: props.zoom ? props.zoom : 16,
    bearing: 0,
    pitch: 0,
  });

  const [marker, setMarker] = useState<MarkerPoint>({
    latitude: props.lat,
    longitude: props.lon,
  });

  const _updateViewport = (updatedViewport: ViewPort) => {
    if (props.isEditable) setViewport(updatedViewport);
  };

  const _updateMarker = (updatedMarker: MarkerPoint) => {
    if (props.isEditable) setMarker(updatedMarker);
  };

  const _onMarkerDragEnd = (event: any) => {
    const map = {
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    };
    setMarker(map);
    if (props.onMarkerChanged) props.onMarkerChanged(map);
  };

  const _onMapClick = (event: any) => {
    const map = {
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    };
    setMarker(map);
    if (props.onMarkerChanged) props.onMarkerChanged(map);
  };

  const _handleGeocoderViewportChange = (updatedviewport: ViewPort) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    _updateMarker({
      longitude: updatedviewport.longitude,
      latitude: updatedviewport.latitude,
    });
    return _updateViewport({
      ...updatedviewport,
      ...geocoderDefaultOverrides,
    });
  };

  return (
    <MapGL
      ref={mapRef}
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={_updateViewport}
      onClick={_onMapClick}
      mapboxApiAccessToken={TOKEN}
    >
      {props.isEditable && (
        <Geocoder
          mapRef={mapRef}
          onViewportChange={_handleGeocoderViewportChange}
          mapboxApiAccessToken={TOKEN}
        />
      )}
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        offsetTop={-20}
        offsetLeft={-10}
        draggable={props.isEditable}
        onDragEnd={_onMarkerDragEnd}
      >
        <RoomIcon color="secondary" />
      </Marker>
    </MapGL>
  );
};
