import { ButtonHTMLAttributes, FC } from "react"

import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ children, outlined }) => {
  return <ButtonContainer outlined={outlined}>{children}</ButtonContainer>
}
