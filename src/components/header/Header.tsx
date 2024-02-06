import { InfoCard } from '../cards/InfoCard';
import { LogoNavbar } from './LogoNavbar';
import { Navbar } from './Navbar';
import { SvgClockIcon } from '../svg/SvgClockIcon';
import { SvgEmailIcon } from '../svg/SvgEmailIcon';
import { SvgPhoneIcon } from '../svg/SvgPhoneIcon';
import styled from 'styled-components';


export const Header = () => {

  const CardInfo = [
    {
      title: 'Mon - Sat 9.00 - 18.00',
      content: 'Sunday Closed',
      icon: <SvgClockIcon />
    },
    {
      title: 'Email',
      content: 'info@ecowaveus.com',
      icon: <SvgEmailIcon />
    },
    {
      title: 'Call Us',
      content: '(978) 500 - 4081',
      icon: <SvgPhoneIcon />
    }
  ]

  return (
    <Wrapper>
      <ContactWrapper>
        <ContactHeader>
          <LogoNavbar />
          <CardContainer>
            {
              CardInfo.map((card, index) => {
                return (
                  <InfoCard
                    key={index}
                    title={card.title}
                    content={card.content}
                    icon={card.icon}
                  />
                )
              })
            }
          </CardContainer>
        </ContactHeader>
      </ContactWrapper>
      <StyledNavbar>
        <Navbar />
        <StyledButton>Free Estimaste</StyledButton>
      </StyledNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 0 auto;
  background-color: rgba(9, 18, 66, 0.30);
  position: absolute;
  z-index: 99;
`;
const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #E4ECF6;
`;
const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 120px;
  @media (max-width: 1024px) {
    width: 90%;
    justify-content: space-around;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;
const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 78px;
  padding: 15px 0;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;
const StyledButton = styled.button`
  background-color: #003B76;;
  border: none;
  padding: 28px 52px;
  color: var(--fore-allways---white, #FFF);

  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  height: 78px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0f3a5f;
  }
`;

