import {
  Box,
  TextField,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Select
} from '@mui/material';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';


export const ContactForm = () => {

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
      address2: '',
      option: '',
      message: '',
      evChargers: false,
      heatPumps: false,
      energyStorage: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const options = [
    'Yes, I am a potential new client',
    'No, I am an existing client',
    'I m neither',
  ];

  return (
    <FormWrapper>
      <FormTitle>Contact Form</FormTitle>
      <Box
        component="form"
        sx={{ s: 1, width: '100%' }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <FormInputs>
          <TextField
            id="outlined-basic"
            label="First Name"
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
            label="Last Name"
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
        </FormInputs>
        <InputContainer>
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
        </InputContainer>
        <InputContainer>
          <TextField
            fullWidth
            id="fullWidth"
            label="Address 2"
            variant="outlined"
            name='address2'
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <FormLabel component="legend">Select an option</FormLabel>
          <Select
            fullWidth
            name='option'
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
        </InputContainer>
        <FormLabel component="legend">Select an option</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  name='heatPumps' value={formik.values.heatPumps} onChange={formik.handleChange} />
            }
            label={<span style={{ color: '#000' }}>Heat Pumps</span>}
          />
            <FormControlLabel
            control={
            <Checkbox name='evChargers' value={formik.values.evChargers} onChange={formik.handleChange} />
          }
            label={<span style={{ color: '#000' }}>EV Chargers</span>}
          />
            <FormControlLabel
            control={
              <Checkbox  name='energyStorage' value={formik.values.energyStorage} onChange={formik.handleChange} />
            }
            label={<span style={{ color: '#000' }}>Energy Storage</span>}
          />
        </FormGroup>
        <InputContainer>
          <TextField
            id="outlined-multiline-flexible"
            label="How con we help you?"
            multiline
            maxRows={4}
            sx={{ width: '100%' }}
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <StyledButton type='submit'>Submit</StyledButton>
      </Box>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  border-left: 1px solid grey;
  padding-left: 1rem;
  @media (max-width: 1024px) {
    border-left: none;
    padding-left: 0;
    width: 100%;
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
  font-family: 'Montserrat', sans-serif;
  font-style: oblique;
  font-size: 2rem;
  font-weight: 500;
  color: grey;
  margin: 0;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 0.5rem;
  background-color: #1b5b8d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  width: 175px;
  margin-right: 1rem;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #4e9d40;
    color: #1b5b8d;
    border: 1px solid #1b5b8d;
  }
`;
const InputContainer = styled.div`
  margin-bottom: 1rem;
`;
