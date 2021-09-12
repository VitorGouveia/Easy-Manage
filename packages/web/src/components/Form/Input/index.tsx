import { FC, useEffect, useRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customErrorMessage: string
  type: "text" | "email" | "password" | "number" | "search"
  name: string
  placeholder: string
}

export const Input: FC<InputProps> = ({
  type,
  customErrorMessage,
  placeholder,
  name
}) => {
  const { current: inputElement } = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputElement) {
      const { setCustomValidity, addEventListener } = inputElement

      addEventListener("invalid", () => setCustomValidity(customErrorMessage))

      addEventListener("input", () => setCustomValidity(""))
    }
  }, [inputElement])

  return (
    <>
      <input
        required
        type={type}
        placeholder={placeholder}
        ref={inputElement}
        name={name}
      />
    </>
  )
}
