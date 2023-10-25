import styled from 'styled-components'
import { ServiceTitle } from '../components/services/ServiceTitle'
import { ServiceInfo } from '../components/services/ServiceInfo'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { OursBrands } from '../components/brands/OursBrands'


export const EvChargersPage = () => {
  return (
    <StyledPage>
    <TitleContainer>
      <ServiceTitle title='EV Chargers'/>
    </TitleContainer>
    <ServiceInfo
      title='Charge Faster, Go Further'
      images={[
        '/images/ev-chargers-01.jpg'
      ]}
      content=
        'We are dedicated to helping drivers switch to clean and sustainable transportation, by providing top-quality EV charger installation solutions that are both cost-effective and affordable.'
    />
    <Separator/>
    <ServiceBenefits
      title='Benefits of EV-Chargers'
    />
    <StepsWrapper>
      <PumpsContentTitle>Types of EV chargers</PumpsContentTitle>
      <Text>
        Level 1 (120V) Charger: Use a standard household outlet and deliver a slow charge, typically taking 8-12 hours to fully charge an EV battery.
      </Text>
      <Text>
        Level 2 (240V) Charger: offer a faster charge than Level 1 chargers, taking 4-8 hours to fully charge an EV battery. It is a practical option for frequent or daily charging needs.
      </Text>
      <Text>
        Level 3 (DC Fast Charger):Offer the fastest charge time, delivering a full charge in just 30 minutes to an hour. These chargers are typically found at public charging stations and are ideal for long-distance travel.
      </Text>
    </StepsWrapper>
    <RebatesWrapper>
      <PumpsContentTitle>Energy Rebates & Incentives</PumpsContentTitle>
      <RebatesContainer>
        <RebatesInfo>
          <RebatesTitle>Mass Save Rebates</RebatesTitle>
          <Text>
            The Residential EV Charging Infrastructure Program supports residential electric customers by providing rebates for upgrading home-wiring in their garage or parking area (up to $700 for single family homes, with additional rebates for 2-4 units) and ongoing savings once enrolled in a managed charging program, for example approximately $100 annually through the off peak charging program. Customers living in an environmental justice community or enrolled in the low-income discount rate (R-2) are eligible for additional wiring and charger rebates.
          </Text>
          <RebatesTitle>Federal incentives</RebatesTitle>
          <Text>
            A recently expired federal tax break for electric vehicle (EV) chargers got new life under the recently passed Inflation Reduction Act—a move that will give taxpayers up to $1,000 in a tax credit.
          </Text>
        </RebatesInfo>
        <RebatesImage src='/images/green-money.jpg' alt='energy-star-logo' />
      </RebatesContainer>
    </RebatesWrapper>
    <Separator/>
    <OursBrands
      images={[
          '/images/tesla-logo.jpg',
          '/images/encharge-logo.png',
          '/images/juicebox-logo.png'
        ]}
    />
  </StyledPage>
)
}

const StyledPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-image: url('/images/ev-chargers-title.jpg');
background-size: cover;
background-position: center;
width: 100%;
margin-bottom: 2rem;
`;

const PumpsContentTitle = styled.h3`
font-size: 30px;
font-weight: 600;
color: grey;
text-align: left;
margin-bottom: 2rem;
`;
const Separator = styled.div`
width: 90%;
height: 1px;
background-color: grey;
margin: 2rem 0;
`;
const StepsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;

`;
const RebatesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 80%;
`;
const RebatesContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 2rem;
@media (max-width: 1024px) {
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
}
`;
const RebatesImage = styled.img`
width: 40%;
height: auto;
border-radius: 10px;
@media (max-width: 1024px) {
width: 100%;
}
`;
const RebatesInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 1rem;
`;
const RebatesTitle = styled.h5`
font-size: 1.3rem;
font-weight: 700;
color: grey;
text-align: left;
margin: 0;
`;
const Text = styled.p`
font-size: 1.1rem;
font-weight: 300;
color: grey;
text-align: left;
margin: 0;
`;
