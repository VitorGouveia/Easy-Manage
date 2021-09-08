import { createContext, FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { setCookie, parseCookies, destroyCookie } from "nookies"

import { register, loginToken, login } from "@services"
import { RefreshToken } from "../types/auth"

type SignInData = {
  name: string
  email: string
  password: string
}

type LogInData = {
  email: string
  password: string
}

type AccessToken = string

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  accessToken: AccessToken
  refreshToken: RefreshToken
  signIn: ({}: SignInData) => Promise<void>
  logIn: ({}: LogInData) => Promise<void>
  clean: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export const Auth: FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState<AccessToken | null>(null)
  const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const { push } = useRouter()
  const isAuthenticated = !!user

  useEffect(() => {
    const { "fastgas.token": token } = parseCookies()

    if (token) {
      loginToken(token).then(({ user, refreshToken, accessToken }) => {
        setCookie(undefined, "fastgas.token", accessToken, {
          maxAge: 60 * 60 * 24 // 24 hrs
        })

        setAccessToken(accessToken)
        setRefreshToken(refreshToken)

        const { id, name, email } = user

        setUser({
          id,
          name,
          email
        })

        push("/")
      })
    }

    push("/login")
  }, [])

  const signIn = async ({ name, email, password }: SignInData) => {
    /* call API */
    const { user, accessToken } = await register({
      name,
      email,
      password
    })

    setAccessToken(accessToken)

    setCookie(undefined, "fastgas.token", accessToken, {
      maxAge: 60 * 60 * 24 // 24 hrs
    })

    setUser(user)

    push("/")
  }

  const logIn = async ({ email, password }: LogInData) => {
    const { user, accessToken, refreshToken } = await login({
      email,
      password
    })

    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    setUser(user)

    setCookie(undefined, "fastgas.token", accessToken, {
      maxAge: 60 * 60 * 24 // 24 hrs
    })

    push("/")
  }

  const clean = () => {
    setAccessToken(null)
    setRefreshToken(null)
    setUser(null)
    destroyCookie(undefined, "fastgas.token")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        refreshToken,
        signIn,
        logIn,
        clean,
        accessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
