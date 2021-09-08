import { BaseResponse } from "@infra/http/interface/Response"

import { Item } from "@infra/prisma"

export interface ListItemRequestDTO {
  token: string
}

export interface ListItemResponseDTO extends BaseResponse {
  items: Item[]
}
