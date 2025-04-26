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
  const isWide = useMediaQuery(`(min-width: 1371px)`);

  return (
    <Box
      component={"div"}
      bgcolor={"white"}
      paddingY={isDesktop ? "32px" : "20px"}
    >
      <Swiper
        modules={[FreeMode]}
        spaceBetween={isDesktop ? 12 : 6}
        slidesPerView={"auto"}
        freeMode={true}
        slidesOffsetBefore={isDesktop ? 0 : 20}
        slidesOffsetAfter={isDesktop ? 0 : 20}
        style={{ maxWidth: "fit-content" }}
      >
        {[...Array(isWide ? 1 : 50)]
          .flatMap(() => images)
          .map((image, _idx) => (
            <SwiperSlide style={{ width: "fit-content" }} key={_idx}>
              <Box
                component={"div"}
                paddingY={isDesktop ? "12px" : "6px"}
                paddingX={isDesktop ? "24px" : "13px"}
              >
                <img
                  style={{ filter: "grayscale(100%)" }}
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
  );
};
