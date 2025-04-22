import { TextField, Typography, Box } from "@mui/material";

interface Props {
  name: string;
  label: string;
  type: string;
  value: string;
  error: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  fullWidth?: boolean;
  sx?: object;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = ({
  name,
  label,
  type,
  value,
  error,
  helperText,
  multiline,
  rows,
  maxRows,
  fullWidth,
  sx,
  onChange,
  handleBlur,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="body2" fontWeight="bold" color='#252529' mb={2}>
        {label}
      </Typography>
      <TextField
        variant="outlined"
        name={name}
        type={type}
        fullWidth={fullWidth}
        value={value}
        error={error}
        helperText={helperText}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        onChange={onChange}
        onBlur={handleBlur}
        sx={{
          ...sx,
          width: "100%",
        }}
      />
    </Box>
  );
};
