import { ButtonHTMLAttributes, FC } from "react"

import { Link } from "@components"

import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string
  name: string
}

export const Button: FC<ButtonProps> = ({ children, url, name }) => {
  return (
    <ButtonContainer>
      <Link name={name} url={url}>
        {children}
      </Link>
    </ButtonContainer>
  )
}
