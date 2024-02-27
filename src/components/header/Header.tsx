import { useEffect, useState } from 'react';
import { InfoCard } from '../cards/InfoCard';
import { LogoNavbar } from './LogoNavbar';
import { Navbar } from './Navbar';
import { SvgClockIcon } from '../svg/SvgClockIcon';
import { SvgEmailIcon } from '../svg/SvgEmailIcon';
import { SvgPhoneIcon } from '../svg/SvgPhoneIcon';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { SideBar } from './SideBar';
import { Link } from 'react-router-dom';

interface StyledProps {
  isfixed: boolean;
}
export const Header = () => {
  const [ sidebar, setsidebar ] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);

  const CardInfo = [
    {
      title: 'Mon - Fri  8:00 AM - 5:00 PM',
      content: 'Sat - Sun Closed',
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
  const [isfixed, setIsfixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 180) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
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
            <CardContainerResponsive>
              <InfoCard
                title='Call Us'
                content='(978) 500 - 4081'
                icon={<SvgPhoneIcon />}
              />
              <HambuguerMenu>
                <AiOutlineMenu
                  size={40}
                  onClick={showSidebar}
                />
              </HambuguerMenu>
            </CardContainerResponsive>
          </ContactHeader>
        </ContactWrapper>
        <StyledNavbar isfixed={isfixed} className="navbar">
          <Navbar />
          <StyledButton>
            <Link to='/contact-us'>SCHEDULE A CONSULTATION</Link>
          </StyledButton>
        </StyledNavbar>
      </Wrapper>
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
    </>
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
  z-index: 1;

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
  width: 100%;
  height: 150px;
  padding: 1rem;
  @media (max-width: 1024px) {
    width: 95%;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: auto;
  }
`;
const CardContainerResponsive = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const StyledNavbar = styled.div<StyledProps>`
  position: ${props => props.isfixed ? 'fixed' : 'relative'};
  top: ${props => props.isfixed ? '0' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 64px;
  padding: 15px 0;
  background-color: ${props => props.isfixed ? 'rgba(9, 18, 66, 0.30)' : 'transparent'};
  border-bottom: ${props => props.isfixed ? '1px solid rgba(9, 18, 66, 0.30)' : 'none'};
  transition: all 0.3s ease;
  z-index: 99;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const StyledButton = styled.button`
  background-color: #003B76;
  border: none;
  border-radius: 10px;
  padding: 15px 24px;
  color: var(--fore-allways---white, #FFF);

  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0f3a5f;
  }
`;
const HambuguerMenu = styled.div`
  background-color: #003B76;
  border-radius: 55%;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
`;

