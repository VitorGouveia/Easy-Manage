import { FC } from "react"
import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"

import { GetClients } from "@services"
import { Button, Search, TextInput } from "@heathmont/moon-components"

import { ClientContainer, CardContainer, Card, NewClientForm } from "./styles"

type Client = {
  id: string
  name: string
  phoneNumber: string
  city: string
  street: string
  houseNumber: string
  opts: string
}

type ClientProps = {
  clients: Client[]
}

const Client: FC<ClientProps> = ({ clients }) => {
  const { register, handleSubmit } = useForm()

  const createClient = data => {
    console.log(data)
  }
  console.log(clients.length)
  return (
    <ClientContainer>
      <div className="search">
        <Search loadingMessage={<span>procurando clients</span>} />
      </div>

      {clients.length === 0 ? (
        <CardContainer>
          <h1>Todos os Clientes</h1>

          <Card full={true}>
            <h1>No clients yet.</h1>
          </Card>
        </CardContainer>
      ) : (
        <ul>
          {clients.map(client => {
            return (
              <Card key={client.id}>
                <h1>{client.name}</h1>
                <h2>{client.houseNumber}</h2>
                <h3>{client.opts}</h3>
                <h4>{client.phoneNumber}</h4>
                <h5>{client.street}</h5>
                <h6>{client.city}</h6>
              </Card>
            )
          })}
        </ul>
      )}

      <section>
        <h1>Novo Cliente</h1>

        <NewClientForm onSubmit={handleSubmit(createClient)}>
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
              type="tel"
              label="telephone"
              placeholder="telefone"
              {...register("telephone")}
            />
            <TextInput
              required
              type="text"
              label="city"
              placeholder="cidade"
              {...register("city")}
            />
            <TextInput
              required
              type="text"
              label="street"
              placeholder="rua"
              {...register("street")}
            />
            <TextInput
              required
              type="text"
              label="houseNumber"
              placeholder="número da casa"
              {...register("houseNumber")}
            />
            <TextInput
              required
              type="text"
              label="opts"
              placeholder="referência"
              {...register("opts")}
            />
          </div>

          <Button fullWidth variant="primary">
            Criar Cliente
          </Button>
        </NewClientForm>
      </section>
    </ClientContainer>
  )
}

export default Client

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { "fastgas.token": token } = parseCookies(ctx)

  const { clients } = await GetClients(token)

  if (!clients) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      clients
    }
  }
}
