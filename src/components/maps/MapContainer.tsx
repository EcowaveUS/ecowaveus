import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const MapContainer = () => {
  return (
  <LoadScript
    googleMapsApiKey="AIzaSyAXA8rVi0MJ7foe-tTnjEUjNyxgZBDwbTA"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
      { /* Child components, markers, etc. go here */ }
    </GoogleMap>
  </LoadScript>
  )
}

