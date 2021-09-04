import { useFetch } from "@hooks"

type RegisterRequestProps = {
  name: string
  email: string
  password: string
}
// type SignInRequestProps = {}

export const RegisterRequest = (user: RegisterRequestProps) => {
  const { data } = useFetch("/user", { method: "POST", data: user })

  return {
    data
  }
}

// export const SignInRequest = (data: SignInRequestProps) => {}
