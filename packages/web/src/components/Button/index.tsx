import { ButtonHTMLAttributes, FC } from "react"

import { Link } from "@components"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string
  name: string
}

export const Button: FC<ButtonProps> = ({ children, url, name }) => {
  return (
    <button>
      <Link name={name} url={url}>
        {children}
      </Link>
    </button>
  )
}
