import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import reviews from "../../reviews.json";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { ReviewCard2 } from "../cards/ReviewCard2";
import { useRef } from "react";

export const ReviewsComponent = ({ cat = 1 }: { cat?: number }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const swiperRef = useRef<SwiperRef>(null);
  const data = reviews;

  return (
    <Box bgcolor={"#0C4200"}>
      <Box
        component={"div"}
        paddingTop={isDesktop ? "80px" : "48px"}
        className={isDesktop ? "container" : ""}
        paddingBottom={isDesktop ? "74px" : "48px"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={isDesktop ? "32px" : "48px"}
        justifyContent={"space-between"}
      >
        <Box
          component={"div"}
          className={isDesktop ? "" : "container"}
          minWidth={isDesktop ? "400px" : "100%"}
          maxWidth={isDesktop ? "400px" : "100%"}
        >
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "48px" : "24px"}
            lineHeight={isDesktop ? "58px" : "32px"}
            textAlign={isDesktop ? "left" : "center"}
            color={"#fff"}
          >
            What our clients say about us
          </Typography>
          <Typography
            fontWeight={400}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "16px" : "14px"}
            color={"#fff"}
            marginTop={"16px"}
            textAlign={isDesktop ? "left" : "center"}
            lineHeight={isDesktop ? "32px" : "20px"}
          >
            Explore the personal stories of our customers and see how Ecowave's
            sustainable solutions have enriched their lives.
          </Typography>
          {cat === 2 && (
            <img
              alt="google-review"
              style={{
                marginLeft: isDesktop ? "0" : "auto",
                marginRight: isDesktop ? "0" : "auto",
                marginTop: "16px",
                objectFit: "cover",
                borderRadius: "41px",
                display: "flex",
                justifyContent: isDesktop ? "flex-start" : "center",
              }}
              src="/images/google-review.png"
              width={"150px"}
              height="auto"
            />
          )}
        </Box>
        <Box
          flex={1}
          maxWidth={isDesktop ? "calc(100% - 432px)" : "100%"}
          paddingX={isDesktop ? "61px" : "0"}
          position={"relative"}
        >
          <Swiper
            ref={swiperRef}
            className="reviews-container"
            modules={isDesktop ? [FreeMode, Pagination] : [Pagination]}
            spaceBetween={isDesktop ? 32 : 24}
            slidesPerView={"auto"}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            slidesOffsetAfter={isDesktop ? 0 : 20}
            slidesOffsetBefore={isDesktop ? 0 : 20}
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
                left={"31px"}
                top={"50%"}
                zIndex={1}
                sx={{
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#D2EDCC",
                  },
                }}
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.swiper.slidePrev();
                }}
              >
                <img
                  src="images/icons/icon-chevron-left.svg"
                  alt="arrow-left"
                />
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
                right={"31px"}
                top={"50%"}
                zIndex={1}
                sx={{
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#D2EDCC",
                  },
                }}
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.swiper.slideNext();
                }}
              >
                <img
                  src="/images/icons/icon-chevron-right.svg"
                  alt="arrow-right"
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
