import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const TermsAndConditionsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f1f5f9",
        paddingTop: "230px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#003B76",
          margin: "0 8rem",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h3">Terms and Conditions</Typography>
          <Typography variant="body1" color="#ababab">
            Welcome to Ecowave. By accessing or using our website,
            <Link to="https://ecowaveus.com">
              <span
                style={{
                  marginLeft: "3px",
                  color: "#ababab",
                  textDecoration: "underline",
                }}
              >
                https://ecowaveus.com
              </span>
            </Link>
            , you agree to comply with and be bound by the following terms and
            conditions. Please read these terms carefully.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">General Terms</Typography>
          <ol style={{ listStyleType: "decimal", paddingLeft: "2rem" }}>
            <li style={{ marginTop: "0.5rem", marginLeft: "0px" }}>
              <Typography variant="body1" color="#ababab">
                <span style={{fontWeight:'bold'}}>Acceptance of Terms:</span> By using our services, you
                agree to these Terms and Conditions. If you do not agree, please
                do not use our website.
              </Typography>
            </li>
            <li style={{ marginTop: "0.5rem", marginLeft: "0px" }}>
              <Typography variant="body1" color="#ababab">
                <span style={{fontWeight:'bold'}}>Changes to Terms: </span> We reserve the right to modify
                these terms at any time. Please review them periodically for
                changes. Continued use of the site following changes signifies
                your acceptance of the new terms.
              </Typography>
            </li>
            <li style={{ marginTop: "0.5rem", marginLeft: "0px" }}>
              <Typography variant="body1" color="#ababab">
                <span style={{fontWeight:'bold'}}>Use of the Site: </span> You agree to use the site in
                accordance with all applicable laws and regulations. You will
                not use the site for any unlawful or prohibited purpose.
              </Typography>
            </li>
          </ol>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">SMS Terms of Service</Typography>
          <Typography variant="body1" color="#ababab">
            By opting into SMS from a web form or other medium, you agree to
            receive SMS messages from Ecowave. This includes, but is not limited
            to:
          </Typography>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
            <li style={{ padding: "5px 0" }}>Appointment scheduling</li>
            <li style={{ padding: "5px 0" }}>Appointment reminders</li>
            <li style={{ padding: "5px 0" }}>Post-visit instructions</li>
            <li style={{ padding: "5px 0" }}>Order alerts</li>
            <li style={{ padding: "5px 0" }}>Account notifications</li>
            <li style={{ padding: "5px 0" }}>Billing notifications</li>
          </ul>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>
              Message Frequency:{" "}
            </span>
            Messaging frequency may vary based on your interactions and
            preferences.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>
              Message and Data Rates:{" "}
            </span>
            Message and data rates may apply based on your mobile carrier's
            plan.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>Opt-Out: </span>
            To stop receiving SMS messages, you can reply STOP to any message.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>Assistance: </span>
            For help, text HELP to 978-500-4081.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">Intellectual Property</Typography>
          <Typography variant="body1" color="#ababab">
            All content on this site, including text, graphics, logos, and
            images, is the property of Ecowave or its content suppliers and is
            protected by international copyright laws.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">Limitation of Liability</Typography>
          <Typography variant="body1" color="#ababab">
            Ecowave shall not be liable for any damages arising out of or in
            connection with the use of this site. This is a comprehensive
            limitation of liability that applies to all damages of any kind.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">Governing Law</Typography>
          <Typography variant="body1" color="#ababab">
            These terms and conditions are governed by the laws of the state of
            Massachusetts, United States, without regard to its conflict of law
            principles.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body1" color="#ababab">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </Typography>
          <ul style={{ paddingLeft: "2rem" }}>
            <li style={{ padding: "5px 0" }}>By email: info@ecowaveus.com</li>
            <li style={{ padding: "5px 0" }}>By phone: (978) 500-4081</li>
          </ul>
          <Typography variant="body1" color="#ababab">
            For more information, please visit our Privacy Policy.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
