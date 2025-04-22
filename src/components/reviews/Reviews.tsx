import { Box, Grid, Typography } from "@mui/material";
import { RightArrow } from "../cards/RightArrow";
import { LeftArrow } from "../cards/LeftArrow";
import Slider from "react-slick";
import { useRef } from "react";
import reviews from "../../reviews.json";
import styled from "styled-components";
import CardReview from "../cards/CardReview";
import useWindowWidth from "../../custom-hooks/useWindowWidth";

export const Reviews = () => {
  const windowWidth = useWindowWidth();
  const data = reviews;
  const sliderRef = useRef<Slider>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows:windowWidth > 960 ? true : false,
    nextArrow: windowWidth > 960 ? <RightArrow onClick={handleNextClick} /> : undefined,
    prevArrow: windowWidth > 960 ? <LeftArrow onClick={handlePrevClick} /> : undefined,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        zIndex: 2,
        padding: "5rem",
        "@media (max-width: 768px)": {
          padding: "2rem 1rem",
        },
      }}
    >
      <Grid item xs={12} md={4}>
        <Typography
          variant={windowWidth > 768 ? "h3" : "h4"}
          mb={4}
          sx={{
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          What our client say about us
        </Typography>
        <Typography
          variant={windowWidth > 768 ? "body1" : "body2"}
          color="#252529"
          sx={{
            '@media (max-width: 768px)': {
              textAlign: "center",
            },
          }}
        >
          Explore the personal stories of our customers and see how Ecowave’s
          sustainable solutions have enriched their lives.
        </Typography>
      </Grid>

      {/* Columna derecha (8 columnas) */}
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <StyledSlider ref={sliderRef} {...settings}>
            {data.map((review) => (
              <CardReview
                key={review.id}
                firstName={review.firstName}
                lastName={review.lastName}
                description={review.description}
              />
            ))}
          </StyledSlider>
        </Box>
      </Grid>
    </Grid>
  );
};
const StyledSlider = styled(Slider)`
  width: 100%;
  padding: 2rem 0;
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
  .slick-list {
    padding: 0 1rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;
