import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { decarbonization } from "../../constants/data";
import React from "react";

export const Decarbonization = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Box bgcolor={"#0C4200"}>
      <Box
        component={"div"}
        paddingTop={isDesktop ? "80px" : "48px"}
        className={isDesktop ? "container" : ""}
        maxWidth={isDesktop ? "1024px" : "100%"}
        paddingBottom={isDesktop ? "74px" : "48px"}
        display={"flex"}
        gap={"32px"}
        justifyContent={isDesktop ? "space-between" : "center"}
      >
        <Box
          width={"624px"}
          position={"relative"}
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
            marginBottom={"24px"}
            fontWeight={'500'}
          >
            Transform your home at your own pace.
          </Typography>
          <Box
            position="relative"
          >
            <img
              src="/images/decarbonization/Decarbonization Path with markers.webp"
              alt="Decarbonization Path with markers"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: isDesktop ? '250px' : '150px',
              }}
            />
            {decarbonization.map((item) => (
              <React.Fragment key={item.title}>
                <img
                  src={`/images/decarbonization/${item.image}`}
                  alt={item.title}
                  style={{
                    width: isDesktop ? '138px' : '95px',
                    height: 'auto',
                    position: 'absolute',
                    top: isDesktop ? item.imgPosition.desktop.top : item.imgPosition.mobile.top,
                    left: isDesktop ? item.imgPosition.desktop.left : item.imgPosition.mobile.left,
                  }}
                />
                <Typography
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontFamily={"Inter !important"}
                  color={"white"}
                  fontWeight={'700'}
                  width={isDesktop ? "200px" : "75px"}
                  position="absolute"
                  top={isDesktop ? item.titlePosition.desktop.top : item.titlePosition.mobile.top}
                  left={isDesktop ? item.titlePosition.desktop.left : item.titlePosition.mobile.left}
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize={isDesktop ? "16px" : "12px"}
                  fontFamily={"Inter !important"}
                  color={"white"}
                  width={isDesktop ? "200px" : "75px"}
                  position="absolute"
                  top={isDesktop ? item.descriptionPosition.desktop.top : item.descriptionPosition.mobile.top}
                  left={isDesktop ? item.descriptionPosition.desktop.left : item.descriptionPosition.mobile.left}
                >
                  {item.description}
                </Typography>
              </React.Fragment>
            ))}
          </Box>
        </Box>
        {isDesktop && (
          <Box flex={1} position="relative" gap="30px" display="flex" flexDirection="column">
            <img
              src="/images/decarbonization/decarbonization photo - electrical upgrade.webp"
              alt="decarbonization photo - electrical upgrade"
              style={{
                display: 'block',
                marginLeft: 'auto',
                width: '170px',
                borderRadius: '12px',
                marginTop: '525px',
                height: '286px',
                objectFit: 'cover',
                objectPosition: 'bottom',
              }}
            />
            <img
              src="/images/decarbonization/decarbonization photo - HP.webp"
              alt="decarbonization photo - HP"
              style={{
                display: 'block',
                marginLeft: '60px',
                marginRight: 'auto',
                width: '170px',
                borderRadius: '12px',
                height: '240px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <img
              src="/images/decarbonization/decarbonization photo - solar.webp"
              alt="decarbonization photo - solar"
              style={{
                display: 'block',
                marginLeft: 'auto',
                width: '170px',
                borderRadius: '12px',
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'left',
              }}
            />
            <img
              src="/images/decarbonization/decarbonization photo - ev charger.webp"
              alt="decarbonization photo - ev charger"
              style={{
                display: 'block',
                marginLeft: '60px',
                marginRight: 'auto',
                width: '170px',
                borderRadius: '12px',
                height: '240px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <img
              src="/images/decarbonization/decarbonization photo - batteries.webp"
              alt="decarbonization photo - batteries"
              style={{
                display: 'block',
                marginLeft: 'auto',
                width: '170px',
                borderRadius: '12px',
                height: '240px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
