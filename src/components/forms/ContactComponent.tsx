import { LocationInfo } from "./LocationInfo";
import { ContactForm } from "./ContactForm";
import { Box, Theme, useMediaQuery } from "@mui/material";
import waveVectorImage from "../../assets/images/wave-vector.png";

export const ContactComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
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
        paddingTop={isDesktop ? "92px" : "48px"}
        paddingBottom={isDesktop ? "92px" : "0"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={isDesktop ? "96px" : "24px"}
        justifyContent={"space-between"}
      >
        <Box component={"div"} flex={1}>
          <LocationInfo />
        </Box>
        <Box component={"div"} minWidth={isDesktop ? "600px" : "100%"}>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};
