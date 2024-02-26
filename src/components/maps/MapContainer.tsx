import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { useState, useCallback } from 'react'

const containerStyle = {
  width: '100%',
  height: '653px',

};

const mapOtions = {
  zoom: 11,
  center: {
    lat: 42.558536553181014,
    lng: -70.8765824311865
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
  const onLoad  = useCallback((map: any) => addMarkers(map), [])

  const google_key= import.meta.env.VITE_GOOGLE_API_KEY;


  const addMarkers = (map: any) => {
    const markers = markersPoints.map(({location : { lat , lng }}) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
      })
      return marker
    })
    new MarkerClusterer({ markers, map})
  }
  return (
    <GoogleMapsProvider
      googleMapsAPIKey={google_key}
      mapOptions={mapOtions}
      mapContainer={mapContainer}
      onLoadMap={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={containerStyle}>
      </div>
    </GoogleMapsProvider>
  )
}


