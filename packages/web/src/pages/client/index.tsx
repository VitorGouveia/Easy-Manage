import { GetServerSideProps } from "next"
import { FC, useEffect, useState } from "react"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import { Trash, Edit2, Check } from "react-feather"

import { GetClients } from "@services"
import { Button } from "@components"
import { Client } from "types/auth"

import {
  Layout,
  NewEntity,
  Card,
  CardContent,
  CardTitle,
  NotFoundCard
} from "@styles/basePage"
import {} from "./styles"

// import {
//   GetClients,
//   CreateClient,
//   RemoveClient,
//   SearchClients
// } from "@services"
// import { FilesRemove, GenericEdit } from "@heathmont/moon-icons"
// import { Button, Search, TextInput } from "@heathmont/moon-components"

// import { ClientContainer, CardContainer, Card, NewClientForm } from "./styles"
// import { useAuth } from "@hooks"

type ClientPageProps = {
  clients: Client[]
  notFound: true
}

const ClientPage: FC<ClientPageProps> = ({ clients, notFound }) => {
  const { register, handleSubmit } = useForm()
  const [clientList, setClientList] = useState<Client[]>([])
  const [searchClientList, setSearchClientList] = useState<Client[]>([])
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => setClientList(clientList), [])

  const handleClientRegister = async (client: Omit<Client, "id">) => {
    setClientList([
      ...clientList,
      {
        id: new Date().getTime().toString(),
        ...client
      }
    ])
  }

  const handleRemoveClient = async (id: string) => {
    setSearchClientList(searchClientList.filter(client => client.id !== id))
    setClientList(clientList.filter(client => client.id !== id))
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

    setClientList([
      ...clientListWihtoutClient,
      {
        id,
        name: headings[0].innerText,
        city: headings[1].innerText,
        phoneNumber: texts[0].innerHTML,
        opts: texts[1].innerHTML.split("-")[1],
        houseNumber: smalls[0].innerHTML,
        street: texts[1].innerHTML.split("-")[0]
      }
    ])
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
      </div>

      <section>
        <NewEntity onSubmit={handleSubmit(handleClientRegister)}>
          <div>
            <input
              required
              autoFocus
              type="text"
              placeholder="Nome"
              {...register("name", {
                required: "Você precisa colocar um nome pro seu cliente"
              })}
            />
            <input
              required
              type="tel"
              placeholder="Número de telefone"
              {...register("phoneNumber")}
            />
            <input
              required
              type="text"
              placeholder="Cidade"
              {...register("city")}
            />
            <input
              required
              type="text"
              placeholder="Rua"
              {...register("street")}
            />
            <input
              required
              type="text"
              placeholder="Número da casa"
              {...register("houseNumber")}
            />
            <input
              required
              type="text"
              placeholder="Opcional"
              {...register("opts")}
            />
          </div>

          <Button>Criar Cliente</Button>
        </NewEntity>
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
                    <Card key={client.id}>
                      <CardTitle>
                        <h4>Informações</h4>
                      </CardTitle>

                      <CardContent>
                        <img
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
                        className="no-display"
                        data-icon="check"
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
    </Layout>
  )
}
// const ClientPage: FC<ClientProps> = ({ clients }) => {
//   const { register, handleSubmit } = useForm()
//   const [clientList, setClientList] = useState<Client[]>([])
//   const [clientSearchList, setClientSearchList] = useState<Client[]>([])
//   const { accessToken, user } = useAuth()

//   useEffect(() => setClientList(clients), [])

//   const createClient = async (data: Omit<Client, "id">) => {
//     setClientList([
//       ...clientList,
//       {
//         id: String(new Date().getTime()),
//         ...data
//       }
//     ])

//     await CreateClient({ ...data }, accessToken)
//   }

//   const searchClients = async (query: string) => {
//     const clients = await SearchClients(query, accessToken)
//     setClientSearchList(clients)
//   }

//   const handleRemoveClient = async (clientId: string) => {
//     setClientList(clientList.filter(client => client.id !== clientId))

//     await RemoveClient(clientId, user.id, accessToken)
//   }

//   return (
//     <ClientContainer>
//       <div className="search">
//         <Search
//           onChange={event => searchClients(event.target.value)}
//           results={[
//             {
//               title: <span>clientes</span>,
//               items: [
//                 <>
//                   {clientSearchList.map(client => {
//                     return <span>{client.name}</span>
//                   })}
//                 </>
//               ]
//             }
//           ]}
//           loadingMessage={
//             <CardContainer>
//               <h1>Todos os Clientes</h1>

//               <Card full={true}>
//                 <h5>No clients yet.</h5>
//               </Card>
//             </CardContainer>
//           }
//         />
//       </div>

//       {clientList.length === 0 ? (
//         <CardContainer>
//           <h1>Todos os Clientes</h1>

//           <Card full={true}>
//             <h5>No clients yet.</h5>
//           </Card>
//         </CardContainer>
//       ) : (
//         <ul>
//           <h1>Todos os Clientes</h1>

//           {clientList.map(client => {
//             return (
//               <Card key={client.id}>
//                 <strong>Informações:</strong>
//                 <p>{client.name}</p>
//                 <p>{client.phoneNumber}</p>

//                 <strong>Localização:</strong>
//                 <p>
//                   {client.street} - {client.city}
//                 </p>
//                 <p>casa nº: {client.houseNumber}</p>

//                 <strong>Opcional:</strong>
//                 <p>{client.opts}</p>

//                 <Button
//                   onClick={() => handleRemoveClient(client.id)}
//                   data-attr="remove"
//                 >
//                   <FilesRemove fontSize="2rem" />
//                 </Button>

//                 <Button data-attr="edit">
//                   <GenericEdit fontSize="2rem" />
//                 </Button>
//               </Card>
//             )
//           })}
//         </ul>
//       )}

//       <section>
//         <h1>Novo Cliente</h1>

//         <NewClientForm onSubmit={handleSubmit(createClient)}>
//           <div className="input-wrapper">
//             <TextInput
//               required
//               type="text"
//               label="name"
//               placeholder="nome"
//               {...register("name")}
//             />
//             <TextInput
//               required
//               type="tel"
//               label="telephone"
//               placeholder="telefone"
//               {...register("phoneNumber")}
//             />
//             <TextInput
//               required
//               type="text"
//               label="city"
//               placeholder="cidade"
//               {...register("city")}
//             />
//             <TextInput
//               required
//               type="text"
//               label="street"
//               placeholder="rua"
//               {...register("street")}
//             />
//             <TextInput
//               required
//               type="text"
//               label="houseNumber"
//               placeholder="número da casa"
//               {...register("houseNumber")}
//             />
//             <TextInput
//               required
//               type="text"
//               label="opts"
//               placeholder="//               {...register("opts")}
//             />
//           </div>

//           <Button fullWidth variant="tertiary">
//             Criar Cliente
//           </Button>
//         </NewClientForm>
//       </section>
//     </ClientContainer>
//   )
// }

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

  if (!!clients === false) {
    return {
      props: {
        notFound: true
      }
    }
  }

  return {
    props: {
      notFound: true
    }
  }
}
