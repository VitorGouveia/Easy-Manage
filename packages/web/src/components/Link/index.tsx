import Anchor from "next/link"
import { ButtonHTMLAttributes, FC } from "react"

interface LinkProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  url: string
  name: string
}

export const Link: FC<LinkProps> = ({
  url,
  name,
  children,
  ...rest
}): JSX.Element => {
  return (
    <Anchor href={url}>
      <a
        {...rest}
        aria-label={name.replace(" ", "-")}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Anchor>
  )
}
