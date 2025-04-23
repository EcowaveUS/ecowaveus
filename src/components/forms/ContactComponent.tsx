import { LocationInfo } from "./LocationInfo";
import { ContactForm } from "./ContactForm";
import { Box, Theme, useMediaQuery } from "@mui/material";
import waveVectorImage from "../../assets/images/wave-vector.png";

export const ContactComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"} bgcolor={"#F5F5F5"} position={"relative"}>
      <img
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "auto",
        }}
        src={waveVectorImage}
        alt="wave-vector"
      />
      <Box
        zIndex={1}
        position={"relative"}
        component={"div"}
        className="container"
        paddingTop={isDesktop ? "92px" : "44px"}
        paddingBottom={isDesktop ? "92px" : "0"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={"24px"}
        justifyContent={"space-between"}
      >
        <Box component={"div"} width={isDesktop ? "50%" : "100%"}>
          <LocationInfo />
        </Box>
        <Box component={"div"} width={isDesktop ? "50%" : "100%"}>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};
