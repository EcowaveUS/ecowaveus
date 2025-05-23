import { Box, Theme, useMediaQuery } from "@mui/material";
import { ContactForm } from "../../forms/ContactForm";

export default function FreeEstimateContact() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      component={"div"}
      sx={{
        background: "url('/images/free-estimate-contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        component={"div"}
        className="container"
        paddingTop={isDesktop ? "92px" : "48px"}
        paddingBottom={isDesktop ? "92px" : "42px"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={isDesktop ? "96px" : "24px"}
        justifyContent={"space-between"}
        alignItems={isDesktop ? "center" : "flex-start"}
      >
        <Box
          component={"div"}
          minWidth={isDesktop ? "600px" : "100%"}
          id="contact-form"
        >
          <ContactForm btnColor="#022241" />
        </Box>
        <Box component={"div"} flex={1} display={"flex"}></Box>
      </Box>
    </Box>
  );
}
