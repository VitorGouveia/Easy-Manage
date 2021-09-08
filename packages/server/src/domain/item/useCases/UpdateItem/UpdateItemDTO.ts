import { BaseResponse } from "@infra/http/interface/Response"

import { Item } from "@item/entities"

export interface UpdateItemRequestDTO {
  token: string
  itemId: string
  name: string
  description: string
  price: number
  discount: number
}

export interface UpdateItemResponseDTO extends BaseResponse {
  item: Item
}
