import { OursBrands } from "../components/brands/OursBrands";
import { SwitchFuture } from "../components/pagesComponents/SwitchFuture";
import { motion } from "framer-motion";
import { OurSolutions } from "../components/pagesComponents/OurSolutions";
import { Helmet } from "react-helmet";
import { brandImages } from "../constants/data";
import Areas from "../components/AreaServices/Areas";
import { Box, Grid as MuiGrid, Typography } from "@mui/material";
import { ContactForm } from "../components/forms/ContactForm";
import { Expertise } from "../components/pagesComponents/Expertise";
import { Reviews } from "../components/reviews/Reviews";

import email from "../assets/icons/Email.png";
import phone from "../assets/icons/Phone.png";
import mark from "../assets/icons/Mark.png";
import waveVector from "../assets/images/wave-vector.png";

export const HomePage = () => {
  const Grid = motion(MuiGrid);
  return (
    <>
      <Helmet>
        <title>ecoWave | Renewable Energy | Solar Energy in Beverly, MA</title>
        <meta
          name="description"
          content="Our solar installation company in Beverly offers solar battery storage, EV charger installations, electric heat pumps and more. Call 978-500-4081 to get started!"
        />
      </Helmet>
      <Grid
        container
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <SwitchFuture />
        <OursBrands images={brandImages} />
        <Expertise />
        <OurSolutions />
        <Reviews />
        <Grid
          sx={{
            position: "relative",
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            padding: "5rem 0",
            zIndex: 2,
            "@media (max-width: 768px)": {
              flexDirection: "column",
              padding: "2rem 0",
            },
          }}
        >
          <Grid
            item
            xs={12}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "60%",
                padding: "0 2.5rem",
                '@media (max-width: 768px)': {
                  width: "100%",
                  padding: "0 2rem",
                },
              }}
            >
              <Typography variant="body2" fontWeight="bold" mb={0.5}>
                Our Services
              </Typography>
              <Typography variant="h3" fontWeight="bold" mb={0.5}>
                Get in touch <br /> today
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2rem",
                  margin: "2rem 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={email}
                    alt="phone"
                    style={{ width: "24px", height: "auto" }}
                  />
                  <Typography variant="body2" fontWeight="bold">
                    Info@ecowaveus.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={phone}
                    alt="phone"
                    style={{ width: "24px", height: "auto" }}
                  />
                  <Typography variant="body2" fontWeight="bold">
                    (978) 500 4081
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={mark}
                    alt="phone"
                    style={{ width: "24px", height: "auto" }}
                  />
                  <Typography variant="body2" fontWeight="bold">
                    Monday -Friday 8:00 AM - 5:00 PM
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={mark}
                    alt="phone"
                    style={{ width: "24px", height: "auto" }}
                  />
                  <Typography variant="body2" fontWeight="bold">
                    22 Broadway <br />
                    Beverly, MA 01915
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 5rem",
                gap: "1rem",
                width: "100%",
                "@media (max-width: 768px)": {
                  padding: "0 1rem",
                },
              }}
            >
              <ContactForm />
            </Box>
          </Grid>
          <img
            src={waveVector}
            alt="ecoWave Logo"
            style={{
              width: "100%",
              aspectRatio: "19 / 5",
              objectFit: "cover",
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: -1,
            }}
          />
        </Grid>
        <Areas />
      </Grid>
    </>
  );
};
