import { useRef } from "react";
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
} from "@mui/material";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

export const ContactForm = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const form = useRef();

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Phone is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    address: yup.string().required("Address is required"),
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
      // Enviar la solicitud a EmailJS
      emailjs
        .send(
          "service_rxhp9f2", // Reemplaza con tu Service ID de EmailJS
          "template_sexpm2s", // Reemplaza con tu Template ID de EmailJS
          values,
          "8tS6TT5TEINsGyxDa" // Reemplaza con tu User ID de EmailJS
        )
        .then((response) => {
          alert("Email sent successfully!");
          console.log("Email sent successfully:", response);
          formik.resetForm();
        })
        // Manejador de errores del envío de la solicitud
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    },
  });

  const options = ["Ev Chargers", "Heat Pumps", "Energy Storage"];

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
            <Label>Address</Label>
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
            <SelectField
              name="option"
              value={formik.values.option}
              onChange={formik.handleChange}
              error={formik.touched.option && Boolean(formik.errors.option)}
              onBlur={formik.handleBlur}
            >
              {options?.map((option) => (
                <MenuItem
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                  key={option}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </SelectField>
          </InputFormContainer>
        </FormInputs>
        <InputFormContainer style={{ marginBottom: "32px" }}>
          <Label>How can we help?</Label>
          <Textarea
            aria-label="minimum height"
            minRows={3}
            style={{
              width: "100%",
              minHeight: "100px",
              maxHeight: "100px",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid #C6C6CC",
              resize: "none",
            }}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Typography color={"#505059"} fontSize={"14px"} align="right">
            {formik.values.message.length}/80
          </Typography>
        </InputFormContainer>
        <StyledButton type="submit">Submit</StyledButton>
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
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
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
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #252529;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 999px;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #1a1a1d;
  }
  width: 100%;
  @media (min-width: 900px) {
    width: auto;
  }
`;
