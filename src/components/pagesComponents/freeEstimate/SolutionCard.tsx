import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

export default function SolutionCard({
  title,
  image,
  height = 80,
  width = 100,
}: {
  title: string;
  image: string;
  height?: number;
  width?: number;
}) {
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      component={"div"}
      flexDirection={"column"}
      gap={"8px"}
      justifyContent={"end"}
      bgcolor={"white"}
      pt={"48px"}
      pb={"24px"}
      px={"24px"}
      display={"flex"}
      borderRadius={"20px"}
      position={"relative"}
    >
      <img
        width={"24px"}
        height={"24px"}
        src={"/images/plus_in_circle.png"}
        alt={"plus"}
        style={{ position: "absolute", top: "16px", right: "16px" }}
      />
      <img
        src={image}
        alt={title}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
      <Typography
        fontSize={isTablet ? "40px" : "24px"}
        fontFamily={"Inter !important"}
        color={"#2c2c2c"}
        fontWeight={700}
        lineHeight={isTablet ? "48px" : "32px"}
        sx={{
          overflowWrap: "anywhere",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
