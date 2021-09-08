import { BaseResponse } from "@infra/http/interface/Response"

import { Order } from "@order/entities"

export interface CreateOrderRequestDTO {
  quantity: number
  itemId: string
  token: string
}

export interface CreateOrderResponseDTO extends BaseResponse {
  order: Order
}
