import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Box, Theme, useMediaQuery } from "@mui/material";

interface Props {
  images: string[];
}

export const OursBrands: React.FC<Props> = ({ images }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Box bgcolor={"white"}>
      <Box
        component={"div"}
        className="container"
        paddingY={isDesktop ? "32px" : "20px"}
      >
        <Swiper
          modules={[FreeMode]}
          spaceBetween={isDesktop ? 12 : 6}
          slidesPerView={"auto"}
          freeMode={true}
          style={{ maxWidth: "100%" }}
        >
          {images.map((image, _idx) => (
            <SwiperSlide style={{ width: "fit-content" }} key={_idx}>
              <Box
                component={"div"}
                paddingY={isDesktop ? "12px" : "6px"}
                paddingX={isDesktop ? "24px" : "13px"}
              >
                <img
                  src={image}
                  alt={`brand-${_idx}`}
                  height={isDesktop ? "60px" : "33px"}
                  width={"auto"}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
