import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PrivacyPolicyPage = () => {
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
          margin: {
            xs: "0 2rem",
            md: "0 8rem",
          },
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
          <Typography variant="h3" >Privacy Policy</Typography>
          <Typography variant="body1" color="#ababab" >
            Welcome to Ecowave. We are committed to protecting your privacy and
            ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy outlines how we collect,
            use, disclose, and protect your information when you visit our
            website,<Link to="https://ecowaveus.com">
            <span style={{ marginLeft:'3px', color:'#ababab', textDecoration:'underline'}}>https://ecowaveus.com</span></Link>, or
            engage with our services.
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
          <Typography variant="h6" >Information We Collect</Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>
              Personal Information:{" "}
            </span>
            Personal Information: When you interact with us, we may collect
            personal information such as your name, email address, phone number,
            and address.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>Usage Data:</span>{" "}
            We collect information about how you use our website, such as your
            IP address, browser type, pages visited, and the time and date of
            your visit.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>
              SMS Information:{" "}
            </span>{" "}
            If you consent to receive SMS communications, we collect your phone
            number and any content of the SMS messages.
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
          <Typography variant="h6" >How We Use Your Information</Typography>
          <Typography variant="body1" color="#ababab">
            We use your personal information to deliver our services, respond to
            inquiries, and provide customer support.
            <br /> Usage data helps us understand how our services are used and
            where improvements can be made.
            <br />
            We may use your contact information to send you updates,
            newsletters, and promotional materials, but only if you have opted
            in to receive such communications.
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
          <Typography variant="h6">Sharing Your Information</Typography>
          <Typography variant="body1" color="#ababab">
            We may share your information with third-party service providers who
            assist us in operating our website, conducting our business, or
            servicing you, as long as those parties agree to keep this
            information confidential.
          </Typography>
          <Typography variant="body1" color="#ababab">
            <span style={{ fontWeight: "bold", margin: 0 }}>
              Legal Compliance:{" "}
            </span>{" "}
            We may disclose your information if required by law or in response
            to valid requests by public authorities.
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
          <Typography variant="h6">SMS Consent</Typography>
          <ul style={{ marginLeft: "2rem", padding: 0 }}>
            <li style={{ margin: 0, padding: "10px 0 " }}>
              <Typography variant="body1" color="#ababab">
                <span>SMS Communications: </span>If you opt-in to receive SMS
                communications from us, your consent is used solely for the
                purpose of sending you the SMS messages you have agreed to
                receive.
              </Typography>
            </li>
            <li style={{ margin: 0, padding: 0 }}>
              <Typography variant="body1" color="#ababab">
                <span>SMS Communications: </span>If you opt-in to receive SMS
                communications from us, your consent is used solely for the
                purpose of sending you the SMS messages you have agreed to
                receive.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h6">Data Security</Typography>
          <Typography variant="body1" color="#ababab">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the Internet or method of electronic storage is 100% secure.
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
          <Typography variant="h6">Your Privacy Rights</Typography>
          <Typography variant="body1" color="#ababab">
            You have the right to access and correct your personal information.
            You can opt-out of receiving promotional communications from us by
            following the unsubscribe instructions provided in those
            communications.
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
          <Typography variant="h6">Links to Other Websites</Typography>
          <Typography variant="body1" color="#ababab">
            Our website may contain links to other sites that are not operated
            by us. We strongly advise you to review the privacy policy of every
            site you visit.
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
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1" color="#ababab">
            If you have any questions about this Privacy Policy, please contact
            us by email: info@ecowaveus.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
