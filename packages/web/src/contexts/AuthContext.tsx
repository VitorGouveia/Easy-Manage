import { createContext, FC } from "react"

import { useFetch } from "@hooks"

type AuthContextType = {
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export const Auth: FC = ({ children }) => {
  const isAuthenticated = false

  const signIn = async () => {
    /* call API */
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
