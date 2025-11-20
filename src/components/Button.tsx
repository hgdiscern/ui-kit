'use client'
import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export type ButtonProps = MuiButtonProps & {
    variantName?: 'primary' | 'secondary'
}

export const Button = ({ children, variantName, ...rest }: ButtonProps) => {
    const variant = variantName === 'secondary' ? 'outlined' : 'contained'
    return <MuiButton variant={variant} {...rest}>{children}</MuiButton>
}
