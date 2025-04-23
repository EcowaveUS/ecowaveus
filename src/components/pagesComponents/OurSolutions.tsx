import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

export const OurSolutions = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box bgcolor={"#F6F6F6"}>
      <Box
        component={"div"}
        className="container"
        paddingTop={isDesktop ? "80px" : "36px"}
        paddingBottom={isDesktop ? "80px" : "48px"}
        display={"flex"}
        flexDirection={"column"}
        gap={isDesktop ? "80px" : "48px"}
      >
        <Box
          component={"div"}
          maxWidth={"612px"}
          marginLeft={"auto"}
          marginRight={"auto"}
        >
          <Typography
            fontWeight={600}
            fontSize={isDesktop ? "48px" : "24px"}
            align="center"
            color={"#252529"}
            lineHeight={"120%"}
          >
            Empowering your sustainable choices
          </Typography>
          <Typography
            marginTop={"16px"}
            fontSize={isDesktop ? "16px" : "14px"}
            align="center"
            color={"#181A1C80"}
          >
            Driving innovation in renewable technologies for a greener tomorrow:
            harnessing the power of sustainability to transform energy
            consumption and foster environmental stewardship.
          </Typography>
        </Box>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={12}
          slidesPerView={"auto"}
          freeMode={true}
          style={{ maxWidth: "100%" }}
        >
          <SwiperSlide style={{ width: "fit-content" }}>
            <Box
              borderRadius={"12px"}
              padding={"24px"}
              bgcolor={"white"}
              display={"flex"}
            >
              {services.map((s, _idx) => (
                <Box key={_idx} display={"flex"} alignItems={"stretch"}>
                  <Box width={"259px"} minWidth={"259px"} maxWidth={"259px"}>
                    <Box
                      width={"48px"}
                      height={"48px"}
                      borderRadius={"999px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bgcolor={"#1FA500"}
                    >
                      <img src={s.iconNew} alt={s.title} />
                    </Box>
                    <Typography
                      marginTop={"24px"}
                      fontWeight={600}
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
                      }}
                    >
                      Learn more
                    </Link>
                  </Box>
                  {_idx !== services.length - 1 && (
                    <Box
                      marginLeft={"32px"}
                      marginRight={"32px"}
                      bgcolor={"#181A1C1A"}
                      width={"1px"}
                      height={"100%"}
                    ></Box>
                  )}
                </Box>
              ))}
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
