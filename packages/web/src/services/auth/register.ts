import { api } from "@services"
import { User } from "../../types/auth"

type RegisterRequest = {
  name: string
  email: string
  password: string
}

type RegisterResponse = {
  accessToken: string
  message: string
  user: User
}

export const register = async (
  props: RegisterRequest
): Promise<RegisterResponse> => {
  const { name, email, password } = props

  const { data } = await api.post("/user", {
    name,
    email,
    password
  })

  return data
}
