import { Box, Container, Grid, Typography } from "@mui/material";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import gridColImg  from '../../assets/images/grid-col-img.png'

export const Expertise = () => {
  const windowWidth = useWindowWidth();
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "linear-gradient(to bottom, #55555D, #252529)",
        position: "relative",
        width: "100%",
      }}
    >
      <Grid container alignItems="center" p={3} spacing={6}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <Typography
            variant={windowWidth > 768 ? "h3" : "h4"}
            fontWeight="bold"
            sx={{ mb: 4, color: "#fff", fontWeight: "700" }}
          >
            Expertise at great <br /> prices
          </Typography>
          <Typography variant={windowWidth > 768 ? 'body1' : 'body2'} sx={{ mb: 4, color: "#fff" }}>
            At EcowaveUS, we provide sustainable energy solutions like heat
            pumps, EV chargers, solar panels, and home batteries to maximize
            efficiency, comfort, and savings.
          </Typography>
          <Typography variant={windowWidth > 768 ? 'body1' : 'body2'}  sx={{ mb: 2, color: "#fff" }}>
            We simplify affordable electrification, helping you find the best
            combination for your home and budget.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            component="img"
            src={gridColImg}
            alt="Descriptive alt"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
