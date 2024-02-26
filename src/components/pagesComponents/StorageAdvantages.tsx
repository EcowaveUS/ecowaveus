import { Fragment } from 'react'
import { StorageCard } from '../cards/StorageCard'
import styled from 'styled-components'

export const StorageAdvantages = () => {
  const energyCards = [
    {
      id: 1,
      title: 'Emergency Backup',
      content: 'Provides electricity during power outages, ensuring stability for critical appliances',
      image: '/images/storage-icon01.png'
    },
    {
      id: 2,
      title: 'Enhanced Solar Usage',
      content: 'Stores excess solar energy for use during  periods without sunlight, maximizing renewable energy use',
      image: '/images/storage-icon02.png'
    },
    {
      id: 3,
      title: 'Lower Energy Costs',
      content: 'Saves money by storing electricity when rates are low and using it during peak times',
      image: '/images/storage-icon03.png'
    },
    {
      id: 4,
      title: 'Reduced Carbon Footprint',
      content: 'Supports a greener lifestyle by facilitating the use of renewable energy sources',
      image: '/images/storage-icon04.png'
    },
    {
      id: 5,
      title: 'Increased Property Value',
      content: 'Makes homes more appealing in the real estate market with energy storage systems',
      image: '/images/storage-icon05.png'
    }
  ]
  return (
    <StyledComponent>
      <LeftBackground src="images/storage-background-left.png" alt="Energy Storage" />
      <ContentWrapper>
        <Title>Advantages of Having Energy Storage</Title>
        <CardWrapper>
          {
            energyCards.map((card, index) => (

              <Fragment key={card.id}>
                <StorageCard
                  title={card.title}
                  content={card.content}
                  image={card.image}
                />
                  {index === 0 || index === 1 || index === 3 ? <Separator /> : null}
              </Fragment>
            ))
          }
        </CardWrapper>
      </ContentWrapper>
      <RightBackground src="images/storage-background.png" alt="Energy Storage" />
    </StyledComponent>
  )
}
const StyledComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F1F5F9;
  padding: 3rem 0;
`;

const RightBackground = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 180px;
  height: 220px;
`;
const LeftBackground = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 140px;
  height: 380px;
`;
const Title = styled.h3`
  color: #1C1F35;

  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 35%;
  margin-bottom: 3rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  width: 80%;
  margin: 3rem 0;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Separator = styled.div`
  border-left: 2px solid #CBCBCB;
  height: 127px;
  background-color: #CBCBCB;
  margin-right:1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;