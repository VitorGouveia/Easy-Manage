import { FC } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { AxiosError } from "axios"

import { useAuth } from "@hooks"
import { Button } from "@components"
import {
  RegisterContainer,
  RegisterContent,
  RegisterSection,
  Form
} from "@styles/pages/register"
import Logo from "../../../public/logo.svg"

type SignInRequest = {
  name: string
  email: string
  password: string
}

const Register: FC = () => {
  const { signIn } = useAuth()
  const { register, handleSubmit, setError, formState } = useForm()

  const { errors } = formState

  const handleSignIn = async ({ name, email, password }: SignInRequest) => {
    try {
      await signIn({
        name,
        email,
        password
      })
    } catch (error) {
      const axiosError = error as AxiosError
      const APIError = axiosError.response.data.error

      console.log(APIError)
    }
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterSection>
          <article>
            <Image src={Logo} width={96} height={96} alt="Logo da fast gás" />
            <summary>Crie sua conta</summary>
            <p>
              Faça seu cadastro, entre na plataforma e crie seu sistema de
              estoque
            </p>
          </article>

          <Form onSubmit={handleSubmit(handleSignIn)}>
            <input
              required
              type="text"
              placeholder="nome"
              {...register("name")}
            />

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

            <Button active>Criar conta</Button>
          </Form>
        </RegisterSection>
      </RegisterContent>
    </RegisterContainer>
  )
}

export default Register
