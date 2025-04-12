import { TextField, Typography, Box } from '@mui/material';

export const TextInput = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        fontWeight="bold"
        mb={0.5}
      >
        First name
      </Typography>

      <TextField
        placeholder="Enter your first name"
        variant="outlined"
        fullWidth
        InputProps={{
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '16px', // bordes redondeados
            },
            paddingY: 0, // quitamos paddings extra
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            paddingY: 1.2, // este sí funciona aquí
            paddingX: 2,
            backgroundColor: '#fff',
          }
        }}
        InputLabelProps={{ shrink: false }}
      />
    </Box>
  );
}
