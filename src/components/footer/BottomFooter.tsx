import { Box, Typography, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const BottomFooter = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component="div">
      <Box
        component="div"
        height="1px"
        bgcolor={isDesktop ? "#FFFFFF0D" : "#D8D8DE"}
        width="100%"
        marginX={isDesktop ? "0" : "20px"}
      ></Box>
      <Box
        component="div"
        className="container1"
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
        >
          © 2021 Ecowave. All Rights Reserved.
        </Typography>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          gap={isDesktop ? "24px" : "12px"}
        >
          <Link
            to={
              import.meta.env.VITE_FACEBOOK_LINK || "https://www.facebook.com/"
            }
          >
            {isDesktop ? (
              <FaFacebook size={18} />
            ) : (
              <Box
                borderRadius={"999px"}
                bgcolor={"#01162C"}
                width={"32px"}
                height={"32px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FaFacebookF size={14} />
              </Box>
            )}
          </Link>
          <Link
            to={
              import.meta.env.VITE_INSTAGRAM_LINK ||
              "https://www.instagram.com/"
            }
          >
            {isDesktop ? (
              <FaInstagram size={18} />
            ) : (
              <Box
                borderRadius={"999px"}
                bgcolor={"#01162C"}
                width={"32px"}
                height={"32px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FaInstagram size={14} />
              </Box>
            )}
          </Link>
          <Link
            to={
              import.meta.env.VITE_LINKEDIN_LINK || "https://www.linkedin.com/"
            }
          >
            {isDesktop ? (
              <FaLinkedinIn size={18} />
            ) : (
              <Box
                borderRadius={"999px"}
                bgcolor={"#01162C"}
                width={"32px"}
                height={"32px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FaLinkedinIn size={14} />
              </Box>
            )}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
