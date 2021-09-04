import { FC } from "react"

import { TextInput, Button } from "@heathmont/moon-components"
import { ArrowsLeft } from "@heathmont/moon-icons"

import { RegisterContainer } from "./styles"

const Register: FC = () => {
  return (
    <RegisterContainer>
      <header>
        <img src="/logo.png" alt="FastGas logo" />
        <h1>Faça seu registro</h1>
      </header>
      <main>
        <form>
          <div className="input-wrapper">
            <TextInput required type="text" label="name" placeholder="nome" />
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
