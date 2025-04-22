import { Box, Divider, Typography } from "@mui/material";
import locationsImage from "../../assets/images/locations-background.png";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import { CommonButton } from "../common/CommonButton";

const Areas = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth <= 1024 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            margin: "0",
          }}
        >
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16 / 12", // o la relación que necesites
              overflow: "hidden",
            }}
          >
            <img
              src={locationsImage}
              alt="locations"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "80% center",
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#01162C",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "24px",
              width: "100%",
              padding: "48px 20px",
            }}
          >
            <Typography variant="h4" color="#fff">
              Service Areas
            </Typography>
            <Divider
              sx={{ width: "85%", backgroundColor: "#fff", height: "1px" }}
            />
            <Typography variant="body1" color="#fff">
              North Shore of Massachusetts
            </Typography>
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                lineHeight: "2.5rem",
              }}
            >
              Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester
              Marblehead | Wenham | Ipswich | Lynnfield
            </Typography>
            <CommonButton
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#35AE1A",
                padding: "12px 20px",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              View more
            </CommonButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            backgroundImage: `url(${locationsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            aspectRatio: "19/7",
            padding: "0 4rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "24px",
              width: "45%",
              paddingLeft: "4rem",
            }}
          >
            <Typography variant="h3" color="#fff">
              Service Areas
            </Typography>
            <Divider
              sx={{ width: "85%", backgroundColor: "#fff", height: "1px" }}
            />
            <Typography variant="body1" color="#fff">
              North Shore of Massachusetts
            </Typography>
            <Typography variant="body2" color="#fff">
              Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester
              Marblehead | Wenham | Ipswich | Lynnfield
            </Typography>
            <CommonButton
              variant="contained"
              sx={{
                backgroundColor: "#35AE1A",
                padding: "12px 20px",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: "#35AE1A",
                },
              }}
            >
              View more
            </CommonButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Areas;
