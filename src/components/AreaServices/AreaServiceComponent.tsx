import { ListAreaService } from './ListAreaService'
import { MapContainer } from '../maps/MapContainer';
import styled from 'styled-components'

export const AreaServiceComponent = () => {
  const location = ["Lynfield", "Marblehead", "Beverly", "Wenham","Hamilton", "Ipswich", "Essex", "Rockport", "Gloucester", "Manchester-by-the-sea"];
  const markersPoint = [
  {
    name: "Lynfield",
    location: {
      lat: 42.53843957611039,
      lng: -71.04549499206827
    },
  },
  {
    name: "Marblehead",
    location: {
      lat: 42.49984040414752,
      lng: -70.86060311120073
    },
  },
  {
    name: "Beverly",
    location: {
      lat: 42.558536553181014,
      lng: -70.8765824311865
    },
  },
  {
    name: "Wenham",
    location: {
      lat: 42.60537728415313,
      lng: -70.89386749597841
    },
  },
  {
    name: "Hamilton",
    location: {
      lat: 42.63657829300348,
      lng: -70.84201579678896
    },
  },
  {
    name: "Ipswich",
    location: {
      lat: 42.68061772944799,
      lng: -70.84465632254317
    },
  },
  {
    name: "Essex",
    location: {
      lat: 42.63218504964758,
      lng: -70.78307835647554
    },
  },
  {
    name: "Rockport",
    location: {
      lat: 42.65572915707854,
      lng: -70.62222953829264
    },
  },
  {
    name: "Gloucester",
    location: {
      lat: 42.61717309895631,
      lng: -70.65648123851348
    },
  },
  {
    name: "Manchester-by-the-sea",
    location: {
      lat: 42.57857188696586,
      lng:  -70.75963088439863
    },
  },
];
  return (
    <StyledAreaService>
      <ListAreaService location={location}/>
      <MapWrapper>
        <MapContainer
          markersPoints={markersPoint}
        />
      </MapWrapper>
    </StyledAreaService>
  )
}

const StyledAreaService = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 20px;
  background-color: #F1F5F9;
  padding: 60px;
  margin-bottom: 72px;
`;
const MapWrapper = styled.div`
  height: auto;
  width: 60%;
`;
