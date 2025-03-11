import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export const BottomFooter = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'row',
      },
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5rem',
    }}>
      <Typography fontFamily={'InterMedium'} textAlign={'center'}>
        © 2021 Ecowave. All Rights Reserved.
      </Typography>
      <Button
        onClick={() => navigate('/privacy-policy')}
        variant={'text'}
        sx={{
          textTransform: 'none',
          fontFamily: 'InterMedium',
          fontSize: '0.8rem',
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
            color: '#ababab',
          },
        }}
      >
        Privacy Policy
      </Button>
      <Button
        onClick={() => navigate('/terms-and-conditions')}
        variant={'text'}
        sx={{
          textTransform: 'none',
          fontFamily: 'InterMedium',
          fontSize: '0.8rem',
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
            color: '#ababab',
          },
        }}
      >
        Terms and Conditions
      </Button>
    </Box>
  )
}


