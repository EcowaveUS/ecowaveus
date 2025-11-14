import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { decarbonization } from "../../constants/data";
import React from "react";

export const Decarbonization = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Box bgcolor={"#0C4200"}>
      <Box
        component={"div"}
        paddingTop={isDesktop ? "80px" : "48px"}
        display={"flex"}
        justifyContent={"center"}
        className={isDesktop ? "container" : ""}
      >
        <Box>
          <Box
            maxWidth={"624px"}
            component={'div'}
          >
            <Typography
              fontWeight={700}
              fontSize={isDesktop ? "48px" : "32px"}
              lineHeight={"100%"}
              fontFamily={"Inter !important"}
              color={"white"}
              textAlign={"center"}
              fontStyle={"italic"}
            >
              Your Decarbonization<br />Journey
            </Typography>
            <Typography
              fontSize={"16px"}
              lineHeight={"150%"}
              fontFamily={"Inter !important"}
              color={"#D8D8DE"}
              textAlign={"center"}
              marginTop={"24px"}
              fontWeight={'500'}
              >
              Transform your home at your own pace.
            </Typography>
          </Box>
          <Box
            position="relative"
            marginTop={"24px"}
          >
            <img
              src="/images/decarbonization/Decarbonization Path with markers.webp"
              alt="Decarbonization Path with markers"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: isMobile ? '150px' : isTablet ? '200px' : '250px',
              }}
            />
            {decarbonization.map((item, _idx) => (
              <React.Fragment key={item.title}>
                <img
                  src={`/images/decarbonization/${item.image}`}
                  alt={item.title}
                  style={{
                    width: isMobile ? '95px' : isTablet ? '125px' : '138px',
                    height: 'auto',
                    position: 'absolute',
                    top: isMobile ? item.imgPosition.mobile.top : isTablet ? item.imgPosition.tablet.top : item.imgPosition.desktop.top,
                    left: isMobile ? item.imgPosition.mobile.left : isTablet ? item.imgPosition.tablet.left : item.imgPosition.desktop.left,
                  }}
                />
                <Box
                  component={'div'}
                  width={isMobile ? '80px' : isTablet ? '160px' : "250px"}
                  position="absolute"
                  top={isMobile ? item.titlePosition.mobile.top : isTablet ? item.titlePosition.tablet.top : item.titlePosition.desktop.top}
                  left={isMobile ? item.titlePosition.mobile.left : isTablet ? item.titlePosition.tablet.left : item.titlePosition.desktop.left}
                  fontFamily={"Inter !important"}
                >
                  <Typography
                    fontSize={isMobile ? '14px' : isTablet ? '16px' : "18px"}
                    fontWeight={'700'}
                    color={"white"}
                    textAlign={isMobile && _idx % 2 === 0 ? 'right' : 'left'}
                  >
                    {item.title}
                  </Typography>
                  {!isMobile && (
                    <Typography
                      fontSize={isDesktop ? "16px" : "12px"}
                      marginTop={"4px"}
                      color={"white"}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Box>
                {!isMobile && item.img && (
                  <img
                    src={`/images/decarbonization/${item.img?.name}`}
                    alt={item.img?.alt}
                    style={{
                      position: 'absolute',
                      borderRadius: '12px',
                      width: isTablet ? '130px' : '160px',
                      top: isTablet ? item.img?.position.tablet.top : item.img?.position.desktop.top,
                      left: isTablet ? item.img?.position.tablet.left : item.img?.position.desktop.left,
                      height: isTablet ? item.img?.height.tablet : item.img?.height.desktop,
                      objectPosition: item.img?.objectPosition,
                      objectFit: 'cover',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
