import useSWR from "swr"
import { MutatorCallback } from "swr/dist/types"

import axios from "axios"
import { api } from "@services"

export type URLKeys = "/user" | "/client"

type Data = any

type Request = {
  custom?: boolean
  data?: any
  method?: "POST" | "PATCH" | "DELETE"
}

type Response<T> = {
  data: T[]
  error: any
  mutate: (
    data?: Data | Promise<Data> | MutatorCallback<Data>,
    shouldRevalidate?: boolean
  ) => Promise<Data | undefined>
}

export function useFetch<T>(
  url: URLKeys,
  { custom, method }: Request = {}
): Response<T> {
  if (custom) {
    axios.get(url)
  }

  if (method) {
    axios({ method, url })
  }

  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const { data } = await api.get(url)
    return data
  })

  return {
    data,
    error,
    mutate
  }
}
