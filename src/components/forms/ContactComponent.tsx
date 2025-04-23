import { LocationInfo } from "./LocationInfo";
import { ContactForm } from "./ContactForm";
import { Box, Theme, useMediaQuery } from "@mui/material";

export const ContactComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"} bgcolor={"#F5F5F5"}>
      <Box
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
