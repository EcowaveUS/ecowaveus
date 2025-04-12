import { Button } from '@mui/material'

interface CommonButtonProps {
  children: React.ReactNode
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  disable?: boolean
  size?: 'small' | 'medium' | 'large'
  sx?: object
  variant?: 'text' | 'outlined' | 'contained' | 'contained'
  onClick?: () => void
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  color = "primary",
  disable = false,
  size = "medium",
  sx,
  variant = "contained",
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disable}
      onClick={onClick}
      sx={{
        ...sx,
        '&:hover': {
          background: 'inherit',
      }
    }}
    >
      {children}
    </Button>
  )
}

