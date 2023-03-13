import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'neutral'
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </>
  )
}
