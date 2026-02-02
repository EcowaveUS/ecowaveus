import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

const items = [
  {
    id: 1,
    icon: "/images/multi-family/Multi-family-solar-icon.webp",
    title: "Solar Panels",
    description: "Generate your own clean energy to power your heat pumps and other electrical loads"
  },
  {
    id: 2,
    icon: "/images/multi-family/Multi-family-home-batteries.webp",
    title: "Energy Storage (Batteries)",
    description: "Keep your critical systems running during outages and stored solar energy at night"
  },
  {
    id: 3,
    icon: "/images/multi-family/Multi-family-water-heater.webp",
    title: "Heat Pump Water Heaters",
    description: "Upgrade to smart, energy efficient hot water and see the savings flow."
  },
];

export const FutureProofYourBuilding = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      bgcolor={"#ffffff"}
      pt={isDesktop ? "92px" : "48px"}
      pb={isDesktop ? "50px" : "48px"}
    >
      <Box
        component={"div"}
        className="container-1"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          color={"#79C966"}
          fontWeight={800}
          fontSize={isDesktop ? "16px" : "14px"}
          fontFamily={"Inter !important"}
          lineHeight={"24px"}
          letterSpacing={"0 !important"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          beyond heating & cooling
        </Typography>
        <Typography
          color={"#252529"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
          marginTop={"24px"}
        >
          Future-Proof Your Building
        </Typography>
        <Box
          marginTop={'48px'}
          display={'grid'}
          gap={'24px'}
          maxWidth={'1200px'}
          gridTemplateColumns={ isDesktop ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)' }
          paddingInline={'12px'}
        >
          {items.map(item => (
            <div key={item.id}>
              <img src={item.icon} alt={item.title} height={80} style={{ display: 'block', marginInline: isDesktop ? 0 : 'auto'}} />
              <Typography color={"#252529"} fontSize="18px" fontWeight={'bold'} letterSpacing="0 !important" fontFamily="Inter !important" marginBlock={'8px'} textAlign={ isDesktop ? 'left' :'center'}>{item.title}</Typography>
              <Typography color={"#252529"} fontSize="14px" letterSpacing="0 !important" fontFamily="Inter !important" marginBottom={"16px"} textAlign={ isDesktop ? 'left' :'center'}>{item.description}</Typography>
              <div style={{ width: '60px', height: '2px', backgroundColor: '#0c4200', marginInline: isDesktop ? 0 : 'auto'}}></div>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
