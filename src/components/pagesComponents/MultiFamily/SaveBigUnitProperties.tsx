import React from "react";
import styled from "styled-components";
import { Theme, Typography, useMediaQuery } from "@mui/material";
import { Check } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Two to Four (2-4) Units",
    items: [
      {
        isBold: false,
        title: 'No-cost Energy Assessment'
      },
      {
        isBold: false,
        title: 'Incentives based on assessment findings including no-cost air sealing, and up to 100% off insulation'
      },
      {
        isBold: false,
        title: 'Air-source heat pump rebates (2026):',
        items: [
          'Whole-home $2,650/ton up to $8,500;',
          'Partial-home $1,125/ton up to $8,500;',
          'Plus potential $500 weatherization and $500 sizing bonuses for partial-home where applicable'
        ]
      },
      {
        isBold: true,
        title: '0% HEAT Loan financing up to $25,000 per eligible project'
      }
    ]
  },
  {
    id: 2,
    title: "Five 5+ Units",
    items: [
      {
        isBold: false,
        title: 'No-cost Energy Assessment'
      },
      {
        isBold: false,
        title: 'Incentives based on assessment findings, commonly including:',
        items: [
          'no-cost air sealing',
          'up to 100% off insulation;',
          'programmable/Wi-Fi thermostats',
          'water-saving devices',
          'occupancy sensors'
        ]
      },
      {
        isBold: false,
        title: 'Air-source heat pump rebates (2026): Per-unit amounts are the same as 2-4 units.',
      },
      {
        isBold: true,
        title: '0% HEAT Loan financing of up to $25,000 per owner-occupied unit on a residential rate'
      },
      {
        isBold: false,
        title: 'Incentives are also available for new construction buildings that meet program eligibility requirements!'
      }
    ]
  },
]

export const SaveBigUnitProperties: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography
        color={"#ffffff"}
        fontWeight={isDesktop ? 600 : 800}
        fontSize={isDesktop ? "48px" : "32px"}
        letterSpacing={"0 !important"}
        textAlign={"center"}
        fontFamily={"Inter !important"}
        maxWidth={"900px"}
      >
        Save Big on Energy Upgrades for Multi-Family Unit Properties
      </Typography>
      <ImageContainer>
        {items.map(item => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#ffffff', borderRadius: '24px', padding: '24px', width: '400px', maxWidth: '100%', height: 'fit-content' }}>
            <Typography color="#252529" fontWeight={700} fontSize="24px" letterSpacing="0 !important" fontFamily="Inter !important" textAlign="center">{item.title}</Typography>
            {item.items.map((item2, key2) => (
              <div key={key2}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ marginTop: '4px' }}>
                    <Check color="#252529" size={18} />
                  </div>
                  <Typography color="#252529" fontWeight={item2.isBold ? 600 : 400} fontSize="16px" letterSpacing="0 !important" fontFamily="Inter !important">{item2.title}</Typography>
                </div>
                {item2.items && (
                  <ul style={{ paddingLeft: '38px' }}>
                    {item2.items.map((item3, key3) => (
                      <li key={key3}>
                        <Typography color="#252529" fontWeight={400} fontSize="16px" letterSpacing="0 !important" fontFamily="Inter !important" lineHeight="1.75">{item3}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 48px 0 0;
  background-color: #252529;
  @media (min-width: 900px) {
    padding: 92px 0 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/multi-family/Multi-Family-save-big-background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 48px 12px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;