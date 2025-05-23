import { Box, Typography } from "@mui/material";

export default function SolutionCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <Box
      component={"div"}
      flexDirection={"column"}
      gap={"20px"}
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
        style={{ height: "80px", width: "fit-content" }}
      />
      <Typography
        fontSize={"40px"}
        fontFamily={"Inter !important"}
        color={"#181a1c"}
        fontWeight={700}
        lineHeight={"48px"}
      >
        {title}
      </Typography>
    </Box>
  );
}
