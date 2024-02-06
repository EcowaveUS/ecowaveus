import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  TextareaAutosize as Textarea,
  InputLabel,
  FormControl,
} from '@mui/material';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';


export const ContactForm = () => {
  const form = useRef();

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required('First name is required'),
    lastName: yup
      .string()
      .required('Last name is required'),
    phone: yup
      .string()
      .required('Phone is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    address: yup
      .string()
      .required('Address is required'),
    option: yup
      .string()
      .required('Option is required'),
    message: yup
      .string()
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      option: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Enviar la solicitud a EmailJS
      emailjs.send(
        'service_rxhp9f2', // Reemplaza con tu Service ID de EmailJS
        'template_sexpm2s', // Reemplaza con tu Template ID de EmailJS
        values,
        '8tS6TT5TEINsGyxDa' // Reemplaza con tu User ID de EmailJS
      )
        .then((response) => {
          alert('Email sent successfully!');
          console.log('Email sent successfully:', response);
          formik.resetForm();
        })
        // Manejador de errores del envío de la solicitud
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    },
  });


  const options = [
    'Ev Chargers',
    'Heat Pumps',
    'Energy Storage',
  ];

  return (
    <FormWrapper>
      <FormTitle>Get in touch with us</FormTitle>
      <Box
        component="form"
        sx={{ s: 1, width: '100%' }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        ref={form}
      >
        <FormInputs>
          <TextField
            id="outlined-basic"
            label="First name*"
            variant="outlined"
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="outlined-basic"
            label="Last name*"
            variant="outlined"
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            fullWidth
            id="fullWidth"
            label="Address"
            variant="outlined"
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            onBlur={formik.handleBlur}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
            <Select
              fullWidth
              id="demo-simple-select"
              labelId="demo-simple-select-label"
              name='option'
              label="Select an option"
              value={formik.values.option}
              onChange={formik.handleChange}
              error={formik.touched.option && Boolean(formik.errors.option)}
              onBlur={formik.handleBlur}
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
              width: '100%',
              height: '210px',
              borderRadius: '11px',
              padding: '16px',
              border: '1px solid #D0D0D0',
              resize: 'none',
            }}
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <ButtonContainer>
          <StyledButton type='submit'>Schedule now!</StyledButton>
        </ButtonContainer>
      </Box>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  gap: 32px;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    width: 70%;
  }
`;
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
const FormTitle = styled.h3`
  color: #151B27;

  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 59px; /* 147.5% */
  letter-spacing: -2.501px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: #003B76;
  padding: 17px 24px 15px 24px;
  align-items: center;
  gap: 10px;
  padding: 17px 24px 15px 24px;
  border-radius: 6px;
  color: var(--fore-allways---white, #FFF);

`;
const InputContainer = styled.div`
  margin-bottom: 1rem;
`;


{/* <p>Hello EcoWaveus,</p>
<p>You got a new message from {{firstName}}:</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  first name: {{firstName}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  last name: {{lastName}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  Phone number: {{lastName}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  Email: {{email}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  Address: {{address}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  Address 2: {{address}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  customer: {{options}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  interest in: {{evChargers}} {{heatPumps}} {{energyStorage}}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  Messege: {{message}}
</p> */}