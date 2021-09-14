import { GetServerSideProps } from "next"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import { Trash, Edit2, Check } from "react-feather"
import { AxiosError } from "axios"

import { GetItems, CreateItem, RemoveItem, UpdateItem } from "@services"
import { Button } from "@components"
import { useAuth } from "@hooks"
import { Item } from "types/auth"

import {
  Layout,
  NewEntity,
  Card,
  CardContent,
  CardTitle,
  NotFoundCard
} from "@styles/basePage"

type ItemPageProps = {
  items: Item[]
  notFound: boolean
}

const ItemPage: FC<ItemPageProps> = ({ items, notFound }) => {
  const { register, handleSubmit, setError, formState } = useForm()
  const { accessToken, user } = useAuth()

  const { errors } = formState

  const [itemList, setItemList] = useState<Item[]>([])
  const [searchItemList, setSearchItemList] = useState<Item[]>([])
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setItemList(items || [])
  }, [])

  const handleRegister = async (item: Omit<Item, "id">) => {
    try {
      const { data } = await CreateItem({ ...item }, accessToken)

      setItemList([
        ...itemList,
        {
          id: data.item.id,
          ...item
        }
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
    const texts = document.querySelectorAll(`li[data-id="${id}"] p`)
    const small = document.querySelector(`li[data-id="${id}"] small`)

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
      name: headings[0].innerHTML,
      description: texts[0].innerHTML,
      quantity: Number(small.innerHTML.split("desconto:")[1]),
      price: Number(headings[1].innerText.replace(/[^0-9.-]+/g, "")),
      discount: Number(small.innerHTML.split("desconto: ")[1]),
      userId: user.id
    }
    console.log(newItem)
    setItemList([
      ...itemListWithoutItem,
      {
        ...newItem
      }
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

    setSearchItemList(searchResult)
  }

  return (
    <Layout>
      <div className="search">
        <input
          type="text"
          placeholder="Pesquise itens"
          onChange={event => handleSearch(event.target.value)}
        />
      </div>

      <section>
        <NewEntity onSubmit={handleSubmit(handleRegister)}>
          <div>
            <input
              required
              autoFocus
              type="text"
              placeholder="Nome"
              {...register("name", {
                required: "Você precisa colocar um nome pro seu item"
              })}
            />
            <input
              required
              type="text"
              placeholder="Descrição (opcional)"
              {...register("description")}
            />

            <input
              required
              type="text"
              placeholder="price"
              {...register("price")}
            />

            <input
              required
              type="text"
              placeholder="Desconto (opcional)"
              {...register("discount")}
            />

            <input
              required
              type="text"
              placeholder="Quantidade"
              {...register("quantity")}
            />
          </div>

          <Button>Criar Item</Button>
        </NewEntity>
      </section>

      <ul>
        {itemList.length <= 0 || notFound ? (
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
                        <Image
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
                        <h6>{item.price}</h6>
                        <p>qtd: {item.quantity}</p>
                        <small>desconto: {item.discount}</small>
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
                        <Image
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
                        <h6>{item.price}</h6>
                        <p>qtd: {item.quantity}</p>
                        <small>desconto: {item.discount}</small>
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
