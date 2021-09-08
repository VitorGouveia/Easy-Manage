import { BaseResponse } from "@infra/http/interface/Response"

import { Item } from "@item/entities"

export interface CreateItemRequestDTO {
  token: string
  name: string
  description: string
  price: number
  discount: number
}

export interface CreateItemResponseDTO extends BaseResponse {
  item: Item
}
