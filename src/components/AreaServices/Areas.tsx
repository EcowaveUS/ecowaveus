import { Box, Theme, useMediaQuery } from "@mui/material";
import serviceMapImageDesktop from "../../assets/images/service-map-desktop.svg";
import serviceMapImageMobile from "../../assets/images/service-map-mobile.svg";
import { AreaServices } from "./AreaServices";

const Areas = ({ cat = 1 }: { cat?: number }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <>
      <Box
        height={isDesktop ? "489px" : "289px"}
        component="div"
        sx={{
          backgroundImage: `url(${
            isDesktop ? serviceMapImageDesktop : serviceMapImageMobile
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
        position={"relative"}
      >
        {isDesktop && (
          <Box
            height={"100%"}
            width={"100%"}
            sx={{
              background:
                "linear-gradient(90deg, #022241 12.57%, rgba(2, 39, 74, 0.91) 29.63%, rgba(3, 46, 89, 0.765732) 43.84%, rgba(5, 87, 167, 0) 100%)",
            }}
          ></Box>
        )}
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
              <AreaServices cat={cat} />
            </div>
          </Box>
        )}
      </Box>
      {!isDesktop && (
        <Box bgcolor={"#01162C"} paddingY={"48px"} width={"100%"}>
          <div className="container">
            <AreaServices cat={cat} />
          </div>
        </Box>
      )}
    </>
  );
};

export default Areas;
