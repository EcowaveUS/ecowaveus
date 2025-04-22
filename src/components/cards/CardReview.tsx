import { Box, Typography } from "@mui/material";
import markIcon from "../../assets/icons/marksicon.png";
import profileImg from "../../assets/images/profile-img.png";

interface CardReviewProps {
  firstName: string;
  lastName: string;
  description: string;
}

const CardReview: React.FC<CardReviewProps> = ({
  firstName,
  lastName,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "2rem",
        minWidth: "310px",
        maxWidth: "310px",
        backgroundColor: "#fff",
        borderRadius: "24px",
        border: "1px solid #E4ECF6",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "40px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={markIcon}
          alt="Review"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "220px",
          overflowY: "auto",
        }}
      >
        <Typography variant="body2" color="#2C2C2C">
          “{description}”
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Box>
          <img src={profileImg} alt="User" />
        </Box>
        <Box>
          <Typography variant="body1" fontWeight="700" color="#2C2C2C">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2">Essex, MA</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardReview;
