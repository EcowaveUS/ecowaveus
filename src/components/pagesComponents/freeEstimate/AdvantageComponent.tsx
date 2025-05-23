import { Box, Typography } from "@mui/material";

export default function AdvantageComponent({
  title,
  offValue,
  date,
}: {
  title: string;
  offValue: string;
  date: string;
}) {
  return (
    <Box
      component={"div"}
      flexDirection={"column"}
      gap={"20px"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
      py={"28px"}
      px={"24px"}
      display={"flex"}
      borderRadius={"20px"}
      border={"3px dashed #0c4200"}
    >
      <Typography
        fontSize={"18px"}
        fontFamily={"Inter !important"}
        color={"#181a1c"}
        fontWeight={600}
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Box
        bgcolor={"#198400"}
        color={"white"}
        textAlign={"center"}
        fontWeight={600}
        fontSize={"16px"}
        fontFamily={"Inter !important"}
        padding={"8px"}
        width={"100%"}
        borderRadius={"12px"}
      >
        {offValue} OFF
      </Box>
      <Typography
        fontSize={"14px"}
        fontFamily={"Inter !important"}
        color={"#181a1c"}
        fontWeight={400}
        textAlign={"center"}
      >
        Expires {date}
      </Typography>
    </Box>
  );
}
