import { Box, Typography } from "@mui/material";
import { services } from "../../constants/data";
import { ServicesCard } from "../cards/ServicesCard";

export const OurSolutions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5rem",
        "@media (max-width:1024px)": {
          marginTop: "1rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          width: "51%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          Empowering your <br/> sustainable choices
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6C6C78",
            fontStyle: "normal",
            lineHeight: "32px",
            textAlign: "center",
          }}
        >
          Driving innovation in renewable technologies for a greener tomorrow: harnessing the power of sustainability to transform energy consumption and foster environmental stewardship.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "24px",
          margin: "32px 0",
          "@media (max-width:1024px)": {
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          },
        }}
      >
        {services.map((solution, index) => (
          <ServicesCard
            key={index}
            title={solution.title}
            content={solution.content}
            url={solution.url}
            icon={solution.icon}
          />
        ))}
      </Box>
    </Box>
  );
};

