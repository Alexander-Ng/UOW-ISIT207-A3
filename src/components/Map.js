import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 1.33, // Latitude of the location
  lng: 103.775, // Longitude of the location
};

const pinLocation = {
    lat: 1.33, // Latitude of the pin location
    lng: 103.775, // Longitude of the pin location
  };

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAH1PcfVwOGLmBc7Ij6foPTNYVvu_C9YKc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
            position={pinLocation}
            label="A" // Label for the marker
            icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Custom icon URL
            }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
