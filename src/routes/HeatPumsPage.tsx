import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { OursBrands } from '../components/brands/OursBrands'
import { ProccesCard } from '../components/services/ProccesCard'
import { RebatesIncentives } from '../components/services/RebatesIncentives'
import { SvgFeedBackPositive } from '../components/svg/SvgFeedBackPositive'
import { Link } from 'react-router-dom'
import { MainPageComponent } from '../components/pagesComponents/MainPageComponent'

export const HeatPumsPage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  const stepByStepList = [
    {
      id: 1,
      item: '01',
      title: 'Energy Assessment (Skip if built after 2000)',
      content: 'Complete an energy assessment and obtain a Certificate of Completion from Mass Save for rebate eligibility.'
    },
    {
      id: 2,
      item: '02',
      title: 'Initial Consultation',
      content: 'Contact us to discuss your project"s scope.'
    },
    {
      id: 3,
      item: '03',
      title: 'Site Visit and Estimate',
      content: 'Schedule a visit for house measurements and inspection, followed by a free estimate including potential rebates.'
    },
    {
      id: 4,
      item: '04',
      title: 'Contract and',
      content: 'Sign a contract and, if applying, proceed with Mass Save"s 0% HEAT loan process.'
    },
    {
      id: 5,
      item: '05',
      title: 'Installation and Rebate Assistance',
      content: "We'll order equipment, install and commission the system, and help with rebate applications. Enjoy your new system!"
    },
  ]

  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MainPageComponent
          title='The Advantages of Heat Pumps'
          subtitle='Efficient and Eco-Friendly:'
          content='A heat pump efficiently transfers heat from one place to another using electricity, rather than generating heat directly. It operates at a remarkable 300% efficiency, delivering three times the heat for each unit of energy used, by harnessing solar energy. This makes it an eco-friendly and cost-effective alternative to traditional heating sources like oil or gas.'
          pathLocation={pathLocation}
          backgroundImage='/images/heat-pumps.png'
        />
        <ServiceBenefits
          title='Benefits of heat pumps'
          subTitle= 'Maximizing Comfort and Efficiency'
          image= {[
            '/images/energy-icon.png',
            '/images/increase-icon.png',
            '/images/enviromentally-icon.png'
          ]}
        />
        <ImageBrackground >
          <StyledImage src="/images/heat-pumps-list-background.png" alt="heatpumps-background" />
        </ImageBrackground>
        <ProccesComponent>
          <SubTitle>Installation Guide</SubTitle>
          <TitleProcces>Instalation Procces Step-By-Step</TitleProcces>
          <TextProcces>To make your experience seamless, we've distilled the process into five easy-to-follow steps</TextProcces>
          <ProccesGridContainer>
            <ProccesCardWrapper>
              {
                stepByStepList.map((item) => (
                  <ProccesCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    item={item.item}
                  />
                ))
              }
            </ProccesCardWrapper>
            <ImageWrapper>
              <Image src="/images/heat-pumps-list.png" alt="heat pumpp" />
            </ImageWrapper>
          </ProccesGridContainer>
        </ProccesComponent>
        <RebatesIncentives>
          <LinkWrapper>
            <Text>
              Check if your city is eligible:
            </Text>
            <Link to='https://frontdoor.portal.poweredbyefi.org/initiative/marebates'>
              <LinkText>
                https://frontdoor.portal.poweredbyefi.org/initiative/marebates
              </LinkText>
            </Link>
          </LinkWrapper>
          <ListWrapper>
            <ListCard>
              <SvgFeedBackPositive />
              <Text>Whole-home rebates are available to customers who install heat pumps as the sole source of heating and cooling. (up to $10,000)</Text>
            </ListCard>
            <ListCard>
              <SvgFeedBackPositive />
              <Text>Partial-home rebates are offered based on equipment/outdoor unit (tonnage) to customers who plan to keep an existing boiler or furnace in place to supplement a new heat pump system. ($1250 per ton, up to $10,000)</Text>
            </ListCard>
          </ListWrapper>
        </RebatesIncentives>
        <BrandsWrapper>
          <OursBrands
            images={[
                '/images/brands/mitsubishi-logo.png',
                '/images/brands/lg-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
                '/images/brands/tesla-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
              ]}
          />
        </BrandsWrapper>
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Text = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%;
`;

const ImageBrackground = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProccesComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  margin-top: -7rem;
  margin-bottom: 8rem;
`;
const ProccesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%
`;
const ProccesGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
`;
const SubTitle = styled.p`
color: #1C1F35;

font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-left: 4px solid #68BE54 ;
background: rgba(232, 232, 232, 0.50);
padding: 3px 9px 3px 8px;
`
const TitleProcces = styled.h3`
color: #1C1F35;
width: 472px;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const TextProcces = styled.p`
color: #666C89;
width: 472px;

font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 151.523%; /* 24.244px */
`

const BrandsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: #F5F5F5;
`;
const LinkText = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  text-decoration: underline;
`;
const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 24px 0;
`;
const ListWrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
