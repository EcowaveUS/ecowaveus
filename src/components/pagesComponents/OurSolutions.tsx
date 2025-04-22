import { Box, Typography } from "@mui/material";
import { services } from "../../constants/data";
import { ServicesCard } from "../cards/ServicesCard";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import Slider from "react-slick";
import styled from "styled-components";


export const OurSolutions = () => {
  const windowWidth = useWindowWidth();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          padding: "7rem 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "50%",
            "@media (max-width: 768px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            variant={windowWidth > 768 ? "h3" : "h4"}
            sx={{
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Empowering your <br /> sustainable choices
          </Typography>
          <Typography
            variant={windowWidth > 768 ? "body1" : "body2"}
            sx={{
              color: "#6C6C78",
              fontStyle: "normal",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            Driving innovation in renewable technologies for a greener tomorrow:
            harnessing the power of sustainability to transform energy
            consumption and foster environmental stewardship.
          </Typography>
        </Box>
        {windowWidth > 768 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              margin: "5rem 0",
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
        ) : (
          <StyledSlider {...settings}>
            {services.map((solution, index) => (
              <ServicesCard
                key={index}
                title={solution.title}
                content={solution.content}
                url={solution.url}
                icon={solution.icon}
              />
            ))}
          </StyledSlider>
        )}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "auto",
            top: "0",
            backgroundColor: "transparent",
            zIndex: 1,
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src="src/assets/images/wave-vector-black.png"
            alt="Group"
          />
        </Box>
      </Box>
    </>
  );
};

const StyledSlider = styled(Slider)`
  width: 100%;
  padding: 2rem 0;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  align-self: center;
  .slick-track {
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }


`;