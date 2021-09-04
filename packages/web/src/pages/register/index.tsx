import { FC } from "react"

import { TextInput, Button } from "@heathmont/moon-components"
import { ArrowsLeft } from "@heathmont/moon-icons"

import { useForm } from "react-hook-form"

import { RegisterContainer } from "./styles"

const Register: FC = () => {
  const { register, handleSubmit } = useForm()

  const handleSignIn = data => {
    console.log(data)
  }

  return (
    <RegisterContainer>
      <header>
        <img src="/logo.png" alt="FastGas logo" />
        <h1>Faça seu registro</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="input-wrapper">
            <TextInput
              required
              type="text"
              label="name"
              placeholder="nome"
              {...register("name")}
            />
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
            Criar conta
          </Button>
        </form>
      </main>
      <footer>
        <ArrowsLeft color="white" fontSize="1rem" />
        <small>Já tenho conta?</small>
      </footer>
    </RegisterContainer>
  )
}

export default Register
