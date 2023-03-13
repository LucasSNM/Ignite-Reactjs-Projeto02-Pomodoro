import styled from 'styled-components'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#bd86c5',
  secondary: '#dc79bd',
  danger: '#f2b86c',
  warning: '#f1da57',
  success: '#8bddca',
  neutral: '#f8f8f2',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 0.25rem;
  margin: 1rem;
  /* ${(props) => `background-color: ${buttonVariants[props.variant]}`} */
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
