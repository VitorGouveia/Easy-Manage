import { FC, useRef, useState } from "react"
import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import { Plus, X } from "react-feather"
import { AxiosError } from "axios"
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet"

import { Button } from "@components"
import { useAuth } from "@hooks"
import { getInfo, getInfoResponse, UpdateItem } from "@services"
import { Item, Order } from "types/auth"

import { SheetButton, NewEntityWrapper } from "@styles/basePage"
import { OrderContainer, NewOrder, History } from "@styles/pages/order"

type OrderPageType = {
  user: getInfoResponse
}

type OrderRegisterForm = {
  client: string
  item: string
  quantity: number
  itemqtd: number
}

const OrderPage: FC<OrderPageType> = ({ user }) => {
  const { register, handleSubmit } = useForm()
  const { accessToken } = useAuth()

  const [orderList, setOrderList] = useState<Order[]>([...(user.Order || [])])
  const [openSheet, setOpenSheet] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)
  const sheetRef = useRef<BottomSheetRef>(null)

  const handleRegister = async (order: OrderRegisterForm) => {
    try {
      const item = user.Item.find(item => item.name === order.item)

      const newItem: Item = {
        ...item,
        quantity: item.quantity - order.itemqtd * order.quantity
      }

      console.log(newItem.quantity)

      /* remove the quantity of items from the item * the order */
      await UpdateItem(item.id, accessToken, newItem)

      setOrderList([
        {
          client: user.Client.find(client => client.name === order.client),
          item: newItem,
          quantity: order.quantity,
          user,
          id: new Date().getTime().toString()
        },
        ...orderList
      ])
    } catch (error) {
      const axiosError = error as AxiosError
      const APIError = axiosError.response.data.error

      console.log(APIError)
    }
  }

  const handleRemove = async (id: string) => {
    setOrderList(orderList.filter(order => order.id !== id))
  }

  return (
    <OrderContainer>
      <div>
        <Button outlined onClick={() => setOpenSheet(true)}>
          <Plus />
        </Button>
      </div>

      <History tabIndex={1}>
        <div tabIndex={2}>
          <span>Item</span>
          <span>Cliente</span>
          <span>Qtd (itens)</span>
          <span>Qtd (pedidos)</span>
          <span>Data</span>
          <span></span>
        </div>

        <div className="content" tabIndex={3}>
          {orderList.length === 0 ? (
            <section className="notFound">
              <span>Não achei nenhum pedido</span>
            </section>
          ) : (
            <>
              {orderList.map(order => {
                return (
                  <article key={order.id} tabIndex={4}>
                    <span>{order.client.name}</span>
                    <span>{order.item.name}</span>
                    <span>{order.item.quantity}</span>
                    <span>{order.quantity}</span>
                    <span>{new Date().toLocaleDateString("pt-BR")}</span>
                    <span
                      className="logo"
                      onClick={() => handleRemove(order.id)}
                    >
                      <X size={12} strokeWidth={6} />
                    </span>
                  </article>
                )
              })}
            </>
          )}
        </div>
      </History>

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
              onClick={() =>
                sheetRef.current.snapTo(({ snapPoints }) =>
                  Math.min(...snapPoints)
                )
              }
            >
              Fechar
            </Button>
          </SheetButton>
        }
      >
        <NewEntityWrapper>
          <NewOrder onSubmit={handleSubmit(handleRegister)}>
            <input
              required
              type="number"
              id="qtd"
              placeholder="Quantidade"
              {...register("quantity")}
            />

            <label htmlFor="item">Itens</label>
            <select
              required
              id="item"
              placeholder="itens"
              ref={selectRef}
              name="item"
              {...register("item")}
            >
              {user.Item.map(item => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>

            <input
              required
              type="number"
              min="0"
              id="itemQTD"
              name="itemqtd"
              placeholder={`qtd`}
              {...register("itemqtd")}
            />

            <label htmlFor="client">Clientes</label>
            <select required id="client" name="client" {...register("client")}>
              {user.Client.map(client => {
                return (
                  <option key={client.id} value={client.name}>
                    {client.name}
                  </option>
                )
              })}
            </select>

            <Button>Criar pedido</Button>
          </NewOrder>
        </NewEntityWrapper>
      </BottomSheet>
    </OrderContainer>
  )
}

export default OrderPage

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

  const user = await getInfo(token)

  if (!user) {
    return {
      props: {
        user: []
      }
    }
  }

  return {
    props: {
      user
    }
  }
}
