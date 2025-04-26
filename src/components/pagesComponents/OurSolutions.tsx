import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const OurSolutions = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const isWide = useMediaQuery(`(min-width: 1280px)`);
  return (
    <Box bgcolor={"#F6F6F6"}>
      <Box
        component={"div"}
        paddingTop={isDesktop ? "80px" : "36px"}
        paddingBottom={isDesktop ? (isWide ? "80px" : "35px") : "16px"}
        display={"flex"}
        flexDirection={"column"}
        gap={isDesktop ? "80px" : "48px"}
      >
        <Box
          component={"div"}
          maxWidth={"612px"}
          marginLeft={"auto"}
          marginRight={"auto"}
          className="container"
        >
          <Typography
            fontWeight={600}
            fontSize={isDesktop ? "48px" : "24px"}
            align="center"
            color={isDesktop ? "#181A1C" : "#252529"}
            lineHeight={isDesktop ? "100%" : "32px"}
            fontFamily={
              isDesktop ? "AvenirNext !important" : "Inter !important"
            }
          >
            Empowering your sustainable choices
          </Typography>
          <Typography
            marginTop={"16px"}
            fontSize={isDesktop ? "16px" : "14px"}
            align="center"
            lineHeight={isDesktop ? "150%" : "20px"}
            fontFamily={"Inter !important"}
            color={isDesktop ? "#181A1C80" : "#6C6C78"}
            letterSpacing={isDesktop ? "0.01em" : "0.02em"}
          >
            Driving innovation in renewable technologies for a greener tomorrow:
            harnessing the power of sustainability to transform energy
            consumption and foster environmental stewardship.
          </Typography>
        </Box>
        <Swiper
          modules={[FreeMode, Pagination]}
          className="solutions-swiper"
          spaceBetween={0}
          slidesPerView={"auto"}
          freeMode={true}
          style={{ maxWidth: "100%" }}
          slidesOffsetBefore={isWide ? 0 : 20}
          slidesOffsetAfter={isWide ? 0 : 20}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
        >
          {services.map((s, _idx) => (
            <SwiperSlide style={{ width: "fit-content" }} key={_idx}>
              <Box
                borderRadius={
                  _idx === 0
                    ? "12px 0 0 12px"
                    : _idx === services.length - 1
                    ? "0 12px 12px 0"
                    : "0"
                }
                padding={"24px"}
                paddingRight={_idx !== services.length - 1 ? "8px" : "24px"}
                bgcolor={"white"}
              >
                <Box display={"flex"} alignItems={"stretch"}>
                  <Box
                    width={"259px"}
                    minWidth={"259px"}
                    maxWidth={"259px"}
                    height={"268px"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={"48px"}
                      height={"48px"}
                      borderRadius={"999px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bgcolor={"#1FA500"}
                      border={"1px solid #FFFFFF1A"}
                    >
                      <img src={s.iconNew} alt={s.title} />
                    </Box>
                    <Typography
                      marginTop={"24px"}
                      fontWeight={600}
                      fontFamily={"Inter !important"}
                      fontSize={isDesktop ? "48px" : "32px"}
                      color={"#252529"}
                      lineHeight={"100%"}
                    >
                      {s.title}
                    </Typography>
                    <Typography
                      marginTop={"24px"}
                      fontSize={"16px"}
                      color={"#0B081F80"}
                      lineHeight={"150%"}
                      fontFamily={"Inter !important"}
                      sx={{
                        lineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {s.content}
                    </Typography>
                    <Link
                      to={s.url}
                      style={{
                        fontSize: "12px",
                        textDecoration: "underline",
                        color: "#0B6BD9",
                        marginTop: "12px",
                        fontFamily: "Inter !important",
                        lineHeight: "16px",
                        display: "block",
                      }}
                    >
                      Learn more
                    </Link>
                  </Box>
                  {_idx !== services.length - 1 && (
                    <Box
                      marginLeft={"32px"}
                      bgcolor={"#181A1C1A"}
                      width={"1px"}
                      height={"268px"}
                    ></Box>
                  )}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
