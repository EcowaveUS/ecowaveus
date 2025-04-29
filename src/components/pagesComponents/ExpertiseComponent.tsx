import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import expertiseImage from "../../assets/images/expertise.svg";

export const ExpertiseComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        background: isDesktop
          ? "linear-gradient(180deg, #3D3D43 0%, #202023 100%)"
          : "linear-gradient(180deg, #55555D 0%, #252529 100%)",
      }}
    >
      <Box
        component={"div"}
        className="container"
        paddingTop={isDesktop ? "64px" : "80px"}
        paddingBottom={isDesktop ? "64px" : "48px"}
        display={"flex"}
        gap={isDesktop ? "80px" : "32px"}
        alignItems={isDesktop ? "center" : "flex-start"}
        flexDirection={isDesktop ? "row" : "column-reverse"}
      >
        <Box component={"div"} width={isDesktop ? "50%" : "100%"}>
          <img
            src={expertiseImage}
            alt="expertise"
            width={"100%"}
            height={"auto"}
          />
        </Box>
        <Box component={"div"} width={isDesktop ? "50%" : "100%"}>
          <Typography
            fontSize={isDesktop ? "48px" : "32px"}
            color="white"
            lineHeight={isDesktop ? "100%" : "110%"}
            fontWeight={600}
            fontFamily={"Inter !important"}
          >
            Expertise at Great Prices
          </Typography>
          <Typography
            fontSize={"16px"}
            fontWeight={400}
            fontFamily={"Inter !important"}
            color={isDesktop ? "#D8D8DE" : "#f7f7f7"}
            lineHeight={isDesktop ? "150%" : "28px"}
            marginTop={isDesktop ? "32px" : "24px"}
          >
            At EcowaveUS, we provide sustainable energy solutions like heat
            pumps, EV chargers, solar panels, and home batteries to maximize
            efficiency, comfort, and savings.
            <br />
            <br />
            We simplify affordable electrification, helping you find the best
            combination for your home and budget.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
