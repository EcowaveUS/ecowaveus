import { useState } from 'react';
import {Box, TextField, MenuItem} from '@mui/material';
import styled from 'styled-components';
import { TextareaAutosize } from '@mui/base';
//import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    address2: '',
    option: '',
    message: '',
  });

  const options = [
    'Yes, I am a potential new client',
    'No, I am an existing client',
    'I m neither',
  ];

  const handleChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <FormWrapper>
      <FormTitle>Contact Form</FormTitle>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, Width: '90%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormInputs>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </FormInputs>
        <InputContainer>
          <TextField
            fullWidth
            id="fullWidth"
            label="Address"
            variant="outlined"
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            fullWidth
            id="fullWidth"
            label="Address 2"
            variant="outlined"
            name='address2'
            value={formData.address2}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Select
            fullWidth
            label="Select an option?"
            value={formData.option}
            name='option'
            onChange={handleChange}
          >
            {options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </InputContainer>
        <InputContainer>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="How can we help you?"
            name='message'
            value={formData.message}
            onChange={handleChange}
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
  width: 90%;
  background-color: #fff;
`;
const FormInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  width: 90%;
`;
const FormTitle = styled.h3`
  font-size: 2rem;
  margin-left: 5rem;
  color: #000;
  width: 100%;
  margin-left: 3rem;
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
  border-radius: 5px;
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
  width: 90%;
`;