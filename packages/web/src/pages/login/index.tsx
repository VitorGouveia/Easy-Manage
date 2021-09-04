import { FC } from "react"

import { TextInput, Button } from "@heathmont/moon-components"
import { ArrowsLeft } from "@heathmont/moon-icons"
import { useAuth } from "@hooks"
import { useForm } from "react-hook-form"

import { LoginContainer } from "./styles"

const Login: FC = () => {
  const { logIn } = useAuth()
  const { register, handleSubmit } = useForm()

  type LogInRequest = {
    email: string
    password: string
  }

  const handleLogIn = async ({ email, password }: LogInRequest) => {
    try {
      await logIn({
        email,
        password
      })
    } catch (error) {}
  }

  return (
    <LoginContainer>
      <header>
        <img src="/logo.png" alt="FastGas logo" />
        <h1>Faça login</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="input-wrapper">
            <TextInput
              required
              type="text"
              label="email"
              placeholder="e-mail"
              {...register("email")}
            />
            <TextInput
              required
              type="password"
              label="password"
              placeholder="senha"
              {...register("password")}
            />
          </div>

          <Button fullWidth variant="primary">
            Fazer Login
          </Button>
        </form>
      </main>
      <footer>
        <ArrowsLeft color="white" fontSize="1rem" />
        <small>Não tem conta?</small>
      </footer>
    </LoginContainer>
  )
}

export default Login
