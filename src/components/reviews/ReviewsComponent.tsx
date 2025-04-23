import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import reviews from "../../reviews.json";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { ReviewCard2 } from "../cards/ReviewCard2";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

export const ReviewsComponent = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const swiperRef = useRef<SwiperRef>(null);
  const data = reviews;

  return (
    <Box bgcolor={"#0C4200"}>
      <Box
        component={"div"}
        className="container"
        paddingTop={"80px"}
        paddingBottom={isDesktop ? "80px" : "48px"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={"48px"}
        justifyContent={"space-between"}
      >
        <Box
          component={"div"}
          minWidth={isDesktop ? "400px" : "100%"}
          maxWidth={isDesktop ? "400px" : "100%"}
        >
          <Typography
            fontWeight={600}
            fontSize={isDesktop ? "48px" : "24px"}
            lineHeight={isDesktop ? "58px" : "32px"}
            color={"#fff"}
          >
            What our client say about us
          </Typography>
          <Typography
            fontSize={isDesktop ? "16px" : "14px"}
            color={"#fff"}
            marginTop={"16px"}
          >
            Explore the personal stories of our customers and see how Ecowave's
            sustainable solutions have enriched their lives.
          </Typography>
        </Box>
        <Box
          flex={1}
          maxWidth={isDesktop ? "calc(100% - 448px)" : "100%"}
          paddingX={isDesktop ? "30px" : "0"}
          position={"relative"}
        >
          <Swiper
            ref={swiperRef}
            className="reviews-container"
            modules={[FreeMode, Pagination]}
            spaceBetween={isDesktop ? 32 : 24}
            slidesPerView={"auto"}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
          >
            {data.map((d) => (
              <SwiperSlide
                key={d.id}
                style={{
                  width: isDesktop ? "348px" : "300px",
                  height: "auto",
                }}
              >
                <ReviewCard2
                  description={d.description}
                  firstName={d.firstName}
                  lastName={d.lastName}
                  position={d.position}
                  avatar={d.avatar}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {isDesktop && (
            <>
              <Box
                component={"div"}
                width={"60px"}
                height={"60px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#D2EDCC"}
                borderRadius={"999px"}
                position={"absolute"}
                left={"0"}
                top={"50%"}
                zIndex={1}
                sx={{
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#1FA500",
                  },
                }}
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.swiper.slidePrev();
                }}
              >
                <FaChevronLeft size={16} color="#1E1E1E" />
              </Box>
              <Box
                component={"div"}
                width={"60px"}
                height={"60px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#D2EDCC"}
                borderRadius={"999px"}
                position={"absolute"}
                right={"0"}
                top={"50%"}
                zIndex={1}
                sx={{
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#1FA500",
                  },
                }}
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.swiper.slideNext();
                }}
              >
                <FaChevronRight size={16} color="#1E1E1E" />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
