import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  TextareaAutosize as Textarea,
  useMediaQuery,
  Theme,
  Typography,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

export const ContactForm = ({
  btnColor = "#252529",
}: {
  btnColor?: string;
}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const form = useRef();
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Phone is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    address: yup.string().required("ZIP Code is required"),
    option: yup.string().required("Option is required"),
    message: yup
      .string()
      .required("Message is required")
      .max(80, "Max 80 characters"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      option: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSending(true);
      setShowMessage(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_rxhp9f2",
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_sexpm2s",
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8tS6TT5TEINsGyxDa"
        )
        .then(async () => {
          setIsSending(false);
          formik.resetForm();
          const zohoTokenRes = await fetch(
            `${import.meta.env.VITE_API_URI}/zoho-token`,
            {
              method: "GET",
            }
          );
          const zohoTokenData = await zohoTokenRes.json();
          const zohoToken = zohoTokenData.access_token;
          await fetch(`${import.meta.env.VITE_API_URI}/zoho-leads`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              accessToken: zohoToken,
              firstName: values.firstName,
              lastName: values.lastName,
              phone: values.phone,
              email: values.email,
              zipCode: values.address,
              product: values.option,
              message: values.message,
            }),
          });
        })
        .catch((error) => {
          setIsSending(false);
          console.error("Error sending email:", error);
        });
    },
  });

  const options = [
    { label: "Select an option", value: "" },
    { label: "EV Chargers", value: "EV Chargers" },
    { label: "Heating & Cooling", value: "Heat Pumps" },
    { label: "Energy Storage", value: "Energy Storage" },
    {
      label: "Electrical Service Upgrade",
      value: "Electrical Service Upgrade",
    },
    { label: "Electrical Work", value: "Electrical Work" },
  ];

  return (
    <FormWrapper
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        border: "1px solid #D8D8DE",
        padding: isDesktop ? "32px" : "20px",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        ref={form}
      >
        <FormInputs>
          <InputFormContainer>
            <Label>First name</Label>
            <InputField
              variant="outlined"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              onBlur={formik.handleBlur}
            />
          </InputFormContainer>
          <InputFormContainer>
            <Label>Last name</Label>
            <InputField
              variant="outlined"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              onBlur={formik.handleBlur}
            />
          </InputFormContainer>
          <InputFormContainer>
            <Label>Phone</Label>
            <InputField
              variant="outlined"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              onBlur={formik.handleBlur}
            />
          </InputFormContainer>
          <InputFormContainer>
            <Label>Email</Label>
            <InputField
              variant="outlined"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
            />
          </InputFormContainer>
          <InputFormContainer>
            <Label>ZIP Code</Label>
            <InputField
              variant="outlined"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              onBlur={formik.handleBlur}
            />
          </InputFormContainer>
          <InputFormContainer>
            <Label>Product</Label>
            <FormControl
              fullWidth
              error={formik.touched.option && Boolean(formik.errors.option)}
            >
              <SelectField
                name="option"
                value={formik.values.option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                displayEmpty
              >
                {options?.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </SelectField>

              {formik.touched.option && formik.errors.option && (
                <FormHelperText>{formik.errors.option}</FormHelperText>
              )}
            </FormControl>
          </InputFormContainer>
        </FormInputs>
        <InputFormContainer style={{ marginBottom: "0px" }}>
          <Label>How can we help?</Label>
          <div>
            <Textarea
              aria-label="minimum height"
              minRows={3}
              style={{
                width: "100%",
                minHeight: "100px",
                maxHeight: "100px",
                borderRadius: "12px",
                padding: "12px 16px",
                border:
                  formik.touched.message && formik.errors.message
                    ? "1px solid #d32f2f"
                    : "1px solid #C6C6CC",
                resize: "none",
              }}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.message && formik.errors.message && (
              <div
                style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  margin: "3px 14px 0",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                }}
              >
                {formik.errors.message}
              </div>
            )}
          </div>
          <Typography
            color={"#505059"}
            fontSize={"14px"}
            align="right"
            fontFamily={"Inter !important"}
            lineHeight={"20px"}
          >
            {formik.values.message.length}/80
          </Typography>
        </InputFormContainer>
        <Button
          sx={{
            backgroundColor: btnColor,
            color: "white",
            borderRadius: "999px",
            padding: "12px 20px",
            width: isDesktop ? "auto" : "100%",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "20px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
            fontFamily: "Montserrat !important",
            "&:hover": { backgroundColor: btnColor },
          }}
          type="submit"
        >
          Submit
        </Button>
        {showMessage && (
          <MessageBox>
            <img
              src={
                isSending ? "/images/blue-info.png" : "/images/green-check.png"
              }
              alt={isSending ? "blue-info" : "green-check"}
              width={15}
              height={15}
              style={{ minWidth: "15px", marginTop: "2.5px" }}
            />
            <Typography
              color={"#252529"}
              fontSize={"14px"}
              lineHeight={"20px"}
              fontFamily={"Inter !important"}
            >
              {isSending
                ? "Sending..."
                : "Thank you for contacting EcowaveUS. We've received your message."}
            </Typography>
          </MessageBox>
        )}
      </Box>
    </FormWrapper>
  );
};

const FormWrapper = styled.div``;
const FormInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 24px;
  }
`;
const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Label = styled.label`
  color: #252529;
  font-family: Inter !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
const InputField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  "& .MuiInputBase-input": {
    padding: "0",
  },
});
const SelectField = styled(Select)({
  "&.MuiInputBase-root": {
    borderRadius: "12px",
  },
  "& .MuiSelect-select": {
    padding: "12px 16px",
    fontSize: "14px",
    lineHeight: "20px",
  },
});

const MessageBox = styled(Box)({
  marginTop: "10px",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
});
