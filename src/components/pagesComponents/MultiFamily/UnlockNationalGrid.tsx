import styled from "styled-components";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

const items = [
  {
    id: 1,
    title: "Two to Four (2-4) Units",
    items: [
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "Best for: ",
        description: "2-4 unit buildings where charging is typically installed as part of a residential-style upgrade (e.g., adding a 240V circuit/outlet)."
      },
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "What it helps pay for: ",
        description: "Rebates for electrical upgrades to support EV charging (installing a 240V circuit/outlet)."
      },
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "Incentives",
        items: [
          "240V wiring/outlet rebate: up to $1,400 for 2-4 unit properties",
          "Enhanced wiring/outlet rebate (Environmental Justice): up to $2,000 for eligible 2-4 unit properties in eligible areas",
          "Smart charger rebate: up to $700 (available for customers on low-income discount rate (R-2), with program requirements).",
          "Off-Peak Charging is optional for certain landlord/tenant situations in 2-4 units; This program rewards drivers for charging when demand is lower, which can reduce charging costs"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Five 5+ Units",
    items: [
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "Best for: ",
        description: "Apartment/condo properties with 5+ residential units, where chargers are installed as an amenity in shared/common parking areas."
      },
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "What it helps pay for: ",
        description: "Major incentives that can cover EV charging electrical infrastructure (utility-side and customer-side “make-ready” work) plus charger (EVSE) rebates."
      },
      {
        image: "/images/multi-family/Multi-family-ev-charger-bullet.webp",
        title: "Incentives",
        items: [
          "Up to 100% of utility-side infrastructure costs and up to 100% of customer-side infrastructure costs (per port cap up to $7,900/$10,000 if new service)",
          "Level 2 Charger Rebates (by Environmental Justice tier): up to 50% / 75% / 100% (per port cap up to $3,900)",
          "Networking rebate (optional): $480 per shared port (networking not required, but incentivized if installed).",
        ]
      }
    ]
  },
];

export const UnlockNationalGrid: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography
        color={"#ffffff"}
        fontWeight={isDesktop ? 600 : 800}
        fontSize={isDesktop ? "48px" : "32px"}
        letterSpacing={"0 !important"}
        textAlign={"center"}
        lineHeight={isDesktop ? "52px" : "40px"}
        fontFamily={"Inter !important"}
        maxWidth={"1200px"}
      >
        Unlock National Grid EV Charging Incentives Designed for Your Properties
      </Typography>
      <Box
        display={"flex"}
        gap={isDesktop ? "0px" : "24px"}
        flexDirection={isDesktop ? "row" : "column"}
        maxWidth={'100%'}
        marginTop={'24px'}
      >
        {items.map((item, _idx) => (
          <div
            key={item.id}
            style={{ 
              width: "400px",
              maxWidth: "100%",
              backgroundColor: "#ffffff",
              borderRadius: isDesktop ? (_idx === 0 ? "24px 0 0 24px" : "0 24px 24px 0") : "24px",
              padding: isDesktop ? (_idx === 0 ? "12px 12px 12px 24px" : "12px 24px 12px 12px") : "16px",
            }}
          >
            <Typography mb={'12px'} color={"#252529"} fontWeight={700} fontSize="20px" letterSpacing="0 !important" fontFamily="Inter !important" textAlign="center">{item.title}</Typography>
            {item.items.map((item2, _idx2) => <div key={_idx2}>
              <img src={item2.image} alt={item2.title} width={40} style={{ display: 'block', marginInline: 'auto', marginBottom: '12px'}} />
              <Typography mb={'8px'} color={"#252529"} fontSize="14px" letterSpacing="0 !important" fontFamily="Inter !important"><span style={{ fontWeight: 'bold'}}>{item2.title}</span>{item2.description}</Typography>
              {item2.items && (
                <ul style={{ paddingLeft: '24px' }}>
                  {item2.items.map((item3, _idx3) => <li key={_idx3} style={{ color: '#252529', marginBottom: '8px', fontSize: '14px', fontFamily: 'Inter !important', fontWeight: '300', lineHeight: '1.75'}}>{item3}</li>)}
                </ul>
              )}
            </div>)}
          </div>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 48px 24px;
  background-color: #0c4200;
  @media (min-width: 900px) {
    padding: 92px 24px;
  }
`;
