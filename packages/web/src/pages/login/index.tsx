import { FC } from "react"
import { useForm } from "react-hook-form"
import { AxiosError } from "axios"

import { useAuth } from "@hooks"
import { Button, Link } from "@components"
import { LoginContainer } from "@styles/pages/login"

const Login: FC = () => {
  const { logIn } = useAuth()
  const { register, handleSubmit, setError, formState } = useForm()

  const { errors } = formState

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
    } catch (error) {
      const axiosError = error as AxiosError

      const APIErrorr = axiosError.response.data.error
      if (APIErrorr === "Cannot read property 'password' of null") {
        console.log(APIErrorr)
        setError(
          "email",
          {
            message: "Esse usuário não existe."
          },
          {
            shouldFocus: true
          }
        )
      }

      console.log(formState)
    }
  }

  return (
    <LoginContainer>
      <header>
        <img src="/logo.png" alt="FastGas logo" />
        <h1>Faça login</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit(handleLogIn)}>
          {errors.email && <span>{errors.email.message}</span>}
          <input
            required
            type="text"
            placeholder="e-mail"
            {...register("email")}
          />

          <input
            required
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          {errors.name && <span>{errors.password.message}</span>}

          <Button>Fazer Login</Button>
        </form>
      </main>
      <footer>
        {/* <ArrowsLeft color="white" fontSize="1rem" /> */}
        <Link name="register" url="/register">
          <small>Não tem conta?</small>
        </Link>
      </footer>
    </LoginContainer>
  )
}

export default Login
