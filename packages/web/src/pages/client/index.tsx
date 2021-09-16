import { GetServerSideProps } from "next"
import { FC, useRef, useState } from "react"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import { Trash, Edit2, Check, Search, Plus } from "react-feather"
import { AxiosError } from "axios"
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet"

import { GetClients, CreateClient, RemoveClient, UpdateClient } from "@services"
import { Button } from "@components"
import { useAuth } from "@hooks"
import { Client } from "types/auth"

import {
  Layout,
  NewEntity,
  Card,
  CardContent,
  CardTitle,
  NotFoundCard,
  NewEntityWrapper,
  SheetButton
} from "@styles/basePage"

type ClientPageProps = {
  clients: Client[]
}

const ClientPage: FC<ClientPageProps> = ({ clients }) => {
  const { register, handleSubmit, setError, formState } = useForm()
  const { accessToken, user } = useAuth()

  const { errors } = formState

  const [clientList, setClientList] = useState<Client[]>([...(clients || [])])
  const [searchClientList, setSearchClientList] = useState<Client[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [openSheet, setOpenSheet] = useState(false)

  const sheetRef = useRef<BottomSheetRef>(null)

  const handleClientRegister = async (client: Omit<Client, "id">) => {
    try {
      
      const { data } = await CreateClient({ ...client }, accessToken)
      
      setClientList([
        {
          id: data.client.id,
          ...client
        },
        ...clientList
      ])
    } catch (error) {
      console.log(error.response.data.error)

      const axiosError = error as AxiosError

      const APIError = axiosError.response.data.error

      if (
        APIError === "Unique constraint failed on the fields: (`phoneNumber`)"
      ) {
        setError(
          "phoneNumber",
          {
            message: "Um cliente com esse número de telefone já existe"
          },
          {
            shouldFocus: true
          }
        )
      }
    }
  }

  const handleRemoveClient = async (id: string) => {
    setSearchClientList(searchClientList.filter(client => client.id !== id))
    setClientList(clientList.filter(client => client.id !== id))

    try {
      await RemoveClient(id, user.id, accessToken)
    } catch (error) {
      console.log(error.response.data.error)
      alert("Alguma coisa deu errado ao remover um cliente. Tente novamente")
    }
  }

  const handleEdit = async (id: string) => {
    setIsEditing(!isEditing)
    const headings: NodeListOf<HTMLElement> = document.querySelectorAll(
      `li[data-id="${id}"] h6`
    )
    const texts = document.querySelectorAll(`li[data-id="${id}"] p`)
    const smalls = document.querySelectorAll(`li[data-id="${id}"] small`)

    const editIcon: HTMLElement = document.querySelector(
      `li[data-id="${id}"] svg[data-icon="edit"]`
    )
    const checkIcon: HTMLElement = document.querySelector(
      `li[data-id="${id}"] svg[data-icon="check"]`
    )

    editIcon.classList.toggle("no-display")
    checkIcon.classList.toggle("no-display")

    if (!isEditing) {
      headings.forEach(heading =>
        heading.setAttribute("contenteditable", "true")
      )
      texts.forEach(text => text.setAttribute("contenteditable", "true"))
      smalls.forEach(small => small.setAttribute("contenteditable", "true"))
    } else {
      headings.forEach(heading =>
        heading.setAttribute("contenteditable", "false")
      )
      texts.forEach(text => text.setAttribute("contenteditable", "false"))
      smalls.forEach(small => small.setAttribute("contenteditable", "false"))
    }

    const clientListWihtoutClient = clientList.filter(
      client => client.id !== id
    )

    const newClient = {
      id,
      name: headings[0].innerText,
      city: headings[1].innerText,
      phoneNumber: texts[0].innerHTML,
      opts: texts[1].innerHTML.split("-")[1],
      houseNumber: smalls[0].innerHTML,
      street: texts[1].innerHTML.split("-")[0]
    }

    setClientList([
      ...clientListWihtoutClient,
      {
        ...newClient
      }
    ])

    try {
      await UpdateClient(id, accessToken, { ...newClient })
    } catch (error) {
      /* handle the same number error */
      const axiosError = error as AxiosError

      const APIError = axiosError.response.data.error

      if (
        APIError === "Unique constraint failed on the fields: (`phoneNumber`)"
      ) {
        alert("Um Cliente com esse número de telefone já existe.")

        /* reset all the phoneNumber field to normal */
        texts[0].innerHTML = "Insira outro número"
      } else {
        alert("Alguma coisa deu errado ao editar um cliente. Tente novamente")
      }
    }
  }

  const handleSearch = async (query: string) => {
    const searchResult = clientList.filter(
      client => client.name.includes(query) === true
    )

    setSearchClientList([...searchResult])
  }

  return (
    <Layout>
      <div className="search">
        <input
          type="search"
          placeholder="Pesquise"
          onChange={event => handleSearch(event.target.value)}
        />

        <Search size={16} color="#fff" />
      </div>

      <section>
        <Button outlined onClick={() => setOpenSheet(true)}>
          <Plus size={16} color="#fff" />
        </Button>
      </section>

      <ul>
        {clientList.length <= 0 ? (
          <NotFoundCard>
            Não consegui achar nenhum cliente.
            <br />
            Tenta criar um.
          </NotFoundCard>
        ) : (
          <>
            {searchClientList.length > 0 ? (
              <>
                {searchClientList.map(client => {
                  return (
                    <Card data-id={client.id} key={client.id}>
                      <CardTitle>
                        <h4>Informações</h4>
                      </CardTitle>

                      <CardContent>
                        <img
                          width={32}
                          height={32}
                          src={`https://avatars.dicebear.com/api/bottts/${client.name}.svg`}
                          alt=""
                        />
                        <h6>{client.name}</h6>
                        <p>{client.phoneNumber}</p>
                      </CardContent>

                      <CardTitle>
                        <h4>Endereço</h4>
                      </CardTitle>
                      <CardContent type="outlined">
                        <h6>{client.city}</h6>
                        <p>
                          {client.street} - {client.opts}
                        </p>
                        <small>{client.houseNumber}</small>
                      </CardContent>

                      <Trash
                        onClick={() => handleRemoveClient(client.id)}
                        size={16}
                        color="#fff"
                      />

                      <Edit2
                        data-icon="edit"
                        onClick={() => handleEdit(client.id)}
                        size={16}
                        color="#fff"
                      />

                      <Check
                        data-icon="check"
                        className="no-display"
                        onClick={() => handleEdit(client.id)}
                        size={16}
                        color="#fff"
                      />
                    </Card>
                  )
                })}
              </>
            ) : (
              <>
                {clientList.map(client => {
                  return (
                    <Card data-id={client.id} key={client.id}>
                      <CardTitle>
                        <h4>Informações</h4>
                      </CardTitle>

                      <CardContent>
                        <img
                          width={32}
                          height={32}
                          src={`https://avatars.dicebear.com/api/bottts/${client.name}.svg`}
                          alt=""
                        />
                        <h6>{client.name}</h6>
                        <p>{client.phoneNumber}</p>
                      </CardContent>

                      <CardTitle>
                        <h4>Endereço</h4>
                      </CardTitle>
                      <CardContent type="outlined">
                        <h6>{client.city}</h6>
                        <p>
                          {client.street} - {client.opts}
                        </p>
                        <small>{client.houseNumber}</small>
                      </CardContent>

                      <Trash
                        onClick={() => handleRemoveClient(client.id)}
                        size={16}
                        color="#fff"
                      />

                      <Edit2
                        data-icon="edit"
                        onClick={() => handleEdit(client.id)}
                        size={16}
                        color="#fff"
                      />

                      <Check
                        data-icon="check"
                        className="no-display"
                        onClick={() => handleEdit(client.id)}
                        size={16}
                        color="#fff"
                      />
                    </Card>
                  )
                })}
              </>
            )}
          </>
        )}
      </ul>

      <BottomSheet
        open={openSheet}
        blocking={false}
        ref={sheetRef}
        onDismiss={() => setOpenSheet(false)}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 6,
          maxHeight * 0.6
        ]}
        header={<></>}
        footer={
          <SheetButton>
            <Button
              outlined
              onClick={() => {
                sheetRef.current.snapTo(({ snapPoints }) =>
                  Math.min(...snapPoints)
                )
              }}
            >
              Fechar
            </Button>
          </SheetButton>
        }
      >
        <NewEntityWrapper>
          <NewEntity onSubmit={handleSubmit(handleClientRegister)}>
            <input
              required
              autoFocus
              type="text"
              placeholder="Nome"
              id="name"
              {...register("name", {
                required: "Você precisa colocar um nome pro seu cliente"
              })}
            />

            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
            <input
              required
              type="tel"
              placeholder="Número de telefone"
              id="phoneNumber"
              {...register("phoneNumber")}
            />

            <input
              required
              type="text"
              placeholder="Cidade"
              id="city"
              {...register("city")}
            />

            <input
              required
              type="text"
              placeholder="Rua"
              id="street"
              {...register("street")}
            />

            <input
              required
              type="text"
              placeholder="Número da casa"
              id="houseNumber"
              {...register("houseNumber")}
            />

            <input
              required
              type="text"
              placeholder="Opcional"
              id="opts"
              {...register("opts")}
            />

            <Button>Criar Cliente</Button>
          </NewEntity>
        </NewEntityWrapper>
      </BottomSheet>
    </Layout>
  )
}

export default ClientPage

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

  const clients = await GetClients(token)
  if (clients.length === 0) {
    return {
      props: {
        clients: []
      }
    }
  }

  return {
    props: {
      clients
    }
  }
}
