import { FC, useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"

import { GetClients, CreateClient, RemoveClient } from "@services"
import { FilesRemove, GenericEdit } from "@heathmont/moon-icons"
import { Button, Search, TextInput } from "@heathmont/moon-components"

import { ClientContainer, CardContainer, Card, NewClientForm } from "./styles"
import { useAuth } from "@hooks"

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

type ClientForm = {
  id: string
  name: string
  phoneNumber: string
  city: string
  houseNumber: string
  street: string
  opts: string
}

const Client: FC<ClientProps> = ({ clients }) => {
  const { register, handleSubmit } = useForm()
  const [clientList, setClientList] = useState<ClientForm[]>([])
  const { accessToken, user } = useAuth()

  useEffect(() => {
    setClientList(clients)
  }, [])

  const createClient = async (data: Omit<ClientForm, "id">) => {
    const { data: response } = await CreateClient({ ...data }, accessToken)
    setClientList([...clientList, response.client])
  }

  const handleRemoveClient = async (clientId: string) => {
    await RemoveClient(clientId, user.id, accessToken)

    setClientList(clientList.filter(client => client.id !== clientId))
  }

  return (
    <ClientContainer>
      <div className="search">
        <Search loadingMessage={<span>procurando clients</span>} />
      </div>

      {clientList.length === 0 ? (
        <CardContainer>
          <h1>Todos os Clientes</h1>

          <Card full={true}>
            <h5>No clients yet.</h5>
          </Card>
        </CardContainer>
      ) : (
        <ul>
          {clientList.map(client => {
            return (
              <Card key={client.id}>
                <strong>Informações:</strong>
                <p>{client.name}</p>
                <p>{client.phoneNumber}</p>

                <strong>Localização:</strong>
                <p>
                  {client.street} - {client.city}
                </p>
                <p>casa nº: {client.houseNumber}</p>

                <strong>Opcional:</strong>
                <p>{client.opts}</p>

                <Button
                  onClick={() => handleRemoveClient(client.id)}
                  data-attr="remove"
                >
                  <FilesRemove fontSize="2rem" />
                </Button>

                <Button data-attr="edit">
                  <GenericEdit fontSize="2rem" />
                </Button>
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
              {...register("phoneNumber")}
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

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

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
