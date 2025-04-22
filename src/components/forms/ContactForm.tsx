import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  MenuItem,
  Select,
  TextareaAutosize as Textarea,
  FormControl,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextInput } from "../common/TextInput";
import { CommonButton } from "../common/CommonButton";

export const ContactForm = () => {
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
    message: yup.string().required("Message is required"),
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
    <Box
      component="form"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "2rem",
        border: "1px solid #D8D8DE",
        borderRadius: "11px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      ref={form}
    >
      <FormInputs>
        <TextInput
          label="First name"
          type="text"
          value={formik.values.firstName}
          error={!!(formik.touched.firstName && formik.errors.firstName)}
          helperText={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ""
          }
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="firstName"
        />
        <TextInput
          label="Last name"
          type="text"
          value={formik.values.lastName}
          error={!!(formik.touched.lastName && formik.errors.lastName)}
          helperText={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ""
          }
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="lastName"
        />
        <TextInput
          label="Phone"
          type="text"
          value={formik.values.phone}
          error={!!(formik.touched.phone && formik.errors.phone)}
          helperText={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""
          }
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="phone"
        />
        <TextInput
          label="Email"
          type="email"
          value={formik.values.email}
          error={!!(formik.touched.email && formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="email"
        />
        <TextInput
          label="Address"
          type="text"
          value={formik.values.address}
          error={!!(formik.touched.address && formik.errors.address)}
          helperText={
            formik.touched.address && formik.errors.address
              ? formik.errors.address
              : ""
          }
          onChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="address"
        />
        <FormControl>
          <Typography variant="body2" fontWeight="bold" color="#252529" mb={2}>
            Select an option
          </Typography>
          <Select
            fullWidth
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            name="option"
            label="Select an option"
            value={formik.values.option}
            onChange={formik.handleChange}
            error={formik.touched.option && Boolean(formik.errors.option)}
            onBlur={formik.handleBlur}
            sx={{
              height: "44px",
              borderRadius: "16px",
            }}
          >
            {options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormInputs>
      <InputContainer>
        <Textarea
          aria-label="minimum height"
          minRows={3}
          placeholder="How can we help?"
          style={{
            width: "100%",
            minHeight: "100px",
            maxHeight: "100px",
            borderRadius: "11px",
            padding: "16px",
            border: "1px solid #D0D0D0",
            resize: "none",
            boxShadow: "none",
          }}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <CommonButton>Submit</CommonButton>
    </Box>
  );
};

const FormInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;
