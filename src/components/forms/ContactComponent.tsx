import { LocationInfo } from './LocationInfo'
import { ContactForm } from './ContactForm'
import { Grid } from '@mui/material'

export const ContactComponent = () => {
  return (
    <Grid item xs={12} md={10} lg={8} xl={6}
      sx={{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '3rem',
        margin: '5rem 0',
      }}
    >
      <LocationInfo />
      <ContactForm />
    </Grid>
  )
}

