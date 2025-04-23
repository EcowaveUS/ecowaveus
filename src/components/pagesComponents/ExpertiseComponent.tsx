import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import expertiseImage from "../../assets/images/expertise.png";

export const ExpertiseComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #3D3D43 0%, #202023 100%)",
      }}
    >
      <Box
        component={"div"}
        className="container"
        paddingTop={isDesktop ? "48px" : "80px"}
        paddingBottom={"48px"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column-reverse"}
        gap={isDesktop ? "80px" : "32px"}
        alignItems={isDesktop ? "center" : "flex-start"}
      >
        <Box component={"div"} width={isDesktop ? "50%" : "100%"}>
          <img
            src={expertiseImage}
            alt="expertise"
            width={"100%"}
            height={"auto"}
          />
        </Box>
        <div>
          <Typography
            fontSize={isDesktop ? "48px" : "32px"}
            color="white"
            lineHeight={"110%"}
          >
            Expertise at great prices
          </Typography>
          <Typography
            fontSize={"16px"}
            color="#f7f7f7"
            lineHeight={"28px"}
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
        </div>
      </Box>
    </Box>
  );
};
