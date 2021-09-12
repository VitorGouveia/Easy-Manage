import { ButtonHTMLAttributes, FC } from "react"

import { ButtonContainer } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}
