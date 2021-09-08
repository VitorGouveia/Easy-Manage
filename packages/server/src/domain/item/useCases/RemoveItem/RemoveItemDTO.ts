import { BaseResponse } from "@infra/http/interface/Response"

import { Item } from "@item/entities"

export interface RemoveItemRequestDTO {
  id: string
}

export interface RemoveItemResponseDTO extends BaseResponse {
  item: Item
}
