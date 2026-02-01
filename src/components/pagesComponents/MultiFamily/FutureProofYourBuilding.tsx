import styled from "styled-components";
import { Theme, Typography, useMediaQuery } from "@mui/material";

const items = [
  {
    id: 1,
    icon: "/images/multi-family/Multi-family-monetize-EV.webp",
    title: "Monetize EV charging",
    description: "set resident pricing so drivers pay to charge, turn EV parking into a modern amenity that can generate revenue"
  },
  {
    id: 2,
    icon: "/images/multi-family/Multi-family-flexible-install.webp",
    title: "Flexible installation",
    description: "available as wall-mounted or pedestal-mounted, with single or dual ports depending on how many parking spots you want to serve"
  },
  {
    id: 3,
    icon: "/images/multi-family/Multi-family-cable.webp",
    title: "Clean, safe cable setup",
    description: "options include integrated cable management and longer cable lengths (commonly 18 ft / 23 ft) to reach different vehicles while keeping parking areas tidy"
  },
  {
    id: 4,
    icon: "/images/multi-family/Multi-family-payment-access.webp",
    title: "Easy payment access",
    description: "supports Tap to Charge (NFC), app-based starts, and ChargePoint card access, great for resident-only setups or shared resident/guest parking!"
  },
];

export const FutureProofYourBuilding: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography
        color={"#252529"}
        fontWeight={isDesktop ? 600 : 800}
        fontSize={isDesktop ? "48px" : "32px"}
        letterSpacing={"0 !important"}
        textAlign={"center"}
        lineHeight={isDesktop ? "52px" : "40px"}
        fontFamily={"Inter !important"}
      >
        Complete Your Electrification with Smart EV Charging
      </Typography>
      <Typography
        color={"#919293"}
        fontSize={isDesktop ? "16px" : "14px"}
        letterSpacing={"0 !important"}
        fontFamily={"Inter !important"}
      >
        Recommended Charger: <span style={{ fontWeight: 700 }}>ChargePoint for Multi-Family</span>
      </Typography>
      <Typography
        color={"#919293"}
        fontSize={isDesktop ? "16px" : "14px"}
        letterSpacing={"0 !important"}
        fontFamily={"Inter !important"}
        textAlign={"center"}
      >
        Give residents an EV charging experience that’s as simple as it should be: tap with a phone or ChargePoint card, plug in, and charge.
      </Typography>
      <ItemsWrapper>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.icon} alt={item.title} height={isDesktop ? "100px" : "80px"} style={{ marginBottom: '16px', marginInline: 'auto', display: 'block'}} />
            <Typography color={"#252529"} fontSize={isDesktop ? "16px" : "14px"} letterSpacing={"0 !important"} fontFamily={"Inter !important"}>
              <span style={{ fontWeight: 700 }}>{item.title}: </span>{item.description}
            </Typography>
          </div>
        ))}
      </ItemsWrapper>
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
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding: 92px 24px;
  }
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;