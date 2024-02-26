import { ListAreaService } from './ListAreaService'
import { MapContainer } from '../maps/MapContainer';
import styled from 'styled-components'

export const AreaServiceComponent = () => {
  const location = ["Beverly", "Manchester-by-the-Sea", "Hamilton", "Essex","Gloucester", "Marblehead", "Wenham", "Ipswich", "Rockport", "Lynnfield"];
  const markersPoint = [
    {
      name: "Beverly",
      location: {
        lat: 42.558536553181014,
        lng: -70.8765824311865
      },
    },
    {
      name: "Manchester-by-the-sea",
      location: {
        lat: 42.57857188696586,
        lng:  -70.75963088439863
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
      name: "Essex",
      location: {
        lat: 42.63218504964758,
        lng: -70.78307835647554
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
      name: "Marblehead",
      location: {
        lat: 42.49984040414752,
        lng: -70.86060311120073
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
      name: "Ipswich",
      location: {
        lat: 42.68061772944799,
        lng: -70.84465632254317
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
      name: "Lynfield",
      location: {
        lat: 42.53843957611039,
        lng: -71.04549499206827
      },
    },
  ];
  return (
    <StyledAreaService>
      <ComponentWrapper>
        <ListAreaService location={location}/>
        <MapWrapper>
          <MapContainer
            markersPoints={markersPoint}
          />
        </MapWrapper>
      </ComponentWrapper>
    </StyledAreaService>
  )
}

const StyledAreaService = styled.div`
  border-radius: 100px 100px 0px 0px;
  background: var(--Comps-field-border, #EEF0F3);
  box-shadow: 12px 0px 48px 0px rgba(39, 39, 42, 0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F1F5F9;
  padding: 60px auto;
  border-radius: 64px 64px 0 0;
  @media (max-width: 1024px) {
  }
`;
const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin: 5rem auto;
  @media (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
  }
`;
const MapWrapper = styled.div`
  height: auto;
  width: 75%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
