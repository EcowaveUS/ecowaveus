import { Box, Typography } from "@mui/material";

export default function SavingComponent({
  title1,
  title2,
  price,
  title3,
}: {
  title1: string;
  title2: string;
  price: string;
  title3?: string;
}) {
  return (
    <Box
      component={"div"}
      flexDirection={"column"}
      alignItems={"center"}
      display={"flex"}
    >
      <img
        width={"40px"}
        height={"auto"}
        src="/images/circle-check.png"
        alt="saving-icon"
      />
      <Typography
        fontSize={"14px"}
        fontFamily={"Inter !important"}
        color={"#181a1c"}
        fontWeight={400}
        textAlign={"center"}
        textTransform={"uppercase"}
        mt={"2px"}
      >
        {title1}
      </Typography>
      <Typography
        fontSize={"14px"}
        fontFamily={"Inter !important"}
        color={"#181a1c"}
        fontWeight={400}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        {title2}&nbsp;
        <span style={{ fontWeight: 700, color: "#198400" }}>{price}</span>
      </Typography>
      {title3 && (
        <Typography
          fontSize={"14px"}
          fontFamily={"Inter !important"}
          color={"#b33727"}
          fontWeight={700}
          textAlign={"center"}
          textTransform={"uppercase"}
          mt={"2px"}
        >
          {title3}
        </Typography>
      )}
    </Box>
  );
}
