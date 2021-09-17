import { GetServerSideProps } from "next"
import { FC, useRef, useState } from "react"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import { Trash, Edit2, Check, Search, Plus } from "react-feather"
import { AxiosError } from "axios"
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet"

import { GetItems, CreateItem, RemoveItem, UpdateItem } from "@services"
import { Button } from "@components"
import { useAuth } from "@hooks"
import { Item } from "types/auth"

import {
  Layout,
  Card,
  CardContent,
  CardTitle,
  NotFoundCard,
  NewEntityWrapper,
  SheetButton
} from "@styles/basePage"

import { NewItem } from "@styles/pages/item"

type ItemPageProps = {
  items: Item[]
}

const ItemPage: FC<ItemPageProps> = ({ items }) => {
  const { register, handleSubmit, setError, formState } = useForm()
  const { accessToken, user } = useAuth()

  const { errors } = formState

  const [itemList, setItemList] = useState<Item[]>([...(items || [])])
  const [searchItemList, setSearchItemList] = useState<Item[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [openSheet, setOpenSheet] = useState(false)

  const sheetRef = useRef<BottomSheetRef>(null)

  const handleRegister = async (item: Omit<Item, "id">) => {
    try {
      const { data } = await CreateItem({ ...item }, accessToken)
      setItemList([
        {
          id: data.item.id,
          ...item
        },
        ...itemList
      ])
    } catch (error) {
      const axiosError = error as AxiosError

      const APIError = axiosError.response.data.error
      console.log(APIError)
    }
  }

  const handleRemove = async (id: string) => {
    setSearchItemList(searchItemList.filter(item => item.id !== id))
    setItemList(itemList.filter(item => item.id !== id))

    try {
      await RemoveItem(id, user.id, accessToken)
    } catch (error) {
      console.log(error.response.data.error)
      alert("Alguma coisa deu errado ao remover um item. Tente novamente")
    }
  }

  const handleEdit = async (id: string) => {
    setIsEditing(!isEditing)
    const headings: NodeListOf<HTMLElement> = document.querySelectorAll(
      `li[data-id="${id}"] h6`
    )

    const texts: NodeListOf<HTMLElement> = document.querySelectorAll(
      `li[data-id="${id}"] p`
    )

    const small: HTMLElement = document.querySelector(
      `li[data-id="${id}"] small`
    )
    const name = headings[0].innerText
    const price = Number(headings[1].innerText)

    const description = texts[0].innerText
    const quantity = Number(texts[1].innerText)
    const discount = Number(small.innerText)

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
      small.setAttribute("contenteditable", "true")
    } else {
      headings.forEach(heading =>
        heading.setAttribute("contenteditable", "false")
      )
      texts.forEach(text => text.setAttribute("contenteditable", "false"))
      small.setAttribute("contenteditable", "false")
    }

    const itemListWithoutItem = itemList.filter(item => item.id !== id)

    const newItem: Item = {
      id,
      name,
      description,
      quantity,
      price,
      discount,
      userId: user.id
    }

    setItemList([
      {
        ...newItem
      },
      ...itemListWithoutItem
    ])

    try {
      await UpdateItem(id, accessToken, { ...newItem })
    } catch (error) {
      /* handle the same number error */
      const axiosError = error as AxiosError

      const APIError = axiosError.response.data.error

      console.log(APIError)
    }
  }

  const handleSearch = async (query: string) => {
    const searchResult = itemList.filter(
      item => item.name.includes(query) === true
    )

    setSearchItemList([...searchResult])
  }

  return (
    <Layout>
      <div className="search">
        <input
          type="text"
          placeholder="Pesquise itens"
          onChange={event => handleSearch(event.target.value)}
        />

        <Search size={16} color="#fff" />
      </div>

      <section>
        <Button
          outlined
          onClick={() => {
            setOpenSheet(true)
          }}
        >
          <Plus />
        </Button>
      </section>

      <ul>
        {itemList.length <= 0 ? (
          <NotFoundCard>
            Não consegui achar nenhum item.
            <br />
            Tenta criar um.
          </NotFoundCard>
        ) : (
          <>
            {searchItemList.length > 0 ? (
              <>
                {searchItemList.map(item => {
                  return (
                    <Card data-id={item.id} key={item.id}>
                      <CardTitle>
                        <h4>Informações</h4>
                      </CardTitle>

                      <CardContent>
                        <img
                          width={32}
                          height={32}
                          src={`https://avatars.dicebear.com/api/bottts/${item.name}.svg`}
                          alt=""
                        />
                        <h6>{item.name}</h6>
                        <p>{item.description}</p>
                      </CardContent>

                      <CardTitle>
                        <h4>Preço</h4>
                      </CardTitle>
                      <CardContent type="outlined">
                        <h6 data-text="Preço R$:">{item.price}</h6>
                        <p data-text="QTD:">{item.quantity}</p>
                        <small data-text="Desconto: R$">{item.discount}</small>
                      </CardContent>

                      <Trash
                        onClick={() => handleRemove(item.id)}
                        size={16}
                        color="#fff"
                      />

                      <Edit2
                        data-icon="edit"
                        onClick={() => handleEdit(item.id)}
                        size={16}
                        color="#fff"
                      />

                      <Check
                        className="no-display"
                        data-icon="check"
                        onClick={() => handleEdit(item.id)}
                        size={16}
                        color="#fff"
                      />
                    </Card>
                  )
                })}
              </>
            ) : (
              <>
                {itemList.map(item => {
                  return (
                    <Card data-id={item.id} key={item.id}>
                      <CardTitle>
                        <h4>Informações</h4>
                      </CardTitle>

                      <CardContent>
                        <img
                          width={32}
                          height={32}
                          src={`https://avatars.dicebear.com/api/bottts/${item.name}.svg`}
                          alt=""
                        />
                        <h6>{item.name}</h6>
                        <p>{item.description}</p>
                      </CardContent>

                      <CardTitle>
                        <h4>Preço</h4>
                      </CardTitle>
                      <CardContent type="outlined">
                        <h6 data-text="Preço R$:">{item.price}</h6>
                        <p data-text="QTD:">{item.quantity}</p>
                        <small data-text="Desconto: R$">{item.discount}</small>
                      </CardContent>

                      <Trash
                        onClick={() => handleRemove(item.id)}
                        size={16}
                        color="#fff"
                      />

                      <Edit2
                        data-icon="edit"
                        onClick={() => handleEdit(item.id)}
                        size={16}
                        color="#fff"
                      />

                      <Check
                        className="no-display"
                        data-icon="check"
                        onClick={() => handleEdit(item.id)}
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
          <NewItem onSubmit={handleSubmit(handleRegister)}>
            <input
              required
              autoFocus
              type="text"
              placeholder="Nome"
              id="name"
              {...register("name", {
                required: "Você precisa dar um nome ao seu item!"
              })}
            />

            <textarea
              required
              rows={4}
              cols={40}
              placeholder="Descrição"
              id="description"
              {...register("description")}
            />

            {errors.price && <span>{errors.price.message}</span>}
            <input
              required
              type="number"
              placeholder="Preço (números apenas)"
              id="price"
              {...register("price")}
            />

            <input
              required
              type="number"
              placeholder="Desconto (números apenas)"
              id="discount"
              {...register("discount")}
            />

            <input
              required
              autoFocus
              type="number"
              placeholder="Quantidade (números apenas)"
              id="quantity"
              {...register("quantity")}
            />

            <Button>Criar Item</Button>
          </NewItem>
        </NewEntityWrapper>
      </BottomSheet>
    </Layout>
  )
}

export default ItemPage

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { "fastgas.token": token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true
      }
    }
  }

  const items = await GetItems(token)

  if (items.length === 0) {
    return {
      props: {
        notFound: true
      }
    }
  }

  return {
    props: {
      items
    }
  }
}
