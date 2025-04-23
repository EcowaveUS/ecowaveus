import { Box, Theme, useMediaQuery } from "@mui/material";
import serviceMapImage from "../../assets/images/service-map.png";
import { AreaServices } from "./AreaServices";

const Areas = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <>
      <Box
        height={isDesktop ? "489px" : "289px"}
        component="div"
        sx={{
          backgroundImage: `url(${serviceMapImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
        position={"relative"}
      >
        {/* <Box
          height={"100%"}
          width={"100%"}
          sx={{
            background: isDesktop
              ? "linear-gradient(90deg, #022241 12.57%, rgba(2, 39, 74, 0.91) 29.63%, rgba(3, 46, 89, 0.765732) 43.84%, rgba(5, 87, 167, 0) 100%)"
              : "linear-gradient(90deg, #022241 0%, rgba(3, 44, 84, 0.81) 40%, rgba(4, 66, 126, 0.39825) 75.5%, rgba(5, 87, 167, 0) 100%)",
          }}
        ></Box> */}
        {isDesktop && (
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            right={0}
            height={"100%"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <div className="container">
              <AreaServices />
            </div>
          </Box>
        )}
      </Box>
      {!isDesktop && (
        <Box bgcolor={"#01162C"} paddingY={"48px"} width={"100%"}>
          <div className="container">
            <AreaServices />
          </div>
        </Box>
      )}
    </>
  );
};

export default Areas;
