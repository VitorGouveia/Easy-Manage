import { FC } from "react"

import { TextInput, Button } from "@heathmont/moon-components"
import { ArrowsLeft } from "@heathmont/moon-icons"

import { LoginContainer } from "./styles"

const Login: FC = () => {
  return (
    <LoginContainer>
      <header>
        <img src="/logo.png" alt="FastGas logo" />
        <h1>Faça login</h1>
      </header>
      <main>
        <form>
          <div className="input-wrapper">
            <TextInput
              required
              type="text"
              label="email"
              placeholder="e-mail"
            />
            <TextInput
              required
              type="password"
              label="password"
              placeholder="senha"
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
