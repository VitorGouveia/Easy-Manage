import { ButtonHTMLAttributes, FC } from "react"

import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
  active?: boolean
}

export const Button: FC<ButtonProps> = ({ children, outlined, active }) => {
  return (
    <ButtonContainer active={active} outlined={outlined}>
      {children}
    </ButtonContainer>
  )
}
