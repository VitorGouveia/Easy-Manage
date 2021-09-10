// import { FC, useEffect, useState } from "react"
// import { GetServerSideProps } from "next"
// import { parseCookies } from "nookies"
// import { useForm } from "react-hook-form"

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
// import { Client } from "types/auth"

// type ClientProps = {
//   clients: Client[]
// }

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
//               placeholder="referência"
//               {...register("opts")}
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

// export default ClientPage

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { "fastgas.token": token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false
//       }
//     }
//   }

//   const clients = await GetClients(token)

//   if (!clients) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       clients
//     }
//   }
// }
export default function a() {
  return (
    <span>
      <h1>dwdwa</h1>
    </span>
  )
}
