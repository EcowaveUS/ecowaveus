import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const OurSolutionsCards = ({ allowedLinks = true }: { allowedLinks?: boolean }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const isWide = useMediaQuery(`(min-width: 1280px)`);
  const cardBreakpoint = useMediaQuery(`(min-width: 671px)`);
  return cardBreakpoint ? (
    <Box
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      gap={"24px"}
    >
      <Swiper
        modules={isDesktop ? [FreeMode, Pagination] : [Pagination]}
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
        {services.slice(0, 4).map((s, _idx) => (
          <SwiperSlide style={{ width: "fit-content" }} key={_idx}>
            <Box
              borderRadius={
                _idx === 0
                  ? "12px 0 0 12px"
                  : _idx === 3
                  ? "0 12px 12px 0"
                  : "0"
              }
              padding={"24px"}
              paddingRight={_idx !== 3? "8px" : "24px"}
              bgcolor={"white"}
            >
              <Box
                display={"flex"}
                alignItems={"stretch"}
                component={allowedLinks ? Link : "div"}
                to={allowedLinks ? s.url : undefined}
              >
                <Box
                  width={"259px"}
                  minWidth={"259px"}
                  maxWidth={"259px"}
                  height={"268px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  {[1, 2, 3].includes(_idx) ? (
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
                      <img src={s.iconNew} width={48} height={48} alt={s.title} />
                    </Box>) : (
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
                      <img src={s.iconNew} width={_idx > 3 ? 48 : undefined} height={_idx > 3 ? 48 : undefined} alt={s.title} />
                    </Box>
                  )}
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
                  {allowedLinks && (
                    <Typography
                      style={{
                        fontSize: "12px",
                        textDecoration: "underline",
                        color: "#0B6BD9",
                        marginTop: "12px",
                        fontFamily: "Inter !important",
                        lineHeight: "16px",
                        display: "block",
                        width: "fit-content",
                      }}
                    >
                      Learn more
                    </Typography>
                  )}
                </Box>
                {_idx !== 3 && (
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
      <Box
        component={"div"}
        display={"flex"}
        justifyContent={"center"}
      >
        {services.slice(4).map((s, _idx) => (
          <SwiperSlide style={{ width: "fit-content" }} key={_idx}>
            <Box
              borderRadius={
                _idx === 0
                  ? "12px 0 0 12px"
                  : _idx === 1
                  ? "0 12px 12px 0"
                  : "0"
              }
              padding={"24px"}
              paddingRight={_idx !== 1 ? "8px" : "24px"}
              bgcolor={"white"}
            >
              <Box
                display={"flex"}
                alignItems={"stretch"}
                component={allowedLinks ? Link : "div"}
                to={allowedLinks ? s.url : undefined}
              >
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
                    <img src={s.iconNew} width={48} height={48} alt={s.title} />
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
                  {allowedLinks && (
                    <Typography
                      style={{
                        fontSize: "12px",
                        textDecoration: "underline",
                        color: "#0B6BD9",
                        marginTop: "12px",
                        fontFamily: "Inter !important",
                        lineHeight: "16px",
                        display: "block",
                        width: "fit-content",
                      }}
                    >
                      Learn more
                    </Typography>
                  )}
                </Box>
                {_idx !== 1 && (
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
      </Box>
    </Box>
  ) : (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"12px"}
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={'24px'}
    >
      {services.map((s, _idx) => (
        <Box
          key={_idx}
          borderRadius={"12px"}
          padding={"12px 16px"}
          bgcolor={"white"}
          width={'90%'}
          minWidth={'259px'}
          component={allowedLinks ? Link : "div"}
          to={allowedLinks ? s.url : undefined}
        >
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"999px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"#1FA500"}
            border={"1px solid #FFFFFF1A"}
          >
            <img src={s.iconNew} width={(_idx === 2 ||_idx > 3) ? 40 : 32} height={(_idx === 2 || _idx > 3) ? 40 : 32} alt={s.title} />
          </Box>
          <Typography
            marginTop={"16px"}
            fontWeight={600}
            fontFamily={"Inter !important"}
            fontSize={"32px"}
            color={"#252529"}
            lineHeight={"100%"}
          >
            {s.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
