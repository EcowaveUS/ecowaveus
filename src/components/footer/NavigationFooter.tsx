import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface NavProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

export const NavigationFooter: React.FC<NavProps> = ({ title, links }) => {
  return (
    <NavigationWrapper>
      <Typography
        variant="body2"
        color="#ffffff"
        fontWeight={700}
      >
          {title}</Typography>
      <NavigationList>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </NavigationList>
    </NavigationWrapper>
  );
};
const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 12px;
  li {
    color: #ffffff;
    font-family: InterLight;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;
