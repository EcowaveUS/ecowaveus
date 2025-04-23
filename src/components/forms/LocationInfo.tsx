import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { FaEnvelope, FaMapMarked, FaPhone, FaRegClock } from "react-icons/fa";

export const LocationInfo = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"}>
      <Typography
        fontSize={isDesktop ? "48px" : "24px"}
        fontWeight={600}
        color={"#252529"}
      >
        Get in touch today
      </Typography>
      <Box
        component={"div"}
        display={"flex"}
        flexDirection={"column"}
        gap={"12px"}
        marginTop={"16px"}
      >
        <Box display={"flex"} gap={"6px"}>
          <FaEnvelope
            size={20}
            color="#6C6C78"
            style={{ minWidth: "20px", marginTop: "5px" }}
          />
          <Typography lineHeight={"30px"} fontSize={"16px"}>
            Info@ecowaveus.com
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"}>
          <FaPhone
            size={20}
            color="#6C6C78"
            style={{ minWidth: "20px", marginTop: "5px" }}
          />
          <Typography lineHeight={"30px"} fontSize={"16px"}>
            (978) 500 4081
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"}>
          <FaRegClock
            size={20}
            color="#6C6C78"
            style={{ minWidth: "20px", marginTop: "5px" }}
          />
          <Typography lineHeight={"30px"} fontSize={"16px"}>
            Monday -Friday 8:00 AM - 5:00 PM
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"}>
          <FaMapMarked
            size={20}
            color="#6C6C78"
            style={{ minWidth: "20px", marginTop: "5px" }}
          />
          <Typography lineHeight={"30px"} fontSize={"16px"}>
            22 Broadway
            <br />
            Beverly, MA 01915
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
