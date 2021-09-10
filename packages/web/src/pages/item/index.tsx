// import { FC, useEffect, useState } from "react"
// import { GetServerSideProps } from "next"
// import { parseCookies } from "nookies"
// import { useForm } from "react-hook-form"

// import { GetItems, CreateItem, RemoveItem } from "@services"
// import { FilesRemove, GenericEdit } from "@heathmont/moon-icons"
// import { Button, Search, TextInput } from "@heathmont/moon-components"

// import { ItemContainer, CardContainer, Card, NewItemForm } from "./styles"
// import { useAuth } from "@hooks"
// import { Item } from "types/auth"

// type ItemProps = {
//   items: Item[]
//   notFound?: true
// }

// const ItemPage: FC<ItemProps> = ({ items, notFound }) => {
//   const { register, handleSubmit } = useForm()
//   const [itemList, setItemList] = useState<Item[]>([])
//   const { accessToken, user } = useAuth()

//   useEffect(() => setItemList(items), [])

//   const createItem = async (data: Omit<Item, "id" & "userId">) => {
//     setItemList([
//       ...itemList,
//       {
//         id: String(new Date().getTime()),
//         ...data
//       }
//     ])

//     await CreateItem({ ...data }, accessToken)
//   }

//   const handleRemoveItem = async (itemId: string) => {
//     setItemList(itemList.filter(item => item.id !== itemId))

//     await RemoveItem(itemId, user.id, accessToken)
//   }

//   if (notFound) {
//     return (
//       <ItemContainer>
//         <h1>could not find anything sorry</h1>
//       </ItemContainer>
//     )
//   }

//   return (
//     <ItemContainer>
//       <div className="search">
//         <Search loadingMessage={<span>procurando itens</span>} />
//       </div>

//       {itemList.length === 0 ? (
//         <CardContainer>
//           <h1>Todos os Itens</h1>

//           <Card full={true}>
//             <h5>No itens yet.</h5>
//           </Card>
//         </CardContainer>
//       ) : (
//         <ul>
//           <h1>Todos os Itens</h1>

//           {itemList.map(item => {
//             return (
//               <Card key={item.id}>
//                 <strong>Informações:</strong>
//                 <p>{item.name}</p>
//                 <p>{item.description}</p>

//                 <strong>Preço:</strong>
//                 <p>
//                   {item.price} - {item.discount}
//                 </p>

//                 <strong>Quantidade:</strong>
//                 <p>{item.quantity}</p>

//                 <Button
//                   onClick={() => handleRemoveItem(item.id)}
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
//         <h1>Novo Item</h1>

//         <NewItemForm onSubmit={handleSubmit(createItem)}>
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
//               type="text"
//               label="description"
//               placeholder="descrição"
//               {...register("description")}
//             />
//             <TextInput
//               required
//               type="number"
//               label="price"
//               placeholder="preço"
//               {...register("price")}
//             />
//             {/* <TextInput
//               required
//               type="text"
//               label="discount"
//               placeholder="disconto (unitário)"
//               {...register("itemDiscount")}
//             /> */}
//             <TextInput
//               required
//               type="text"
//               label="street"
//               placeholder="disconto (geral) %"
//               {...register("discount")}
//             />
//             <TextInput
//               required
//               label="quantity"
//               placeholder="quantidade"
//               {...register("quantity")}
//             />
//           </div>

//           <Button fullWidth variant="primary">
//             Criar Item
//           </Button>
//         </NewItemForm>
//       </section>
//     </ItemContainer>
//   )
// }

// export default ItemPage

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

//   const items = await GetItems(token)

//   if (!items) {
//     return {
//       props: {
//         notFound: true
//       }
//     }
//   }

//   return {
//     props: {
//       items
//     }
//   }
// }
export default function a() {
  return (
    <span>
      <h1>item</h1>
    </span>
  )
}
