import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { useState, useCallback } from 'react'

const containerStyle = {
  width: '100%',
  height: '600px',
};



const mapOtions = {
  zoom: 11,
  center: {
    lat: 42.5495846039079,
    lng: -70.88054699255915
  },
}
interface MapContainerProps {
  markersPoints: {
    name: string
    location: {
      lat: number
      lng: number
    }
  }[]
}



export const MapContainer: React.FC<MapContainerProps> = ({
  markersPoints,
}) => {
  const [mapContainer, setMapContainer] = useState<any>(null)
  const onLoad = useCallback((map: any) => addMarkers(map), [])

  const addMarkers = (map: any) => {
    const markers = markersPoints.map(({location : { lat , lng }}) => {
      const marker = new google.maps.Marker({ position: { lat, lng }})
      return marker
    })
    new MarkerClusterer({ markers, map})
  }
  return (
    <GoogleMapsProvider
      googleMapsAPIKey="AIzaSyAXA8rVi0MJ7foe-tTnjEUjNyxgZBDwbTA"
      mapOptions={mapOtions}
      mapContainer={mapContainer}
      onLoadMap={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={containerStyle} />
    </GoogleMapsProvider>
  )
}


