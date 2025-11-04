import { Box, Typography, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const BottomFooter = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component="div">
      <Box
        component="div"
        height="1px"
        bgcolor={isDesktop ? "#FFFFFF0D" : "#D8D8DE"}
        marginX={isDesktop ? "0" : "20px"}
      ></Box>
      <Box
        component="div"
        className="container"
        paddingTop={isDesktop ? "32px" : "24px"}
        paddingBottom={isDesktop ? "32px" : "48px"}
        display="flex"
        flexDirection={isDesktop ? "row" : "column"}
        gap="24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="#ffffff"
          fontSize={isDesktop ? "12px" : "14px"}
          fontWeight={isDesktop ? "500" : "400"}
          lineHeight={isDesktop ? "150%" : "20px"}
          fontFamily={"Inter !important"}
        >
          © {new Date().getFullYear()} Ecowave. All Rights Reserved.
        </Typography>
        
        {/* Internal Links for SEO Crawlability */}
        <Box
          component="div"
          display="flex"
          flexDirection={isDesktop ? "row" : "column"}
          gap={isDesktop ? "24px" : "12px"}
          alignItems="center"
        >
          <Typography
            component={Link}
            to="/terms-and-conditions"
            color="#ffffff"
            fontSize={isDesktop ? "12px" : "14px"}
            fontWeight={isDesktop ? "500" : "400"}
            lineHeight={isDesktop ? "150%" : "20px"}
            fontFamily={"Inter !important"}
            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Terms and Conditions
          </Typography>
        </Box>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          gap={isDesktop ? "24px" : "12px"}
        >
          <Link
            to={import.meta.env.VITE_GOOGLE_LINK || "https://www.google.com/"}
          >
            <Box
              borderRadius={isDesktop ? 0 : "999px"}
              bgcolor={isDesktop ? "transparent" : "#01162C"}
              width={isDesktop ? "18px" : "32px"}
              height={isDesktop ? "18px" : "32px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                width={"18px"}
                height={"18px"}
                src={
                  isDesktop
                    ? "/images/icons/icon-google.webp"
                    : "/images/icons/icon-google.webp"
                }
                alt="google"
              />
            </Box>
          </Link>
          <Link
            to={
              import.meta.env.VITE_FACEBOOK_LINK || "https://www.facebook.com/"
            }
          >
            <Box
              borderRadius={isDesktop ? 0 : "999px"}
              bgcolor={isDesktop ? "transparent" : "#01162C"}
              width={isDesktop ? "18px" : "32px"}
              height={isDesktop ? "18px" : "32px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={
                  isDesktop
                    ? "/images/icons/icon-facebook-white-1.webp"
                    : "/images/icons/icon-facebook-white-2.webp"
                }
                alt="facebook"
              />
            </Box>
          </Link>
          <Link
            to={
              import.meta.env.VITE_INSTAGRAM_LINK ||
              "https://www.instagram.com/"
            }
          >
            <Box
              borderRadius={isDesktop ? 0 : "999px"}
              bgcolor={isDesktop ? "transparent" : "#01162C"}
              width={isDesktop ? "18px" : "32px"}
              height={isDesktop ? "18px" : "32px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={"/images/icons/icon-instagram-white.webp"}
                alt="instagram"
              />
            </Box>
          </Link>
          <Link
            to={
              import.meta.env.VITE_LINKEDIN_LINK || "https://www.linkedin.com/"
            }
          >
            <Box
              borderRadius={isDesktop ? 0 : "999px"}
              bgcolor={isDesktop ? "transparent" : "#01162C"}
              width={isDesktop ? "18px" : "32px"}
              height={isDesktop ? "18px" : "32px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={"/images/icons/icon-linkedin-white.webp"}
                alt="linkedin"
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
