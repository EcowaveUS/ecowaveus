import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const InstallationProcess = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box bgcolor={"#F7F7F7"} py={isDesktop ? "96px" : "48px"}>
      <Box component={"div"} className="container-2">
        <Typography
          fontSize={isDesktop ? "16px" : "14px"}
          lineHeight={isDesktop ? "24px" : "20px"}
          letterSpacing={isDesktop ? "0 !important" : "1% !important"}
          color={"#6C6C78"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontFamily={"Inter !important"}
        >
          Step by Step Guide
        </Typography>
        <Typography
          mt={"16px"}
          fontSize={isDesktop ? "48px" : "32px"}
          lineHeight={isDesktop ? "58px" : "40px"}
          fontWeight={isDesktop ? 600 : 800}
          fontFamily={isDesktop ? "Inter !important" : "Montserrat !important"}
          color={"#252529"}
        >
          Installation Process
        </Typography>
        <Box mt={isDesktop ? "64px" : "32px"}>
          <Swiper
            direction={isDesktop ? "vertical" : "horizontal"}
            className="installation-process"
            slidesPerView={1}
            spaceBetween={4}
            style={{ height: isDesktop ? "420px" : "auto" }}
            modules={isDesktop ? [Pagination] : []}
            pagination={isDesktop ? { clickable: true } : false}
          >
            <SwiperSlide>
              <Box
                pr={isDesktop ? "108px" : "0px"}
                display={"flex"}
                flexDirection={isDesktop ? "row" : "column-reverse"}
                gap={isDesktop ? "24px" : "32px"}
                alignItems={isDesktop ? "center" : "start"}
                height={isDesktop ? "420px" : "auto"}
              >
                <Box
                  width={isDesktop ? "min(408px, 50%)" : "100%"}
                  minWidth={isDesktop ? "min(408px, 50%)" : "100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={isDesktop ? "48px" : "32px"}
                >
                  <Box
                    pl={isDesktop ? "24px" : "20px"}
                    borderLeft={"2px solid #D8D8DE"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Montserrat !important"}
                      color={"#252529"}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={400}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#6C6C78"}
                    >
                      Contact us to discuss your project and schedule an
                      assessment
                    </Typography>
                  </Box>
                  <Box
                    pl={isDesktop ? "24px" : "20px"}
                    borderLeft={"2px solid #D8D8DE"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Montserrat !important"}
                      color={"#252529"}
                    >
                      Get an Estimate
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={400}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#6C6C78"}
                    >
                      Receive a free estimate and information on rebates and
                      financing (including Mass Save 0% HEAT loan if applicable)
                      - We will inform you and help you through the process
                    </Typography>
                  </Box>
                </Box>
                {isDesktop ? (
                  <Box
                    flex={1}
                    height={"100%"}
                    borderRadius={"8px"}
                    sx={{
                      background: "url(/images/heat-pumps-ip-1.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                ) : (
                  <img
                    src="/images/heat-pumps-ip-1.svg"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: "8px" }}
                  />
                )}
                {!isDesktop && (
                  <Typography
                    color={"#6C6C78"}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    letterSpacing={"1% !important"}
                    fontFamily={"Inter !important"}
                  >
                    Olives bbq broccoli meatball marinara. Bianca pesto Chicago
                    roll anchovies meatball Hawaiian parmesan sautéed
                    mozzarella.
                  </Typography>
                )}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                pr={isDesktop ? "108px" : "0px"}
                display={"flex"}
                flexDirection={isDesktop ? "row" : "column-reverse"}
                gap={isDesktop ? "24px" : "32px"}
                alignItems={isDesktop ? "center" : "start"}
                height={isDesktop ? "420px" : "auto"}
              >
                <Box
                  width={isDesktop ? "min(408px, 50%)" : "100%"}
                  minWidth={isDesktop ? "min(408px, 50%)" : "100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={isDesktop ? "48px" : "32px"}
                >
                  <Box
                    pl={isDesktop ? "24px" : "20px"}
                    borderLeft={"2px solid #D8D8DE"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Montserrat !important"}
                      color={"#252529"}
                    >
                      Contract and Schedule
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={400}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#6C6C78"}
                    >
                      Sign the contract and schedule the installation
                    </Typography>
                  </Box>
                  <Box
                    pl={isDesktop ? "24px" : "20px"}
                    borderLeft={"2px solid #D8D8DE"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Montserrat !important"}
                      color={"#252529"}
                    >
                      Contract and Schedule
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={400}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#6C6C78"}
                    >
                      Sign the contract and schedule the installation
                    </Typography>
                  </Box>
                  <Box
                    pl={isDesktop ? "24px" : "20px"}
                    borderLeft={"2px solid #D8D8DE"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Montserrat !important"}
                      color={"#252529"}
                    >
                      Rebates and Incentives Forms
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={400}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#6C6C78"}
                    >
                      We will help you to apply for rebates
                    </Typography>
                    <Typography
                      fontSize={isDesktop ? "16px" : "14px"}
                      lineHeight={isDesktop ? "24px" : "20px"}
                      fontWeight={700}
                      letterSpacing={
                        isDesktop ? "0 !important" : "1% !important"
                      }
                      fontFamily={"Inter !important"}
                      color={"#1FA500"}
                    >
                      Enjoy your new system!
                    </Typography>
                  </Box>
                </Box>
                {isDesktop ? (
                  <Box
                    flex={1}
                    height={"100%"}
                    borderRadius={"8px"}
                    sx={{
                      background: "url(/images/heat-pumps-ip-2.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                ) : (
                  <img
                    src="/images/heat-pumps-ip-2.svg"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: "8px" }}
                  />
                )}
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};
