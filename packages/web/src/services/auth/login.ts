import { api } from "@services"
import { User, RefreshToken } from "../../types/auth"

type LoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  message: string

  accessToken: string
  refreshToken: RefreshToken
  user: User
}

export const login = async (props: LoginRequest): Promise<LoginResponse> => {
  const { email, password } = props

  const { data } = await api.post("/login", {
    email,
    password
  })

  return data
}

export const loginToken = async (token: string): Promise<LoginResponse> => {
  const { data } = await api.post(
    "/login",
    {
      email: "",
      password: ""
    },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )

  return data
}
