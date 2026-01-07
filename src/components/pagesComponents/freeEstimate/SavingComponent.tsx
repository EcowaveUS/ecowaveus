import { Box, Typography } from "@mui/material";

export default function SavingComponent({
  title1,
  title2,
  title3,
  title4,
  title5,
  price1,
  price2,
}: {
  title1: string;
  title2: string;
  title3?: string;
  title4?: string;
  title5?: string;
  price1?: string;
  price2?: string;
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
        src="/images/circle-check.webp"
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
        {price1 && (<span style={{ fontWeight: 700, color: "#198400" }}>{price1}</span>)}
      </Typography>
      {title3 && (
        <Typography
          fontSize={"14px"}
          fontFamily={"Inter !important"}
          color={"#181a1c"}
          fontWeight={400}
          textAlign={"center"}
          textTransform={"uppercase"}
          marginBlock={"4px"}
        >
          {title3}&nbsp;
          {price2 && (<span style={{ fontWeight: 700, color: "#198400" }}>{price2}&nbsp;</span>)}
          {title4 && (<span style={{ textTransform: 'none'}}>{title4}</span>)}
        </Typography>
      )}
      {title5 && (
        <Typography
          fontSize={"14px"}
          fontFamily={"Inter !important"}
          color={"#b33727"}
          fontWeight={700}
          textAlign={"center"}
          textTransform={"uppercase"}
          mt={"2px"}
        >
          {title5}
        </Typography>
      )}
    </Box>
  );
}
