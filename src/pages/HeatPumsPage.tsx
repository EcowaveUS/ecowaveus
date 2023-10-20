import { Layout } from '../utils/Layout'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { ServiceTitle } from '../components/services/ServiceTitle'
import { ServiceInfo } from '../components/services/ServiceInfo'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import Mitsubishi from '../assets/Mitsubishi_Electric_logo.png'
import LG from '../assets/LG-Air-Conditioning-Logo.png'
import Fujitsu from '../assets/Fujitsu-logo.png'

export const HeatPumsPage = () => {
  return (
    <Layout>
      <StyledPage>
        <ServiceTitle title='Heat Pumps'/>
        <Separator/>
        <ServiceInfo
          title='What is a heat pump?'
          images={[
            '/images/heat-pumps.jpg'
          ]}
          content=
            'A heat pump is a highly efficient device that transfers heat from one location to another, rather than generating heat or cooling itself. Powered by electricity, the heat pump simply moves heat, taking advantage of the abundant energy provided by the sun. Unlike traditional heat sources such as oil, natural gas, or propane, heat pumps boast an impressive efficiency of 300%. This means that for every unit of energy input, they deliver three units of heat. While it may seem like magic, heat pumps work by harnessing the vast amount of solar energy available, making them an eco-friendly and cost-effective alternative to conventional heating methods.'
        />
        <Separator/>
        <ServiceBenefits
          title='Benefits of heat pumps'
        />
        <Separator/>
        <StepsWrapper>
          <PumpsContentTitle>Step-By-Step Process:</PumpsContentTitle>
          <ListContainer>
            <StepsList>
                <ListText>
                  1. If your house was built after the year 2000, you can skip this step. Before the installation, in order to qualify for Mass Save rebates, you must complete an energy assessment and obtain a Certificate of Completion (COC). This is necessary for being eligible for rebates from Mass Save.
                  <br/><br/>
                  To schedule an energy assessment with Mass Save, please click on the following link:
                  <Link to='https://www.masssave.com/en/saving/energy-assessments/' target='_blank'><LinkText>https://www.masssave.com/en/saving/energy-assessments/ </LinkText></Link>
                </ListText>
                <ListText>
                  2.Give us a call and tell us about the scope of your project.
                </ListText>
                <ListText>
                  3.Schedule a visit; we will take measurements of your house and inspect some elements.
                </ListText>
                <ListText>
                  4. Receive a free estimate from us, including information on rebates you may be eligible for.
                </ListText>
                <ListText>
                  5. Sign a contract.
                </ListText>
            </StepsList>
            <StepsList>
                <ListText>
                  6. a) If you are NOT applying for a Mass Save loan, proceed to step 7.<br/>
                  b) If you are applying for the Mass Save 0% HEAT loan, apply through this<Link to='https://www.masssave.com/en/residential/rebates-and-incentives/'><LinkText>link:https://www.masssave.com/en/residential/rebates-and-incentives/heat-loan-program</LinkText></Link>(We will provide the information needed to complete the application. It may take 2 weeks for the application to be processed.
                </ListText>
                <ListText>
                  7. We will order the equipment and schedule a start date for the job.
                </ListText>
                <ListText>
                  8. We'll complete the installation. We'll commission the system.
                </ListText>
                <ListText>
                  9. Submit the second payment when the job is finished.
                </ListText>
                <ListText>
                  10. We'll assist you in applying for your rebate.
                </ListText>
                <ListText>
                  11. Receive a check for the rebate amount from Mass Save.
                </ListText>
                <ListText>
                  12.Enjoy your new system!
                </ListText>
            </StepsList>
          </ListContainer>
        </StepsWrapper>
        <Separator/>
        <RebatesWrapper>
          <PumpsContentTitle>Energy Rebates & Incentives</PumpsContentTitle>
          <RebatesInfo>
            <RebatesTitle>Mass Save Rebates</RebatesTitle>
            <p>
              To verify if your town is eligible please click the following link: <br/>
              <Link to='https://frontdoor.portal.poweredbyefi.org/initiative/marebates'><p>https://frontdoor.portal.poweredbyefi.org/initiative/marebates</p></Link>
            </p>
          </RebatesInfo>
          <div>
            <ul>
              <li>Whole-home rebates are available to customers who install heat pumps as the sole source of heating and cooling. (up to $10,000)</li>
              <li>Partial-home rebates are offered based on equipment/outdoor unit  (tonnage) to customers who plan to keep an existing boiler or furnace in place to supplement a new heat pump system. ($1250 per ton, up to $10,000)</li>
            </ul>
          </div>
          <RebatesInfo>
            <RebatesTitle>Federal incentives</RebatesTitle>
            <p>
              30% of the cost of the heat pump installation up to $2,000
            </p>
          </RebatesInfo>
        </RebatesWrapper>
        <Separator/>
        <OursBrands
          images={[
            Mitsubishi,
            LG,
            Fujitsu
            ]}
        />
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PumpsContentTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 0;
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
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const StepsList = styled.ol`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0;
  width: 100%;
`;
const ListText = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: grey;
  text-align: left;
  margin: 0;
`;
const LinkText = styled.p`
  font-size: 15px;
  font-weight: 350;
  color: green;
  text-align: left;
  margin: 0;
  text-decoration: underline;
`;
const RebatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;
const RebatesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const RebatesTitle = styled.h5`
  font-size: 15px;
  font-weight: 700;
  color: grey;
  text-align: left;
  margin: 0;
`;